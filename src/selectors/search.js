import { LOADING_STATE } from '../constants/LOADING_STATE';

export const getSearchData = state => {
    return state.search.result.map(({ id, image, name, summary }) => ({
        id: id,
        image: image ? image : null,
        name: name,
        summery: summary
    }));
}

export const getLoadingState = state => state.search.loadingState;

export const searchIsLoaded = state => (
    getLoadingState(state) === LOADING_STATE.success
        && getLoadingState(state) !== LOADING_STATE.loading
);

export const searchIsFailure = state => (
    getLoadingState(state) === LOADING_STATE.failure
        && getLoadingState(state) !== LOADING_STATE.loading
);

export const searchIsLoading = state => (
    getLoadingState(state) === LOADING_STATE.loading
);

export const searchIsIdle = state => (
    getLoadingState(state) === LOADING_STATE.idle
);
