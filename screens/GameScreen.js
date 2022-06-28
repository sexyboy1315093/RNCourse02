import { StyleSheet, View, Text, FlatList, TextInput, SafeAreaView, Alert} from 'react-native'
import { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../util/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random()* (max-min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const[currentGuess, setCurrentGuess] = useState(initialGuess);
    const[guessRounds, setGuessRounds] = useState([initialGuess]);
   
    //useEffect 코틀린 lifeCycle이라고 생각하면 된다.
    //배열에 값을 생략하면 처음 마운트(나타날때)되었을때 한번만 호출된다
    // useEffect(() => {
    //     console.log("렌더링 시 한번만 실행");
    // }, []);

    //return을 넣어주면 언마운트(사라질때)되었을때 한번만 호출된다.
    // useEffect(() => {
    //     return () => {
    //       console.log("언마운트 될 때 한번만 실행");
    //     };
    // }, []);

    //배열안에 있는 값이 변경될때마다 호출, 단 마운트 되었을때도 호출된다는건 명심!
    // useEffect(() => {
    //     console.log("해당 props가 변경될때 마다 실행");
    //   }, [value]);

    //모든요소가 변경될때마다 호출, 단 마운트 되었을때도 호출된다는건 명심!
    // useEffect(() => {
    //     console.log("모든 요소가 변경될때 마다 실행");
    //   });
    
    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length)
        }
    },[currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBoundary = 1
        maxBoundary = 100
    },[])

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert(
                "Don't lie!",
                "You know that this is wrong...",
                [{text: 'Sorry', style: 'cancel'}]
            )
            return;
        }

        if(direction==='lower'){
            maxBoundary = currentGuess;
            console.log(maxBoundary)
        }else {
            minBoundary = currentGuess + 1;
            console.log(minBoundary)
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}> 
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name='md-remove' size={24} color='white'/></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={24} color='white'/></PrimaryButton> 
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData)=>(
                        <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>
                    )}
                    keyExtractor={(item)=>item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})

export default GameScreen;