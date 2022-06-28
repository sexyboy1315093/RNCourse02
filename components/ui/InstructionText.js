import { StyleSheet, View, Text, Button} from 'react-native'
import {useState} from 'react'
import Colors from '../../util/colors'

function InstructionText({children, style}){
    return(
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    }
})

export default InstructionText;