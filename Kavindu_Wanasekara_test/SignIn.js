import React from 'react';
import { Text, View } from 'react-native';
import SignInUi from './SignInUI';

const SignIn = () => {
    return (
        <View style = {{alignContent : 'center'}}>
            <Text> Sign In </Text>
            <SignInUi/>
        </View>
    )
}
 export default SignIn
