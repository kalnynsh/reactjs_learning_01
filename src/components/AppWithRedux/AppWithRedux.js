import { connect } from 'react-redux';
import App from '../App';
import { addComment } from '../../actions/commentsActions';
import { addUser } from '../../actions/usersActions';
import {
    getCommentsCounts,
    getLast10Comments,
    getComments
} from '../../reducers/comments';
import { getUsersCount, getUsersArray } from '../../reducers/users';

const mapStateToProps = state => ({
    // countComments: state.comments.count,
    countComments: getCommentsCounts(state),
    commentsLast10: getLast10Comments(state),
    commentsArray: getComments(state),
    // countUsers: state.users.count,
    countUsers: getUsersCount(state),
    usersArray: getUsersArray(state),
});

// Example
// const mapDispatchToProps = {
//     addComment: arg => store.dispatch(addComment(arg)),
//     addUser: arg => store.dispatch(addUser(arg)),
// };

const mapDispatchToProps = {
    addComment,
    addUser,
};

const AppWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
    )(App);

export default AppWithRedux;
