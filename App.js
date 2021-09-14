import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image ,SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function App() {
  return (
    <KeyboardAwareScrollView>
      <Image style={styles.img} source={{uri: 'https://techmaster.vn/media/static/53/c00i38s51cobimh85na0'}}/>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input} 
              placeholder= 'Số điện thoại hoặc email'
            />
            <TextInput
              style={styles.input} 
              placeholder= 'Mật khẩu'
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btnAction}>
            <TouchableOpacity style={styles.btnDangNhap}>
              <Text style={styles.btnDangNhapText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Text style={styles.actionText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Text style={styles.actionText}>Quay lại</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerCreat}>
          <View style={styles.textOr}>
            <Text style={styles.textKe}/>
            <Text style={styles.textHoac}>Hoặc</Text>
            <Text style={styles.textKe}/>
          </View>
          <TouchableOpacity style={styles.btnCreate}>
              <Text style={styles.btnCreateText}>Tạo tài khoản mới</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styleBtn = {
  height: 55,
  width: '90%',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 20
}

const styleTextBtn = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    width: "100%", 
    height: null,
    aspectRatio: 750/460,
  },
  containerInput: {
    margin: 20
  },
  input: {
    borderColor: '#DDD',
    borderWidth: 1,
    height: 55,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  btnDangNhap: {
    backgroundColor: '#6495ed',
    ...styleBtn
  },
  btnDangNhapText: {
    ...styleTextBtn
  },
  btnAction: {
    alignItems: 'center'
  },
  action: {
    marginTop: 15
  },
  actionText: {
    color: '#6495ed',
    fontSize: 18,
  },
  containerCreat: {
    alignItems: 'center',
    marginTop: "10%"
  },
  textOr: {
    marginHorizontal: 70,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textKe: {
    flex: 3,
    height: 1,
    backgroundColor: '#777'
  },
  textHoac: {
    flex: 1.5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#777'
  },
  btnCreate: {
    backgroundColor: '#6495ed6b',
    ...styleBtn
  },
  btnCreateText: {
    ...styleTextBtn
  }

});
