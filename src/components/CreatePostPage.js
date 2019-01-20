import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addPost} from '../actions/post';

export class CreatePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
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
        console.log('save posts and post appears in list of all post on the dashboard page');
        console.log(`title: ${this.state.title}`);
        console.log(`body: ${this.state.body}`);
        //need to dispatch  
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.addPost(post);
    };

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(addPost(post))
});

/*const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});*/

export default connect(undefined, mapDispatchToProps)(CreatePostPage);