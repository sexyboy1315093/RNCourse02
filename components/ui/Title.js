import { StyleSheet, View, Text } from 'react-native'
import Colors from '../../util/colors';

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text> 
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%'
    }
})

export default Title;