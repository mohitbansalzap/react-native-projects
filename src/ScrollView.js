
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    FlatList,
    Image
} from 'react-native';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.array = [
            "Arpan", "Suraj", "Arpan", "Suraj", "Arpan", "Suraj"
        ]
    }
    render() {
        const width = Dimensions.get("screen").width
        return (
            <View>
                <Image style={{ width: width, aspectRatio : 1 }}
                    source={
                        { uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png" }
                    }
                />
                {/* <FlatList
                    data={this.array}
                    renderItem={({ item, index }) => <Text>jkuigfweug</Text>}
                    keyExtractor={(item, index) => index}
                /> */}
            </View>
        )
    }
}