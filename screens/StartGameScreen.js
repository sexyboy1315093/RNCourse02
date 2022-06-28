import {StyleSheet, View, TextInput, Alert, useWindowDimensions} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react'
import Colors from '../util/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}){

    const[enteredValue, setEnteredNumber] = useState('')
    const{width, height} = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const choseNumber = parseInt(enteredValue)

        //숫자가 아니면 참
        if(isNaN(choseNumber) || choseNumber<=0 || choseNumber > 99){
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{text:'Okay', style: 'destrutive', onPress: resetInputHandler}]
                )
            return;
        }

        onPickNumber(choseNumber)
    }

    const marginTopDistance = height < 380 ? 30 : 100
    return(
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad'
                    value={enteredValue}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                </View> 
            </Card> 
        </View>

    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGameScreen;