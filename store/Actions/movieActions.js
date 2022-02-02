import {GET_POPULAR, GET_TOP_RATED, GET_UPCOMING, GET_TRENDING, GET_DETAILS, GET_SIMILAR_MOVIES, ADD_TO_FAVORITE, GET_FAVORITES,  MOVIES_ERROR, SET_LOADING} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getPopular = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=[YOUR_API_KEY_HERE]&language=en-US&page=1');
        const data = await response.json();
        const results = data.results;
        dispatch({
            type: GET_POPULAR,
            payload: results
        })
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
};

export const getTrending = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=[YOUR_API_KEY_HERE]&language=en-US&page=1");
        const data = await response.json();
        const results = data.results;
        dispatch({
            type: GET_TRENDING,
            payload: results
        })
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
};

export const getTopRated = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=[YOUR_API_KEY_HERE]&language=en-US&page=1");
        const data = await response.json();
        const results = data.results;
        dispatch({
            type: GET_TOP_RATED,
            payload: results
        });
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }   
};

export const getUpcoming = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=[YOUR_API_KEY_HERE]&language=en-US&page=1");
        const data = await response.json();
        const results = data.results;
        dispatch({
            type: GET_UPCOMING,
            payload: results
        });
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
};

export const getDetails = (id) => async dispatch => {
    try {
        setLoading();
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=[YOUR_API_KEY_HERE]&language=en-US`);
        const data = await response.json();
        dispatch({
            type: GET_DETAILS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
};

export const getSimilarMovies = (id) => async dispatch => {
    try {
        setLoading();
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=[YOUR_API_KEY_HERE]&language=en-US&page=1`);
        const data = await response.json();
        const results = data.results;
        console.log(`The results are: ${results}`);
        dispatch({
            type: GET_SIMILAR_MOVIES,
            payload: results
        })
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
};

export const addToFavorite = (item) => async dispatch => {
    try {
        setLoading();
        const response = await fetch("http://localhost:5001/favorites", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_TO_FAVORITE,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
}

export const getFavorites = () => async dispatch => {
    try {
        const response = await fetch("http://localhost:5001/favorites");
        const data = await response.json();
        dispatch({
            type: GET_FAVORITES,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: MOVIES_ERROR,
            payload: error
        })
    }
}