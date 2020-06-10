import React from 'react'
import {
    View,
    Text,
    AsyncStorage
} from 'react-native'
import { Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

class DashBoard extends React.Component {
    logout = async () => {
        await AsyncStorage.removeItem('AccessTokenSimpleLogin');
        const pushAction = StackActions.replace('Home', { screenProps: this.props.navigation });
        this.props.route.params.screenProps.dispatch(pushAction);
    }
    render() {
        console.log('screen props', this.props.route.params.screenProps)
        return (
            <View>
                <Text>
                    Hello DashBoard
                </Text>
                <Button
                    title="Logout"
                    onPress={() => this.logout()}
                />
            </View>
        )
    }
}
export default DashBoard