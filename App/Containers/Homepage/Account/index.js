import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Alert,
  } from 'react-native';
  
import { toDp } from '@percentageToDP'

class Account extends Component{

    constructor(props) {
        super(props);
        this.state = {
          idUser: '',
          fullname: '',
          email: '',
          url_image: '',
        };
      }
      
      componentWillMount() {
        AsyncStorage.getItem('dataUser', (err, result) => {
          console.log(result)
          let data = JSON.parse(result)
          this.setState({idUser: data.id_users, fullname:data.fullname, email:data.email, url_image:data.url_photo})
        })
      }

    
    logout(data){
        Alert.alert(
            'Logout',
            'Anda yakin mau keluar?',
            [
              {text: 'OK', onPress: () => this.removeItemValue(data)},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              
            ],
            
          );
    }
    async removeItemValue(key) {
            try {
                await AsyncStorage.removeItem(key);
                this.props.navigation.replace('SplashScreen')
                return true;
            }catch(exception) {
                return false;
            }
        
    } 

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: this.state.url_image}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name} >{this.state.fullname}</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>
                        <Text style={styles.description}>{this.state.email}</Text>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.logout('dataUser')}>
                                <Text>Logout</Text>  
                            </TouchableOpacity>              
                            {/* <TouchableOpacity style={styles.buttonContainer}>
                                <Text>Opcion 2</Text> 
                            </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });

  export default Account