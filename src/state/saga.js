import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { actions } from './mainSlice';
import callApi from '../util/callApi'
import { useSelector } from 'react-redux'
import { getState } from './mainSlice';

function* getPersonInfo({payload}) {
    const { isSuccess, data } = yield call(callApi, {
        url: 'http://localhost:5000/getPersonInfo',
        data: payload,
        method: 'post',
    });

    if(isSuccess && data){
        yield put(actions.setValue('personInfo', data));
        yield put(actions.getCompanyInfo(payload));
    }
}

function* getCompanyInfo({payload}) {
    const { isSuccess, data } = yield call(callApi, {
        url: 'http://localhost:5000/getCompanyInfo',
        data: payload,
        method: 'post',
    });

    if(isSuccess && data){
        yield put(actions.setValue('companyInfo', data));
        yield put(actions.getProjectInfo(payload));
    }
}

function* getProjectInfo({payload}) {
    const { isSuccess, data } = yield call(callApi, {
        url: 'http://localhost:5000/getProjectInfo',
        data: payload,
        method: 'post',
    });

    if(isSuccess && data){
        yield put(actions.setValue('projectInfo', data));
    }
}


export function* watchUnsplash() {
    yield all([
        takeLatest(actions.getPersonInfo, getPersonInfo),
        takeLatest(actions.getCompanyInfo, getCompanyInfo),
        takeLatest(actions.getProjectInfo, getProjectInfo),
    ]);
}