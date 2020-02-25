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

export default class ShowData extends React.Component{
render(){
    return(
        <View>
            <Text style={{
                fontSize:20,
                margin:10
            }}>{this.props.route.params.username}</Text>
        </View>
    )
}
}