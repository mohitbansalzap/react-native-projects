import React from "react";
import {
    Text,
    Image,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
    Modal
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default class List extends React.Component {
    constructor() {
        super()
        this.state = {
            textInputData: '',
            newarray: [
                { name: "Mohit" },
                { name: "Ankit" },
                { name: "Ritesh" },
                { name: "Yogesh" }
            ],
            modalVisible: false,
        }

    }
    text = ""

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    setData = (text1) => {
        if (text1 != '') {
            this.setState({ array: this.state.newarray.push({ name: text1 }) })

        }



    }


    deleteButton = (index) => {
        var rem = this.state.newarray.splice(index, 1)
        this.setState({ newarray: this.state.newarray })

    }
    render() {
        return (<View style={{
            flex: 1,
            backgroundColor: 'white',
            margin: 5
        }}>
            <View style={{ flex: 0.9, }} >
                <Text style={{
                    fontSize: 40,
                    margin: 5,
                    fontWeight: 'bold'
                }}>Notes</Text>
                <FlatList
                    data={this.state.newarray}
                    renderItem={({ item, index }) => <ListData
                        name={item.name}
                        imagePath={this.state.imagePath}
                        shift={() => this.props.navigation.navigate("ShowData", { username: item.name })}
                        delete={() => this.deleteButton(index)}

                    ></ListData>}
                    keyExtractor={(item, index) => index}
                ></FlatList>

            </View>
            <View style={{ flex: 0.1 }} >
                {/* <View style={{
                marginTop: 5,
                marginBottom: 8,
                flexDirection: 'row',
        
            }}> */}
                {/* <TextInput style={{
                    borderWidth: 2,
                    borderRadius: 30,
                    marginLeft: 8,
                    marginRight: 8,
                    flex:0.9,
                    fontSize: 20,
                    paddingLeft:20,
                    
                }}
                onChangeText={(value)=>this.state.textInputData=value}
            
                >

                </TextInput> */}
                <TouchableOpacity style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                    // onPress={()=>this.setData(this.state.textInputData)}
                    onPress={() => { this.toggleModal(true) }}
                >
                    <Image
                        style={{
                            height: 100,
                            width: 100,
                            marginLeft: 5,
                            marginRight: 5,

                        }}

                        source={require('../Images/add.png')}></Image>
                </TouchableOpacity>




                {/* </View> */}
            </View>

            <Modal animationType={"fade"} transparent={false}
                visible={this.state.modalVisible}
            >
                <View style={{
                    height: '90%',
                    width: '100%',
                    borderRadius: 10,
                    margin: 15,
                    backgroundColor: "lightblue"

                }}>

                    <TextInput
                        style={{
                            height: 100,
                            width: 350,
                            fontSize:20,
                            paddingLeft:10,
                            color:'white'


                        }}
                        onChangeText={(value) => this.state.textInputData = value}
                    ></TextInput>
                </View>
                <View style={{
                    flexDirection:'row'
                }}>
                <TouchableOpacity
                style={{
                    height:40,
                    width:'50%',
                    backgroundColor:'lightblue',
                    marginLeft:10,
                    marginRight:10
                }}
                
                onPress={

                    () => this.setData(this.state.textInputData)
                }>
                    <Text style={{
                        fontSize: 20,

                    }}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    () => { this.toggleModal(!this.state.modalVisible) }

                }>
                    <Text style={{
                        fontSize: 20,
                        backgroundColor:'black'
                    }}>Close Modal</Text>
                </TouchableOpacity>
                </View>

            </Modal>
        </View >


        )
    }

}
export class ListData extends React.Component {
    state = {
        isLike: true,
        imagePath: require('../Images/heart.png')

    }
    likeButton = () => {
        if (this.state.islike) {
            return {
                imagePath: require('../Images/heart.png'),
                islike: false

            }

        }
        else {
            return {
                imagePath: require('../Images/like.png'),
                islike: true

            }
        }
    }
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,



                }}>

                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: 50,
                        padding: 8
                    }}
                    onPress={() => {
                        this.props.shift()

                    }

                    }
                >
                    <Text
                        style={{
                            fontSize: 20,


                        }}>{this.props.name}</Text>


                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.setState(() => this.likeButton()) }}
                ><Image
                    style={{
                        height: 25,
                        width: 25,
                        marginLeft: 8,
                        marginRight: 8,
                        marginTop: 5,
                        flex: 0.1,
                    }}
                    source={this.state.imagePath}></Image></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.delete()}
                ><Image
                    style={{
                        height: 35,
                        width: 35,
                        marginTop: 5,
                        marginLeft: 8,
                        marginRight: 8,
                        flex: 0.1,
                    }}
                    source={require('../Images/delete.png')}></Image></TouchableOpacity>
            </View>

        )
    }

}

