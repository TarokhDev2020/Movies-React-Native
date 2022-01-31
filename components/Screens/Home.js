import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getPopular, getTopRated, getTrending, getUpcoming} from '../../store/Actions/movieActions';
import Popular  from '../Movies/Popular';
import Trending from '../Movies/Trending';
import TopRated from '../Movies/TopRated';
import Upcoming from '../Movies/Upcoming';

const Home = ({navigation, getPopular, getTrending, getTopRated, getUpcoming, movies: {popular, topRated, trending, upcoming}}) => {

    useEffect(() => {
        getPopular();
        getTrending();
        getTopRated();
        getUpcoming();
    }, [])

    return (
        <View style = {styles.container}>
            <ScrollView>
                <View>
                    <Text style = {styles.headerText}>Popular Movies</Text>
                    <ScrollView horizontal = {true}>
                        {popular !== null ? <Popular navigation = {navigation} /> : console.log("We don't have any data")}
                    </ScrollView>
                </View>
                <View style = {{marginTop: 50}}>
                    <Text style = {styles.headerText}>Trending Movies</Text>
                    <ScrollView horizontal = {true}>
                        {trending !== null ? <Trending navigation = {navigation} /> : console.log("We don't have any data")}
                    </ScrollView>
                </View>
                <View style = {{marginTop: 50}}>
                    <Text style = {styles.headerText}>Top Rated Movies</Text>
                    <ScrollView horizontal = {true}>
                        {topRated !== null ? <TopRated navigation = {navigation} /> : console.log("We don't have any data")}
                    </ScrollView>
                </View>
                <View style = {{marginTop: 50}}>
                    <Text style = {styles.headerText}>Upcoming Movies</Text>
                    <ScrollView horizontal = {true}>
                        {upcoming !== null ? <Upcoming navigation = {navigation} /> : console.log("We don't have any data")}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        //backgroundColor: "#131313",
    },
    headerText: {
        fontSize: 20,
        marginBottom: 10,
        color: "white"
    },
})

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {getPopular, getTopRated, getUpcoming, getTrending})(Home);