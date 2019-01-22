import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {editPost, removePost} from '../actions/post';

export class EditPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post ? this.props.post.title : '',
            body: this.props.post ? this.props.post.body : ''
        };
    };
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };
    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({body}));
    };
    savePost = () => {
        console.log('post is saved');
        this.props.editPost(this.props.match.params.id, {
            title: this.state.title,
            body: this.state.body
        });
        this.props.history.push('/dashboard');
    };
    removePost = () => {
        this.props.removePost();
        this.props.history.push('/dashboard');
    };
    render() {
        return (
            <div>
                <p>Post readable at http://app.com/read/123abc</p>
                <input
                    type="text"
                    placeholder="Post title"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea
                    placeholder="Post body"
                    className="textarea"
                    value={this.state.body}
                    onChange={this.onBodyChange}
                >
                </textarea>
                <button onClick={this.savePost}>Save Post</button>
                <button onClick={this.removePost}>Remove Post</button>
            </div>);
    }
}
 /*
export const EditPostPage = (props) => (
    <div>
<p>{props.post && props.post.title}</p>
        <button>Save Post</button>
        <button>Remove Post</button>
    </div>
);*/

const mapDispatchToProps = (dispatch, props) => ({
    editPost: (id, postUpdates) => dispatch(editPost(id, postUpdates)),
    removePost: (id) => dispatch(removePost(props.match.params.id))
});

const mapStateToProps = (state, props) => ({
    post: state.post.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);