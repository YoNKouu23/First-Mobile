import { StyleSheet, Text, View, Image,TextInput, Pressable } from 'react-native'
import React from 'react'


export default function index() {
  return (
    <View style={styles.container}>
          <Image style={{
              width: 177,
              height: 158
          }} source={require('../assets/images/favicon.png')} />
   
          <View style={{
              gap: 24
          }}>
              <View style={styles.content}>
                  <Text style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: '#fff'
                  }}>Welcome Back</Text>
                  <Text style={{
                      fontSize: 16,
                      color: '#fff'

                  }}>Please Log into your existing account</Text>
              </View>
              <View style={{
                  gap: 25
              }}>
                  
                  <View style={{
                      gap: 16
                  }}>
                    <TextInput style={styles.input}
                    placeholder='Your Email'
                    
                    />
                    
                    <TextInput style={styles.input}
                    placeholder='Your Password'
                    
                    />
                  </View>

                  <Pressable style={{
                      backgroundColor: '#2BC990',
                      borderRadius: 20,
                      padding: 12,
                      

                  }}>
                      <Text style={{
                          textAlign: 'center',
                          fontSize: 20,
                          fontWeight: 'semibold',
                          color: '#fff'
                      }}>Log in</Text>
                  </Pressable>
              
              </View>    
         </View>
   
   
   
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A0171',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        gap: 55
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 27
       
    },

    contentText: {
        color: '#fff',
        
    },

    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 12,
        color: '#fff'
    }


})