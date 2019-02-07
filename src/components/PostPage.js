import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import {startLogout} from '../actions/auth';
 
export const PostPage = (props) => (
    <div>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
    </div>
    /*<header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard"><h1>My Blog</h1></Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div> 
    </header>

    <p>{props.match.params.userid}</p>
        <p>{props.match.params.postid}</p>
    */
);

const mapStateToProps = (state, props) => ({
    post: state.post.find((post) => post.id === props.match.params.postid)
});

/*const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});*/

export default connect(mapStateToProps)(PostPage);