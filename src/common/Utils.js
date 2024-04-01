import React from 'react';
import { Platform, Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

var Utils = function () { };

const passwordLength = 8;

Utils.prototype.getData = function (key, callBack) {
    AsyncStorage.getItem('saloonify$:' + key, (err, resp) => {
        if (err)
            callBack('Error fetching data', false);
        else
            callBack(JSON.parse(resp), true);
    });
};

Utils.prototype.setData = function (key, value, callBack) {
    console.log(" token ", key , value)
    AsyncStorage.setItem('saloonify$:' + key, JSON.stringify(value), (err) => {
        if (err)
            callBack('Error', false);
        else
            callBack(null, true);
    });
};

Utils.prototype.dialogBox = function (msg, onOkClick) {
    if (onOkClick === '') {
        if (Platform.OS === 'ios') {
            return Alert.alert('',
                msg,
                [
                    {
                        text: 'OK',
                    },
                ],
                { cancelable: true }
            )
        } else {
            return ToastAndroid.showWithGravityAndOffset(
                msg,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
    } else if (onOkClick === 'alert') {
        return Alert.alert('',
            msg,
            [{
                text: 'OK',
            },],
            { cancelable: false }
        )
    } else {
        return Alert.alert('',
            msg,
            [{
                text: 'OK', onPress: onOkClick
            },],
            { cancelable: false }
        )
    }
}

export default new Utils();