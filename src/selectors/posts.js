// getgetVisibleExpenses
import moment from 'moment';
//apply the filters to the posts array
//each post has title and body properties
//startdate and enddate, if implemented, would go inside paramters of the function
export default (posts, {text, sortBy, startDate, endDate}) => { 
    return posts.filter((post) => {
        const createdAtMoment = moment(post.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch = post.body.toLowerCase().includes(text.toLowerCase());
        //console.log(expense.description.toLowerCase());
        //console.log(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
        //return textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1:-1;
        }
        if(sortBy === 'title')  {
            return a.title < b.title ? 1:-1;
        }
    });
};

 