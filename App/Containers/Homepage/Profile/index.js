import React, { Component } from 'react'
import { StatusBar, FlatList, ScrollView, Platform, Alert, SafeAreaView, StyleSheet, AsyncStorage, Keyboard,
TouchableOpacity, Text, TextInput, KeyboardAvoidingView, ImageBackground, Dimensions, Image, View } from
'react-native'
import { allLogo } from '@Assets'
const { width, height } = Dimensions.get('window')
import { toDp } from '@percentageToDP'

type Props = {}

export default class Profile extends Component<Props> {
    back = () => {
        this.props.navigation.goBack()
    }
    logout = () => {
        AsyncStorage.clear()
        this.props.navigation.replace('Login')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.viewProfile}>
                        <Image source={{uri: 'http://www.introstudio.co.id/images/pic-member-zai.png'}} style={styles.imgProfile} />
                        <View style={styles.viewInfo}>
                            <Text style={styles.textName}>Zaini Jamathsani</Text>
                            <Text style={styles.text}>dleader.zaii@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.root}>
                            <TouchableOpacity style={styles.row} onPress={() => this.logout()}>
                            <Text allowFontScaling={false} style={[styles.text, {color: '#FF0000'}]}>{'Log Out'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
                    container: {
                        flex: 1,},
                        wrapper: {
                        flex: 1,
                    },
                    title: {
                        fontFamily: 'HelveticaNeue-Medium',
                        fontSize: toDp(16),
                        marginLeft: toDp(24),
                        marginBottom: toDp(16),
                        fontWeight: '500',
                        color: '#FFFFFF',
                    },
                        content: {
                        flex: 1,
                        alignItems: 'center'
                    },
                    root: {
                        width,
                        height: 'auto',
                        backgroundColor: '#FFFFFF',
                    },
                    row: {
                        height: toDp(66),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#ECECED',
                        borderBottomWidth: 1,
                        paddingLeft: toDp(16),
                        paddingRight: toDp(16)
                    },
                    text: {
                        fontSize: toDp(14),
                        fontFamily: 'HelveticaNeue-Light',
                        fontWeight: '300',
                        color: '#212121',
                    },
                    icCircle: {
                        width: toDp(28),
                        height: toDp(28)
                    },
                    icChevronRight: {
                        width: toDp(28),
                        height: toDp(28),
                        tintColor: '#189E84'
                    },
                    viewProfile: {
                        width,
                        height: toDp(100),
                        borderBottomWidth: 1,
                        borderBottomColor: '#ECECED',
                        flexDirection: 'row',
                        alignItems: 'center'
                    },
                    imgProfile: {
                        width: toDp(70),
                        height: toDp(70),
                        borderRadius: toDp(35),
                        marginHorizontal: toDp(16)
                    },
                    textName: {
                        fontSize: toDp(16),
                        fontFamily: 'HelveticaNeue-Bold',
                        fontWeight: '500',
                        color: '#212121',
                        marginBottom: toDp(4)
                    }
                })