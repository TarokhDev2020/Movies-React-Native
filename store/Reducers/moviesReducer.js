import {GET_POPULAR, GET_TRENDING, GET_TOP_RATED, GET_UPCOMING, GET_DETAILS, GET_SIMILAR_MOVIES, ADD_TO_FAVORITE, GET_FAVORITES, MOVIES_ERROR, SET_LOADING} from '../Actions/types';

const initialState = {
    popular: null,
    trending: null,
    topRated: null,
    upcoming: null,
    detail: null,
    similar: null,
    favorite: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_POPULAR:
            //console.log(`The popular movies are: ${action.payload}`)
            return {
                ...state,
                popular: action.payload,
                loading: false,
                error: null
            }

        case GET_TRENDING:
            //console.log(`The trending items are: ${trending}`)
            return {
                ...state,
                trending: action.payload,
                loading: false,
                error: null
            }

        case GET_TOP_RATED:
            return {
                ...state,
                topRated: action.payload,
                loading: false,
                error: null
            }
            
        case GET_UPCOMING:
            return {
                ...state,
                upcoming: action.payload,
                loading: false,
                error: null
            }
            
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
                loading: false,
                error: null
            }
            
        case GET_SIMILAR_MOVIES:
            //console.log("The similar movies are" + " " + action.payload);
            return {
                ...state,
                similar: action.payload,
                loading: false,
                error: null
            }
            
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, action.payload],
                loading: false,
                error: null
            }
            
        case GET_FAVORITES:
            return {
                ...state,
                favorite: action.payload,
                loading: false,
                error: null
            }
            
        case MOVIES_ERROR: {
            console.log(`The error is: ${action.payload}`)
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }    

        default:
            return {
                ...state
            }
    }
}