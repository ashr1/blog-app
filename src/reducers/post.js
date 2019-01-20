const postsReducerDefaultState = [];

export default (state=postsReducerDefaultState, action) => {
    
    switch(action.type) {
        case 'ADD_POST':
        console.log(action);
            return [...state, action.post];
        default:
            return state;
    }
};