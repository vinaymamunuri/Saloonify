import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , SafeAreaView} from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import Utils from '../common/Utils';

export default function RegistrationScreen({ navigation, route }) {

    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gmail, setGmail] = useState("");
    const [gender, setGender] = useState("");
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const namePattern = /^[a-zA-Z ]+$/
    const { id, data } = route.params;
    
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: "green", borderRadius: 5 }}>
                <Text style={{ color: "white" }}>Book</Text>
            </TouchableOpacity>
        </View>
    );

    Validate = () => {
        if (!name) {
            Utils.dialogBox('Please enter the Name')
        } else if (namePattern.test(name) === false) {
            Utils.dialogBox('Please enter the valid Name')
        }
        else if (!mobileNumber) {
            Utils.dialogBox('Please enter the Mobile Number', '')
        }
        else if (mobileNumber.length != 10) {
            Utils.dialogBox('Please enter the valid Mobile Number', '')
        }
        else if (!gmail) {
            Utils.dialogBox('Please enter the Email ID', '')
        } else if (emailReg.test(gmail) === false) {
            Utils.dialogBox('Please enter the valid Email ID', '')
        }
        else if (!gender) {
            Utils.dialogBox('Please select the Gender', '')
        } else {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i], "id")
                if (data[i]["id"] === id) {
                    data[i]["status"] = "closed"
                }
            }
            navigation.navigate('Home', { data })
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor='#262626' />
            <View style={{ backgroundColor: '#262626', paddingVertical: 20, alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.navigate('Home') }} style={{ flex: 0.5, left: 20 }}><Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>Back</Text></TouchableOpacity>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "500", alignSelf: 'center' }}>Registration Form</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.inputField}
                    mode='outlined'
                    outlineStyle={{ height: 45 }}
                />
                <TextInput
                    label="Mobile Number"
                    value={mobileNumber}
                    onChangeText={mobileNumber => setMobileNumber(mobileNumber)}
                    style={styles.inputField}
                    mode='outlined'
                    outlineStyle={{ height: 45 }}
                    keyboardType='numeric'
                    maxLength={10}
                />
                <TextInput
                    label="Gmail"
                    value={gmail}
                    onChangeText={gmail => setGmail(gmail)}
                    style={styles.inputField}
                    mode='outlined'
                    outlineStyle={{ height: 45 }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                    <Text style={[{ fontWeight: "500", fontSize: 16, color: "black", fontFamily: "Jost" }]}>Gender</Text>
                    <RadioButton
                        value="Male"
                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Male')}
                    />
                    <Text style={[{ color: "black" }]}>Male</Text>
                    <RadioButton
                        value="Female"
                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Female')}
                    />
                    <Text style={[{ color: "black" }]}>Female</Text>

                </View>
                <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#262626", borderRadius: 5, marginTop: 20 }} activeOpacity={0.6} onPress={() => { Validate() }}>
                    <Text style={{ color: "white", alignSelf: 'center' }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    item: {
        backgroundColor: '#262626',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10
    },
    title: {
        fontSize: 14,
        color: "white"
    },
    inputField: {
        marginTop: 10, fontSize: 14, height: 40 , backgroundColor:'#FFF'
    },
});
