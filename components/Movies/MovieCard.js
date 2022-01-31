import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import CardItem from './CardItem';

const MovieCard = ({movies: {popular}}) => {
    return(
        <SwipeCards loop = {true} showYup = {false} showNope = {false} style = {{flex: 1}} cards = {popular}
            hasMaybeAction = {true}
            renderCard = {(item) => (
                <CardItem key = {item.id} popularItem = {item}/>
            )}
        />
    )
};

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieCard);

