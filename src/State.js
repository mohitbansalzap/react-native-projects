import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'


export default class State extends React.Component {

    state = {
        count: 1
    }

    render() {
        const style = {
            fontSize: 30,
            borderWidth: 2,
            padding: 5,
            height: 50,
            width: 50,
            textAlign: 'center',
        }
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent :'center',
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        if (this.state.count < 1) {
                            return
                        }
                        this.setState({
                            count: this.state.count - 1
                        })
                    }}
                >
                    <Text style={style}>-</Text>
                </TouchableOpacity>
                <Text style={style}>{this.state.count}</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >
                    <Text style={style}>+</Text>
                </TouchableOpacity >
            </View >
        )
    }
}