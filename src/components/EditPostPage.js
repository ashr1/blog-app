import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
 
export const EditPostPage = (props) => (
    <div>
        
        <button>Save Post</button>
        <button>Remove Post</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(EditPostPage);