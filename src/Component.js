

import React from 'react'
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { sum, diff } from './TestExport'

export default class Component extends React.Component {

    render() {
        return (
            <View>
                <TraineeButton
                    title={"Login"}
                    onPress={() => {
                        alert("Login Pressed")
                    }}
                />
                <TraineeButton
                    style={{
                        marginTop: 5
                    }}
                    title={"Sign Up"}
                    onPress={() => {
                        alert("Signup Pressed")
                    }}
                />
            </View>
        )
    }

}


const TraineeButton = props => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (props.onPress)
                    props.onPress()
            }}
            activeOpacity={0.2}
            style={[{
                width: 100,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: "center"
            }, props.style]}>
            <Text style={{ color: "white", }}>{props.title}</Text>
        </TouchableOpacity>
    )
}