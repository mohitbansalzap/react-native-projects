import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class rgb extends React.Component {
    state = {

        firstValue: '',
        secondValue: '',
        thirdValue: '',
        rgbColor:'',

    }
    
    getFirstValue = (text) => {
        if (text < 256) {
            this.setState({ firstValue: text })
        }
        else {
            this.setState({firstValue:''})
            alert("Please Enter values between 0 to 255");
            
        }
    }

    getSecondValue = (text) => {
        if (text < 256) {
            this.setState({ secondValue: text })
        }
        else {
            this.setState({secondValue:''})
            alert("Please Enter values between 0 to 255");
            
        }
    }

    getThirdValue = (text) => {
        if (text < 256) {
            this.setState({ thirdValue: text })
        }
        else {
            this.setState({thirdValue:''})
            alert("Please Enter values between 0 to 255");
            
        }
    }
    setColor=()=>{
        this.setState({rgbColor:this.state.firstValue + "," + this.state.secondValue + "," + this.state.thirdValue})
    }
    
    render() {
        return <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor:'#e9967a'
        }}>
            <View style={{
                height: 100,
                width: 100,
                borderWidth:1,
                backgroundColor: "rgb(" + this.state.rgbColor +")",
            }}></View>

            <TextInput style={styles.textInputStyle}
                placeholder="Enter R value <255"
                keyboardType='numeric'
                onChangeText={this.getFirstValue}
                value={this.state.firstValue}

            >
            </TextInput>

            <TextInput style={styles.textInputStyle}
                placeholder="Enter G value <255"
                keyboardType='numeric'
                onChangeText={this.getSecondValue}
                value={this.state.secondValue}

            >
            </TextInput>

            <TextInput style={styles.textInputStyle}
                placeholder="Enter B value <255"
                keyboardType='numeric'
                onChangeText={this.getThirdValue}
                value={this.state.thirdValue}

            >
            </TextInput>

            <TouchableOpacity style={{
                height: 50,
                width: 250,
                backgroundColor: 'black',
                marginTop: 10,
                fontSize: 30,
                borderRadius: 20,
                keyboardType: 'Numeric',
            }}
                onPress={this.setColor}
            >
                <Text style={{ color: 'white', fontSize: 35, textAlign: "center" }}>SUBMIT</Text>
            </TouchableOpacity>

        </View>

    }
    

}
const styles= StyleSheet.create({
textInputStyle :{
                height: 50,
                width: 250,
                backgroundColor: 'silver',
                marginTop: 10,
                fontSize: 30,
                borderRadius: 20,
        
                textAlign:'right'
}

});