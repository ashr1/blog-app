const postsReducerDefaultState = [];

export default (state=postsReducerDefaultState, action) => {
    
    switch(action.type) {
        case 'ADD_POST':
            console.log(action);
            //const newpost = {...action.post, id: action.id};
            const newpost = {...action.post};
            return [...state, newpost];
        case 'EDIT_POST':
        //need array without the expense and need the expense, id 
            return state.map((post) => {
                const updates = action.postUpdates;
                if(post.id === action.id) {
                    return {...post, ...updates}; 
                }
                return post;
            });
        case 'REMOVE_POST':
            const notWantedPost = action.id;
            return state.filter((post) => post.id !== notWantedPost);
        default:
            return state;
    }
};