

import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Button,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'light-grey',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Image
                    style={{
                        height: 120,
                        width: 120,
                        borderColor: 'black'
                    }}
                    source={require('../Images/user.png')}
                ></Image>
                <Text style={{ fontSize: 35, }}>Login Screen</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"username"} ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"password"}
                ></TextInput>
                {/* <Button
                    title={"Login"}
                    onPress={() => {
                        this.props.navigation.navigate("List", { username: "Arpan" })
                    }} /> */}
                    <TouchableOpacity style={{
                    backgroundColor:'black',
                    height: 50,
                    width: 250,
                    borderColor: 'black',
                    borderRadius: 30,
                    borderWidth: 2,
                    marginTop: 5,
                    fontSize: 25,
            }}
                onPress={() => {
                    this.props.navigation.navigate("List", { username: "Arpan" })
                }}
            >
                <Text style={{ color: 'white', fontSize: 35, textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    textInputStyle: {
        height: 50,
        width: 250,
        borderColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
        marginTop: 5,
        fontSize: 25,


    }

});