import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export const DashboardPage = (props) => (
    <div className="content-container">
        <div>
            <input
                type="text"
                placeholder="Search posts"
            />
            <select 
                            className="select"
                            value={'title'} 
                            onChange={() => (console.log('you changed the post sort value'))}
                        >
                            <option value="title">By Title</option>
                            <option value="amount">Amount</option>
                        </select>
                        <Link  to="/create"><button>Add Post</button></Link>
            
        </div>
        <div>
            <Link  to="/edit"><p>Setting Up Webpack</p></Link>
            {props.posts.length === 0 ? (
                <div>
                    <span>No posts</span>
                </div>
            ) : (
                props.posts.map((post) => <p>{post.title}</p>)
            )}
        </div>

        
        
    </div>
);

//export default DashboardPage; => original

/*
<input
                        type="text"
                        placeholder="description"
                        autoFocus 
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
*/

const mapStateToProps = (state, props) => {
    return {
        posts: state.post
    };
};  

export default connect(mapStateToProps)(DashboardPage);
/*
{props.expenses.length === 0 ? (
    <div className="list-item list-item--message">
        <span>No expense</span>
    </div>
) : (
    props.expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id} />)
)}*/