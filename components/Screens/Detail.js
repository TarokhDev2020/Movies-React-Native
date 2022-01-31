import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {connect} from 'react-redux';
import {getDetails, getSimilarMovies, addToFavorite} from '../../store/Actions/movieActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import globeStyles from '../globe/globeStyles';

const Detail = ({route, getDetails, getSimilarMovies, addToFavorite, movies: {detail, similar}}) => {

    const {item} = route.params;

    useEffect(() => {
        getDetails(item.id);
        if (detail !== null) {
            getSimilarMovies(item.id);
        }
    }, [])

    return (
        detail !== null && (
            <View style = {globeStyles.container}>
                    <React.Fragment>
                        <Image style = {globeStyles.poster} source = {{uri: "https://image.tmdb.org/t/p/w500" + detail.backdrop_path}}/>
                        <ScrollView style = {{paddingBottom: 30}}>
                        <Text style = {globeStyles.headerText}>{detail.original_title}</Text>
                        <Text style = {globeStyles.score}>{`${detail.vote_average} user score`}</Text>
                        <View style = {globeStyles.genreView}>
                            {detail.genres.map((item) => (
                                <Text key = {item.id} style = {globeStyles.genreText}>{item.name}</Text>
                            ))}
                        </View>
                        <View style = {globeStyles.optionView}>
                                <View style = {globeStyles.optionViewColumn}>
                                    <TouchableOpacity onPress = {() => addToFavorite({detail})} style = {{alignItems: "center"}}>
                                        <Ionicons name = "heart-outline" color = "white" size = {35} />
                                        <Text style = {globeStyles.optionText}>Favorite</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {globeStyles.optionViewColumn}>
                                    <TouchableOpacity onPress = {() => Linking.openURL(detail.homepage)} style = {{alignItems: "center"}}>
                                        <Ionicons name = "globe-outline" color = "white" size = {35} />
                                        <Text style = {globeStyles.optionText}>Homepage</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {globeStyles.optionViewColumn}>
                                    <TouchableOpacity onPress = {() => Linking.openURL(detail.homepage)}>
                                        <Ionicons name = "film-outline" color = "white" size = {35} />
                                        <Text style = {globeStyles.optionText}>IMDB</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                        <View style = {globeStyles.overview}>
                            <Text style = {globeStyles.overviewText}>Overview</Text>
                            <Text style = {{marginTop: 10, color: "white", fontSize: 19}}>{detail.overview}</Text>
                        </View>
                        <View style = {globeStyles.relatedView}>
                            <Text style = {globeStyles.relatedText}>You might like</Text>
                            <View style = {{marginTop: 10}}>
                                <ScrollView horizontal = {true}>
                                {similar && similar.map((item) => (
                                    <View style = {globeStyles.relatedMovieView} key = {item.id}>
                                        <Image style = {globeStyles.relatedImageView} source = {{uri: "https://image.tmdb.org/t/p/w500" + item.poster_path}} />
                                    </View>
                                ))}
                                </ScrollView>
                            </View>
                        </View>
                        </ScrollView>
                    </React.Fragment>
            </View>
        )
    )
};

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {getDetails, getSimilarMovies, addToFavorite})(Detail);