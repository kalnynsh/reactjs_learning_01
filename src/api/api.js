import {FETCH_PARAMS_MGET} from '../constants/FETCH_PARAMS';
import {BASE_URL} from '../constants/URLS';

export const searchApi = query => (
    fetch((BASE_URL + '/search/shows?q=' + query), FETCH_PARAMS_MGET)
    .then(response => response.json())
    .then(shows => shows.map(item => item.show))
);

export const showApi = showID => (
    fetch((BASE_URL + '/shows/' + showID + '?embed=cast'), FETCH_PARAMS_MGET)
    .then(response => response.json())
);
