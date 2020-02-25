import React from 'react';
import {
    Text,
    Image,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert
} from 'react-native';

export default class Insta extends React.Component {

    array = [
        { name: 'Mohit', url: 'https://homepages.cae.wisc.edu/~ece533/images/watch.png' },
        { name: 'Ankit', url: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png' },
        { name: 'Yogesh', url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
        { name: 'Gaurav', url: 'https://homepages.cae.wisc.edu/~ece533/images/watch.png' }]

    likeButtonPress = () => {
        alert("like pressed");
    }

    messageButtonPress = () => {
        alert("njdc")
    }

    constructor(props) {
        super(props)
        const name = this.props.route
        console.log(name, "route")
    }

    render() {

        return (
            <View>
                <Text style={{
                    margin: 20,
                    alignSelf: "center",
                    fontSize: 20
                }}>{this.props.route.params.username}</Text>
                <FlatList
                    data={this.array}
                    renderItem={({ item, index }) => <InstaView
                        name={item.name}
                        url={item.url}
                    ></InstaView>}
                    keyExtractor={(item, index) => index}
                ></FlatList>

            </View>
        )



    }

}

const InstaView = props => {
    const scrnwidth = Dimensions.get('screen').width
    return (
        <View>
            <View
                style={{
                    height: 40,
                    width: scrnwidth,
                    flexDirection: 'row',
                    marginTop: 10
                }}
            >
                <Image
                    style={styles.iconStyle}
                    source={require('../Images/user.png')}
                ></Image>
                <Text style={{
                    flex: 8,
                    fontSize: 20,
                    fontWeight: 'bold',

                }}>
                    {props.name}
                </Text>
                <TouchableOpacity
                    style={{
                        flex: 1
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'right',
                            fontSize: 30,
                            marginRight: 8,
                            justifyContent: 'center'
                        }}
                    >...</Text>

                </TouchableOpacity>

            </View>
            <Image style={{
                height: scrnwidth,
                width: scrnwidth,
                marginTop: 5
            }}
                source={{ uri: props.url }}
            />

            <View
                style={{
                    height: 40,
                    width: scrnwidth,
                    flexDirection: 'row',
                    marginTop: 10,


                }}>
                <TouchableOpacity>
                    <Image style={styles.iconStyle}
                        source={require('../Images/like.png')}></Image>

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.iconStyle}
                        source={require('../Images/chat.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.iconStyle}
                        source={require('../Images/message.png')}></Image>
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                    }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-end',

                        }}
                    >
                        <Image style={styles.iconStyle}
                            source={require('../Images/download.png')}></Image>
                    </TouchableOpacity>
                </View>

            </View>
            <Text
                style={styles.textStyle}> 1M likes</Text>

            <Text
                style={styles.textStyle}> Instagram This is my first post</Text>

        </View>)


}

const styles = StyleSheet.create({
    iconStyle: {
        height: 30,
        width: 30,
        marginLeft: 8,
        marginRight: 8,
        alignContent: 'flex-end'

    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    }

});
