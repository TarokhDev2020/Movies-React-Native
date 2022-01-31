import React from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';

const Trending = ({movies: {trending}, navigation}) => {
    return (
        trending.map((item) => (
            <TouchableWithoutFeedback onPress = {() => navigation.navigate('Detail', {
                item
            })} key = {item.id}>
                <View style = {styles.movieContainer}>
                    <View style = {styles.movieView}>
                        <Image style = {styles.imageView} source = {{uri: "https://image.tmdb.org/t/p/w500" + item.poster_path}} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        ))
    )
};

const styles = StyleSheet.create({
    movieView: {
        flex: 1,
        //backgroundColor: 'red',
        width: 121,
        height: 178,
        borderRadius: 8,
    },
    movieContainer: {
        marginRight: 20
    },
    imageView: {
        flex: 1,
        width: 121, 
        height: 178,
        resizeMode: "cover",
        borderRadius: 8
    }
})

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Trending);