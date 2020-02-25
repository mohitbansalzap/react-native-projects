import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

export default class Notes extends React.Component {

    state = {
        list: [{
            message: "Mohit",
            isLiked: false
        },{
            message: "Mohit",
            isLiked: false
        }],
        input: ""
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}
            >
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.list}
                    renderItem={({ item, index }) =>
                        <View style={{
                            width: "100%",
                            height: 60,
                            margin: 5,
                            borderWidth: StyleSheet.hairlineWidth,
                            justifyContent: "center",
                        }}>
                            <Text style={{
                                fontSize: 20,
                            }}>{item.message}</Text>
                            <TouchableOpacity style={{
                                position: 'absolute',
                                right: 10,
                            }}
                                onPress={() => {
                                    const tempList = this.state.list
                                    tempList[index].isLiked = !tempList[index].isLiked
                                    this.setState({
                                        list: tempList
                                    })
                                }}
                            >
                                <Image
                                    style={{
                                        height: 40,
                                        width: 40
                                    }}
                                    source={item.isLiked ? require('../Images/like.png') : require('../Images/heart.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    }
                    keyExtractor={(item, index) => index}
                />

            </View>
        )
    }

}