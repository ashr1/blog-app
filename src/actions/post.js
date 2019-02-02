//import uuid from 'uuid';
import database from '../firebase/firebase';

export const addPost = (post) => ({
    type: 'ADD_POST',
    //id: uuid(),
    post
});
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

export const editPost = (id, postUpdates) => ({
    type: 'EDIT_POST',
    id,
    postUpdates
});

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