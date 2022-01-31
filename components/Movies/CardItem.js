import React from 'react';
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const CardItem = ({popularItem}) => {
    return (
        <View style = {styles.card}>
            <Image style = {styles.imageCard} source = {{uri: "https://image.tmdb.org/t/p/w500" + popularItem.poster_path}} />
            <Text style = {{fontSize: 20, marginTop: 10, color: "white", alignSelf: "center"}}>{popularItem.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: 231,
        height: 312,
        borderRadius: 8
    },
    imageCard: {
        flex: 1,
        width: 231,
        height: 312,
        resizeMode: "cover",
        borderRadius: 8
    }
})

export default CardItem;