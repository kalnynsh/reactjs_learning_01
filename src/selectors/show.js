import { LOADING_STATE } from '../constants/LOADING_STATE';

export const getShowData = state => {
    const { id, image, name, summary, _embedded } = state.show.result;

    return {
        id: id,
        image: image ? image : null,
        name: name,
        summary: summary,
        persons: _embedded ? getPersons(_embedded) : '',
    };
};

const getPersons = persons => {
    return persons.cast.map(element => element.person);
}

export const getLoadingState = state => state.show.loadingState;

export const showIsLoaded = state => (
    getLoadingState(state) === LOADING_STATE.success
        && getLoadingState(state) !== LOADING_STATE.loading
);

export const showIsFailure = state => (
    getLoadingState(state) === LOADING_STATE.failure
        && getLoadingState(state) !== LOADING_STATE.loading
);

export const showIsLoading = state => (
    getLoadingState(state) === LOADING_STATE.loading
);
