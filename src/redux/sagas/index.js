import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api'; 

function* fetchPostSaga(action) {
const posts = yield call(api.fetchPosts);
console.log('[posts]', posts);
yield put(action.getPosts.getPostsRequest(posts));
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
}

export default mySaga;