import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {getFavorites} from '../../store/Actions/movieActions';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favorite = ({navigation, getFavorites, movies: {favorite}}) => {

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <ScrollView>
            {favorite && favorite.map((item) => (
                <View style = {styles.container} key = {item.detail.id}>
                        <View style = {styles.movieView}>
                            <View style = {{flexDirection: "row"}}>
                                <TouchableWithoutFeedback onPress = {() => navigation.navigate("Detail", {
                                    item: item.detail
                                })}>
                                    <Image style = {styles.imageView} source = {{uri: "https://image.tmdb.org/t/p/w500" + item.detail.poster_path}} />
                                </TouchableWithoutFeedback>
                                <View style = {{marginTop: 10, flexDirection: "column", justifyContent: "center"}}>
                                    <Text style = {{color: "white", fontSize: 18, fontWeight: "bold", textAlignVertical: "center", marginLeft: 10}}>{item.detail.original_title}</Text>
                                    <Text style = {{color: "#327740", fontSize: 18, fontWeight: "bold", marginLeft: 10}}>{`${item.detail.vote_average} User score`}</Text>
                                </View>
                            </View>
                        </View>
                </View>
            ))}
        </ScrollView>
        
    )
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10
    },
    movieView: {
        //flex: 1,
        marginTop: 20,
        marginLeft: 10,
        flexDirection: "row",
        //justifyContent: "center",
    },
    imageView: {
        //flex: 1,
        width: 121, 
        height: 178,
        resizeMode: "cover",
        borderRadius: 8
    }
})

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {getFavorites})(Favorite);