import { StyleSheet, View, Text, Pressable } from 'react-native'
import getNativeComponentAttributes from 'react-native/Libraries/ReactNative/getNativeComponentAttributes';
import Colors from '../../util/colors';

function PrimaryButton({children, onPress}){

    return (
        <View style={styles.buttonOuterContainer}>
         <Pressable
             style={styles.buttonInnerContainer}
             onPress={onPress}
             android_ripple={{color: Colors.primary600}}>
             <Text style={styles.buttonText}>{children}</Text>
         </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default PrimaryButton;