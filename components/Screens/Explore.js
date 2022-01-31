import React, {useEffect} from 'react';
import MovieCard from '../Movies/MovieCard';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {getPopular} from '../../store/Actions/movieActions';

const Explore = ({getPopular, navigation}) => {

    useEffect(() => {
       getPopular();
    }, [])

    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress = {() => console.log("The swipe button was tapped")}>
                <MovieCard />
            </TouchableWithoutFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default connect(null, {getPopular})(Explore);