//import uuid from 'uuid';
/*
database.ref().set({
    users: {
      user1: {
        blog: {
          post1: {
            title: 'win at daily life',
            body: 'just stuff I figured out while at home post-college'
          }
        }
      }
    }
  });
  */
 
import database from '../firebase/firebase';

export const addPost = (post) => ({
    type: 'ADD_POST',
    //id: uuid(),
    post
});

export const startAddPost = (postData={}) => {
    return (dispatch, getState) => {
        //writing data to firebase, waiting for it to sync and then dispatch to addExpense, ensuring changes to redux store
        const {
            title= '',
            body= '',
            createdAt= 0    
        } = postData;
        const post = {title, body, createdAt};

        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/blog`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        });
    };
};  

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/blog`).once('value').then((snapshot) => {
            const posts = [];
            snapshot.forEach((childSnapshot) => {
                const id = childSnapshot.key;
                posts.push({id, ...childSnapshot.val()});
            });
            dispatch(setPosts(posts));
        });
        
    };
};

export const editPost = (id, postUpdates) => ({
    type: 'EDIT_POST',
    id,
    postUpdates
});

export const startEditPost = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/blog/${id}`).update(updates).then(() => {
            dispatch(editPost(id,updates));
        });
    };
};

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
});
/*
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
*/
export const startRemovePost = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/blog/${id}`).remove().then(() => {
            dispatch(removePost(id));
        });
    };
};