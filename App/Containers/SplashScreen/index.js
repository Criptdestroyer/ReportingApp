import React, { Component } from 'react'
import {StyleSheet, Image, Dimensions, } from 'react-native'
import { allLogo } from '@Assets'
const { width, height } = Dimensions.get('window')

type Props = {}
export default class SplashScreen extends Component<Props> {

  componentWillMount(){
    setTimeout(()=> {
      alert("Hallo WRI Palembang")
    },3000)
  }

  render() {
    return (
      <Image source={allLogo.splashscreen} style={styles.splashscreen} />
    )
  }
}

const styles = StyleSheet.create({
  splashscreen: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
