import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, setSortByTitle, setSortByDate, setStartDate, setEndDate} from '../actions/filters';
import selectedPosts from '../selectors/posts';

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        };
    };

    onDatesChange = ({startDate, endDate}) => {
        //this.props.dispatch(setStartDate(startDate));
        this.props.setStartDate(startDate);
        //this.props.dispatch(setEndDate(endDate));
        this.props.setEndDate(endDate);
    };
    onFocusChange=(calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

   onTextChange = (e) => {
       //this.props.dispatch(setTextFilter(e.target.value));
       this.props.setTextFilter(e.target.value);
   };

    onSelectChange = (e) => {
        if(e.target.value === 'date') {
            //this.props.dispatch(sortByDate());
            this.props.setSortByDate();
        } else if(e.target.value === 'title') {
            //this.props.dispatch(sortByAmount());
            this.props.setSortByTitle();
        }
    };

    render() {
        return (
            <div className="content-container">
        <div>
            <input
                type="text"
                placeholder="Search posts"
                value={this.props.filters.text} 
                onChange={this.onTextChange}
            />
            <select 
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSelectChange}
                        >
                            <option value="title">By Title</option>
                            <option value="date">Date</option>
                        </select>
                        
<DateRangePicker 
startDate={this.props.filters.startDate}
endDate={this.props.filters.endDate}
onDatesChange={this.onDatesChange}
focusedInput={this.state.calendarFocused}
onFocusChange={this.onFocusChange}
showClearDates={true}
numberOfMonths={1}
isOutsideRange={() => false}
/>
                        <Link  to="/create"><button>Add Post</button></Link>
            
        </div>

        
        <div>
            <Link  to="/edit"><p>Setting Up Webpack</p></Link>
            {this.props.posts.length === 0 ? (
                <div>
                    <span>No posts</span>
                </div>
            ) : (
                this.props.posts.map((post) => <p key={post.id}><Link to={`/edit/${post.id}`}>{post.title}</Link></p>)
            )}
        </div> 
    </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setSortByTitle: () => dispatch(setSortByTitle()),
    setSortByDate: () => dispatch(setSortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const mapStateToProps = (state, props) => {
    return {
        posts: selectedPosts(state.post, state.filters),
        //posts: state.post,
        filters: state.filters
    };
};  

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage); 

/*export const DashboardPage = (props) => (
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
                props.posts.map((post) => <p key={post.id}><Link to={`/edit/${post.id}`}>{post.title}</Link></p>)
            )}
        </div>

        
        
    </div>
);*/

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


/*
{props.expenses.length === 0 ? (
    <div className="list-item list-item--message">
        <span>No expense</span>
    </div>
) : (
    props.expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id} />)
)}*/