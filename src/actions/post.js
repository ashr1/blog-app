import uuid from 'uuid';

export const addPost = (post) => ({
    type: 'ADD_POST',
    id: uuid(),
    post
});

export const editPost = (id, postUpdates) => ({
    type: 'EDIT_POST',
    id,
    postUpdates
});

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
});