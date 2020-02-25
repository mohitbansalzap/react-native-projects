import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

class Calculator extends React.Component {
    state = {
        value: "",
        answer: "",
    }

    buttonPress = (data) => {
        this.setState({ value: this.state.value + data })
    }
    render() {

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                }}>
                <View style={{
                    flex: 1
                }}>
                    <View style={{
                        flex: 2.5,
                        flexDirection: "row",
                        backgroundColor: 'silver',
                        borderRadius: 40,
                        margin: 5,
                    }}
                    >
                        <Text style={{
                            flex: 1,
                            textAlign: 'right',
                            textAlignVertical: 'bottom',
                            color: 'white',
                            fontSize: 50,
                            marginEnd: 20,
                        }}>
                            {this.state.value}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1.5,
                        flexDirection: "row",
                        backgroundColor: 'white',
                    }}>
                        <Text style={{
                            flex: 1,
                            textAlign: 'right',
                            textAlignVertical: 'bottom',
                            color: 'black',
                            fontSize: 50,
                            marginEnd: 20,

                        }}>
                            {this.state.answer}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'lightgrey',
                    padding: 5,
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                    }}>

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"1"}
                            onPress={() => {
                                this.buttonPress('1')
                            }}
                        />

                        <ButtonDesign
                            buttonText={"2"}
                            onPress={() => {
                                this.buttonPress('2')
                            }}
                        />

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"3"}
                            onPress={() => {
                                this.buttonPress('3')
                            }}
                        />

                        <ButtonDesign
                            buttonText={"+"}
                            onPress={() => {
                                this.buttonPress('+')
                            }}
                        />

                    </View>



                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                    }}>
                        <ButtonDesign
                            buttonText={"4"}
                            onPress={() => {
                                this.buttonPress('4')
                            }}
                        />

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"5"}
                            onPress={() => {
                                this.buttonPress('5')
                            }}
                        />

                        <ButtonDesign
                            buttonText={"6"}
                            onPress={() => {
                                this.buttonPress('6')
                            }}
                        />

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"-"}
                            onPress={() => {
                                this.buttonPress('-')
                            }}
                        />


                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                    }}>


                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"7"}
                            onPress={() => {
                                this.buttonPress('7')
                            }}
                        />

                        <ButtonDesign
                            buttonText={"8"}
                            onPress={() => {
                                this.buttonPress('8')
                            }}
                        />

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"9"}
                            onPress={() => {
                                this.buttonPress('9')
                            }}
                        />

                        <ButtonDesign
                            buttonText={"*"}
                            onPress={() => {
                                this.buttonPress('*')
                            }}
                        />

                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                    }}>



                        <ButtonDesign
                            buttonText={"0"}
                            onPress={() => {
                                this.buttonPress('0')
                            }}
                        />

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"="}
                            onPress={() => {
                                this.setState({ answer: eval(this.state.value) })
                            }}
                        />

                        <ButtonDesign
                            buttonText={"D"}
                            onPress={() => {
                                this.setState({ value: '', answer: '' })
                            }}
                        />

                        <ButtonDesign
                            style={{ backgroundColor: 'black' }}
                            buttonText={"/"}
                            onPress={() => {
                                this.buttonPress('/')
                            }}
                        />



                    </View>


                </View>


            </View>

        )
    }

}
const ButtonDesign = props => {
    const {buttonText} = props
    return (
        
        <TouchableOpacity
            style={[{
                backgroundColor: 'grey',
                margin: 5,
                borderRadius: 50,
                width: (Dimensions.get("screen").width - 50) / 4,
                height: (Dimensions.get("screen").width - 50) / 4,
                alignItems: 'center',
                justifyContent: 'center',
            }, props.style]}
            onPress={() => { props.onPress() }}>

            <Text style={{ color: 'white', fontSize: 40 }}>{props.buttonText}</Text>
        </TouchableOpacity>

    )
}
export default Calculator;