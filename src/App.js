/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


class App extends React.Component {

  state = {
    value: " ",
    answer: "",
    // firstValue: '',
    // result: '',
    // opretor: '',
    // //showData:this.firstValue+this.opretor+this.value,

  }
  buttonPress = (data) => {
    this.setState({ value: this.state.value + data })
  }
  // buttonPress = (data) => {

  //   this.setState({value:data})
  //   if (data == "D") {
  //     this.setState({ value: '', firstValue: '', opretor: '', result: '' })
  //   }
  //   else {
  //     if (this.state.value == "") {
  //       this.setState({ value: data })
  //     }
  //     else
  //       this.setState({ value: this.state.value + data })
  //   }

  //   if (data == "=") {
  //    let first = parseFloat(this.state.firstValue)
  //    let second = parseFloat(this.state.value)
  //     switch (this.state.opretor) {
  //       case '+':
  //         this.setState({
  //           result:first +second
  //         });
  //         break;

  //       case '-':
  //         this.setState({
  //           result: first - second
  //         });
  //         break;

  //       case '*':
  //         this.setState({
  //           result: first * second
  //         });
  //         break;

  //       case '/':
  //         this.setState({
  //           result: first / second
  //         });
  //         break;
  //     }


  //   }
  // }

  // reset = () => {
  //   this.state.value = ''
  //   this.state.result = ""
  //   this.state.opretor = null
  // }
  operatorPressed = (op) => {
    this.setState({ opretor: op })
    if (op) {
      this.setState({ firstValue: this.state.value })
      this.reset()

    }
    if (op && this.state.result != '') {
      alert('aa rha hu yha')
      this.setState({ firstValue: this.state.result })

    }



  }

  render() {

    const width = Dimensions.get('window').width
    let withoutMargin = width - 40 - 10
    let radius = withoutMargin / 8
    console.log(width, 'width')
    console.log(radius, "radius")



    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
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
            {/* {this.state.firstValue + this.state.opretor + this.state.value} */}
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
        <View style={{
          flex: 4,
          backgroundColor: 'lightgrey',
          padding: 5,
        }}>
          <View style={{
            flex: 1,
            flexDirection: "row",
            //backgroundColor: "green"
          }}>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"1"}
              onPress={() => {
                this.buttonPress('1')
              }}
            ></ButtonDesign>

            <ButtonDesign
              buttonText={"2"}
              onPress={() => {
                this.buttonPress('2')
              }}
            ></ButtonDesign>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"3"}
              onPress={() => {
                this.buttonPress('3')
              }}
            ></ButtonDesign>

            <ButtonDesign
              buttonText={"+"}
              onPress={() => {
                this.buttonPress('+')
              }}
            ></ButtonDesign>

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
            ></ButtonDesign>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"5"}
              onPress={() => {
                this.buttonPress('5')
              }}
            ></ButtonDesign>

            <ButtonDesign
              buttonText={"6"}
              onPress={() => {
                this.buttonPress('6')
              }}
            ></ButtonDesign>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"-"}
              onPress={() => {
                this.buttonPress('-')
              }}
            ></ButtonDesign>


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
            ></ButtonDesign>

            <ButtonDesign
              buttonText={"8"}
              onPress={() => {
                this.buttonPress('8')
              }}
            ></ButtonDesign>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"9"}
              onPress={() => {
                this.buttonPress('9')
              }}
            ></ButtonDesign>

            <ButtonDesign
              buttonText={"*"}
              onPress={() => {
                this.buttonPress('*')
              }}
            ></ButtonDesign>

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
            ></ButtonDesign>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"="}
              onPress={() => {
                this.setState({ answer: eval(this.state.value) })
              }}
            ></ButtonDesign>

            <ButtonDesign
              buttonText={"D"}
              onPress={() => {
                this.setState({ value: '', answer: '' })
              }}
            ></ButtonDesign>

            <ButtonDesign
              style={{ backgroundColor: 'black' }}
              buttonText={"/"}
              onPress={() => {
                this.buttonPress('/')
              }}
            ></ButtonDesign>



          </View>


        </View>


      </View>

    )
  }
}


const ButtonDesign = props => {
  return (
    <TouchableOpacity
      style={[{
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'grey',
        margin: 5,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }, props.style]}
      onPress={() => { props.onPress() }}>
      <Text style={{ color: 'white', fontSize: 40 }}>{props.buttonText}</Text>
    </TouchableOpacity>

  )
}
export default App;
