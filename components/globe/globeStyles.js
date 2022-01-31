import React from 'react';
import {StyleSheet} from 'react-native';
const globeStyles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
    },
    poster: {
        width: "100%",
        resizeMode: "stretch",
        height: undefined,
        flexWrap: "wrap", 
        aspectRatio: 16 / 9
    },
    headerText: {
        marginLeft: 20,
        marginTop: 20,
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    score: {
        marginLeft: 20,
        marginTop: 10,
        color: "#327740",
        fontSize: 25,
        fontWeight: "bold"
    },
    genreView: {
        flexDirection: "row",
        //marginHorizontal: 20,
        marginTop: 10,
        marginLeft: 20
    },
    genreText: {
        color: "white",
        fontSize: 17,
        marginHorizontal: 5,
        fontWeight: "bold"
    },
    optionView: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,
    },
    optionViewColumn: {
        flexDirection: "column",
        marginHorizontal: 10,
        alignItems: "center"
    },
    optionText: {
        color: "white",
        fontSize: 18,
        marginTop: 10
    },
    overview: {
        marginLeft: 20,
        marginTop: 30
    },
    overviewText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    relatedView: {
        marginLeft: 20,
        marginTop: 20,
    },
    relatedMovieView: {
        flex: 1,
        width: 121,
        flexDirection: "row",
        height: 178,
        borderRadius: 8,
        marginHorizontal: 10
    },
    relatedText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    relatedImageView: {
        flex: 1,
        width: 121, 
        height: 178,
        resizeMode: "cover",
        borderRadius: 8
    }
});

export default globeStyles;