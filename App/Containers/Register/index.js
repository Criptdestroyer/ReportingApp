import React, { Component } from 'react'
import { Alert, ScrollView, SafeAreaView, StyleSheet,AsyncStorage, TouchableOpacity, Text, TextInput,KeyboardAvoidingView, ImageBackground, Dimensions, Image, View } from 'react-native'
import { allLogo } from '@Assets'
import Loader from '@Loader'
import { toDp } from '@percentageToDP'
const { width, height } = Dimensions.get('window')
import { postRegister } from '@Apis'

type Props = {}
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            loading:false,
        };
    }

    back = () => {
        this.props.navigation.goBack()
    }

    register =() => {
        if(this.state.fullname === ''){
            alert("full name tidak boleh kosong")
        }else if(this.state.email === ''){
            alert("Email tidak boleh kosong")
        }else if(this.state.password === ''){
            alert("password tidak boleh kosong")
        }else if(this.validateEmail(this.state.email)){
            alert("format email tidak benar")
        }else if(this.validateFullname(this.state.fullname)){
            alert("full name mengandung angka")
        }else{
            this.setState({loading:true})
            var formData = new FormData()
            formData.append('fullname',this.state.fullname)
            formData.append('email',this.state.email)
            formData.append('password',this.state.password)

            postRegister(formData).then(respon => {
                console.log(respon)
                setTimeout(()=>{this.setState({loading:false}),
                                Alert.alert(
                                    'Informasi',
                                    'Register Succes',
                                    [
                                    {text: 'Ok', onPress: () => this.props.navigation.replace('Login') /*this.back()*/},
                                    // {
                                    //     text: 'Cancel',
                                    //     onPress: () => console.log('Cancel Pressed'),
                                    //     style: 'cancel',
                                    // },
                                    // {text: 'OK', onPress: () => console.log('OK Pressed')},
                                    ],
                                    {cancelable: false},
                                )
                            },2000)
            }).catch(error => {
                console.log(error)
                this.setState({loading:false})
            })
            
        }  

        
    }
    validateEmail = (email) =>{
        console.log(email)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email)===false){
            console.log("email is not correct")
            this.setState({email:email})
            return true
        }else{
            this.setState({email:email})
            console.log("Email is Correct");
            return false
        }
    }

    validateFullname = (fullname) =>{
        console.log(fullname)
        let reg = /^[aA-zZ]*$/;
        if(reg.test(fullname)===false){
            console.log("full name contain number")
            this.setState({fullname:fullname})
            return true
        }else{
            this.setState({fullname:fullname})
            console.log("fullname is Correct");
            return false
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Loader loading={this.state.loading}/>
                <View style={styles.header}>
                    <View style={styles.viewTitle}>
                        <Text allowFontScaling={false} style={styles.textTitle}>Register</Text>
                    </View>
                    <TouchableOpacity style={styles.touchHeader} onPress={() => this.props.navigation.goBack()}>
                        <Image source={allLogo.iconBack} style={styles.iconBack} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <Text allowFontScaling={false} style={styles.textTitleContent}>Silahkan Register</Text>
                        <View style={styles.box}>
                            <TextInput
                                allowFontScaling={false}
                                underlineColorAndroid={'transparent'}
                                style={styles.textInput}
                                placeholder={'Fullname'}
                                value={this.state.fullname}
                                autoCapitalize={'none'}
                                maxLength={50}
                                onChangeText={ (fullname) => this.validateFullname(fullname) }
                            />
                        </View>
                        <View style={styles.box}>
                            <TextInput
                                allowFontScaling={false}
                                underlineColorAndroid={'transparent'}
                                style={styles.textInput}
                                placeholder={'Email'}
                                value={this.state.email}
                                autoCapitalize={'none'}
                                maxLength={30}
                                onChangeText={ (email) => this.validateEmail(email) }
                            />
                        </View>
                        <View style={styles.box}>
                            <TextInput
                                secureTextEntry={true}
                                allowFontScaling={false}
                                underlineColorAndroid={'transparent'}
                                style={styles.textInput}
                                placeholder={'Password'}
                                value={this.state.password}
                                autoCapitalize={'none'}
                                maxLength={15}
                                onChangeText={ (password) => this.setState({ password }) }
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.register()}
                            style={styles.btnDaftar}>
                            <Text allowFontScaling={false} style={styles.text}>{'DAFTAR SEKARANG'}</Text>
                        </TouchableOpacity>
                        <View style={{height: 48}} />
                         </View>
                </ScrollView>
            </View>
    )}
}

const styles = StyleSheet.create({
                    container: {
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: '#F3F3F4'
                    },
                    header: {
                        width,
                        height: toDp(48),
                        justifyContent: 'center',
                        backgroundColor: '#FFFFFF',
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height : 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 1,
                        elevation: 2,
                    },
                    viewTitle: {
                        width: '100%',
                        height: toDp(48),
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    textTitle: {
                        color: '#2F5596',
                        fontSize: toDp(16),
                        fontWeight: '400'
                    },
                    touchHeader: {
                        width: toDp(48),
                        height: toDp(48),
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                    },
                    iconBack: {
                        width: toDp(32),
                        height: toDp(32),
                        tintColor: '#2F5596',
                    },
                    content: {
                        width,
                        alignItems: 'center',
                        paddingTop: toDp(16),
                    },
                    textTitleContent: {
                        color: '#212121',
                        fontSize: toDp(24),
                        fontWeight: '400',
                        marginTop: toDp(16),
                        marginBottom: toDp(8)
                    },
                    box: {
                        marginTop: toDp(8),
                        width: width * 0.9,
                        height: toDp(48),
                        borderWidth: 1,
                        borderColor: '#D1D1D2',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        marginBottom: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    },
                    textInput: {
                        width: '95%',
                        height: 'auto',
                        fontSize: toDp(12),
                    },
                    btnDaftar: {
                        marginTop: toDp(24),
                        borderRadius: 4,
                        width: '90%',
                        height: toDp(48),
                        backgroundColor: '#2F5596',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    text: {
                        color: '#FFFFFF',
                        fontSize: toDp(14),
                        fontWeight: '500',
                        letterSpacing: 3
                    },
                })
export default Register