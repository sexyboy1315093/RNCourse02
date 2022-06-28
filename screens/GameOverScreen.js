import { StyleSheet, View, Text, Image } from 'react-native'
import { useState } from 'react'
import Title from '../components/ui/Title'
import Colors from '../util/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/gameover.jpg')}/> 
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 10,
        width: 350,
        height: 350,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 23,
        textAlign: 'center',
        marginVertical: 24,
        marginBottom: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
})

export default GameOverScreen;