import { StyleSheet, View } from 'react-native'
import {useState} from 'react'
import Colors from '../../util/colors'

function Card({children}){
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        marginTop: 36,
        backgroundColor: Colors.primary800
    }
})

export default Card;