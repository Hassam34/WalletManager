import React from 'react'
import {
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    Picker,
    AsyncStorage
} from 'react-native';
import constants from '../Constants'
import { Button, CardSection, Spinner } from '../components/common';

const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class Settings extends React.Component {
    state = { stateLanguage: '', userInfo: '', loggedIn: false, email: '', password: '' }
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.backgroundImageStyle}>
                    <View >
                        <Text style={styles.logoStyle}>
                            WALLET MANAGER
                        </Text>
                    </View>
                    <View style={{ marginTop: -50 }}>
                        <View>
                            <TextInput
                                placeholder='Phone number, email address or username'
                                placeholderTextColor={constants.whiteColor}
                                underlineColorAndroid='transparent'
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                style={styles.inputStyle} />
                        </View>
                        <View>
                            <TextInput
                                secureTextEntry
                                placeholder='Password'
                                placeholderTextColor={constants.whiteColor}
                                underlineColorAndroid='transparent'
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                style={styles.inputStyle} />
                        </View>
                    </View>

                    <View style={{ marginTop: 7 }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/hassamyahya.hassamyahya/')}
                            style={{ flexDirection: 'row' }}
                        //  onPress={() => this.props.navigation.navigate('HelpSign')}
                        >

                            <Text style={{ color: constants.whiteColor, fontSize: 12 }}>Forgot your Login details?</Text>
                            <Text style={{ color: constants.whiteColor, fontSize: 12, fontWeight: 'bold' }}> Get help signing in</Text>

                        </TouchableOpacity>
                    </View>
                    <CardSection>
                        <TouchableOpacity
                            onPress={
                                () =>
                                    this.props.navigation.navigate('Home')
                            }
                            style={styles.buttonStyle} >
                            <View style={{ alignSelf: 'center' }}><View >
                                {/* <Icon
                                    name='facebook-square'
                                    size={22}
                                    color=constants.whiteColor
                                    style={{ height: 25, width: 25, position: 'absolute', marginTop: 10 }} /> */}
                                <Text style={styles.textStyle}>Login</Text>
                            </View>
                            </View>
                        </TouchableOpacity>

                    </CardSection>
                    {/* <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn}
                        disabled={this.state.isSigninInProgress} /> */}
                    <View>
                        <Text style={{ color: constants.whiteColor, marginTop: 10 }}>
                            -------------------OR -------------------
                    </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row' }}
                            //  onPress={() => this.props.navigation.navigate('Welcome')}
                            onPress={() => Linking.openURL('https://www.facebook.com/hassamyahya.hassamyahya/')}
                        >
                            <Text style={{ color: constants.whiteColor, marginTop: 10, fontSize: 12 }}>
                                Don't have an account?
                    </Text>
                            <Text style={{ color: constants.whiteColor, marginTop: 10, fontSize: 12, fontWeight: 'bold' }}> Sign up.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomView}>
                        <Text style={{ color: constants.whiteColor, fontSize: 12 }}>
                            WALLET MANAGER "manage my pocket"
                    </Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    MainContainer:
    {
        backgroundColor: constants.mainColor,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    backgroundImageStyle: {
        flex: 1,
        width: null,
        height: '100%',
        // justifyContent:'center',
        alignItems: 'center'
    },
    logoStyle: {
        marginTop: 80,
        marginBottom: 10,
        color: constants.whiteColor,
        // width: 175,
        height: 170,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        marginTop: 10,
        paddingLeft: 10,
        width: WIDTH - 55,
        height: 50,
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderColor: constants.redColor,
        shadowOpacity: 2,
        borderRadius: 12,
        borderWidth: 1,
        marginHorizontal: 25,
        color: constants.whiteColor
    },
    loginButtonStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textStyle: {
        //alignSelf: 'center',
        // marginLeft: 25,
        color: constants.whiteColor,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonStyle: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        // borderColor:'#007aff',
        backgroundColor: constants.redColor,
        // backgroundColor:constants.whiteColor,
        // borderWidth:1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
    },
    bottomView: {
        width: '100%',
        marginTop: 80,
        height: 30,
        borderTopWidth: 0.3,
        borderColor: constants.whiteColor,
        // backgroundColor: '#FF9800', 
        justifyContent: 'flex-end',
        alignItems: 'center',
        // position: 'absolute',
        bottom: 0,

    },
})
export default Settings