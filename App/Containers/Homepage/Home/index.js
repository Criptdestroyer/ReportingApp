import React, { Component } from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { toDp } from '@percentageToDP'


class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchPlus} onPress={() => this.props.navigation.navigate('AddReport')}>
          <Text allowFontScaling={false} style={styles.textPlus}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchPlus: {
    width: toDp(48),
    height: toDp(48),
    borderRadius: toDp(24),
    backgroundColor: '#2F5596',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: toDp(16),
    bottom: toDp(16)
  },
  textPlus: {
    fontFamily: 'HelveticaNeue-Light',
    color: '#FFFFFF',
    fontSize: toDp(32),
    fontWeight: '500',
    marginBottom: toDp(4)
  }
})


export default Home