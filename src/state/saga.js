import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './mainSlice';
import callApi from '../util/callApi'

function* testCall({payload}) {
    const { isSuccess, data } = yield call(callApi, {
        url: 'http://localhost:5000/test',
        data: payload,
        method: 'post',
    });

    if(isSuccess && data){
        console.log(data)
        yield put(actions.setValue('value', data.id));
    }
}


export function* watchUnsplash() {
    yield all([
        takeLatest(actions.testCall, testCall),
    ]);
}