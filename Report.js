import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// import components
import Card from "../components/Card";
import Button from "../components/Button";


export default function LeaderboardScreen() {
  return(
    <View style={styles.container}>
    <Text style={{color: '#fff', fontSize: 35, fontWeight: '900', alignSelf: 'flex-start' , marginRight:'auto', marginTop:60,marginBottom:15}}>Daily Average</Text>
      <View style={styles.card}>
        <Text style={styles.textHighlight}>Highlight</Text>
        <Text style={{fontSize:15,color:'#FFFFFF',fontWeight:'bold',marginBottom:5,marginLeft:20,paddingTop:3}}>Your total number of steps walked this week.</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems:'flex-start'}}>
          <Text style={{color: '#fff', fontWeight: '800', fontSize: 20,}}>15,000</Text>
          <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,marginLeft:3,paddingTop:10}}>Paces/Mins</Text>
        </View>
        <View style={styles.rankBackground}>
           <Text style={styles.rank}>THIS WEEK</Text>
        </View>
        
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>05/10/2022</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 20, borderRadius: 7, marginVertical: 7,  marginBottom: 20}}>
          <View style={{display: 'flex', flexDirection: 'cloumn', alignItems: 'ceter',marginLeft:40}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20,}}>4,5000</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>Paces</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20}}>50</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>Mins</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20}}>1.30</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>KM</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20}}>230</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>Kcal</Text>
          </View>
      </View>
    </View>
    <View style={styles.card}>
      <Text style={styles.text}>06/10/2022</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 20, borderRadius: 7, marginVertical: 7,  marginBottom: 20}}>
          <View style={{display: 'flex', flexDirection: 'cloumn', alignItems: 'ceter',marginLeft:40}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20,}}>3,6000</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>Paces</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20}}>39</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>Mins</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20}}>0.56</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>KM</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 20}}>168</Text>
            <Text style={{color: '#fff', fontWeight: '800', fontSize: 15,alignSelf:'center'}}>Kcal</Text>
          </View>
      </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1B1B',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20
    },
  card: {
    borderWidth: 1,
    borderColor: '#3D3D3D',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 4,
    height:'25%'
  },
  textHighlight: {
    fontSize: 20,
    color:'#F81250',
    fontWeight:'bold',
    marginBottom:10
  },
  text:{
    fontSize: 20,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignSelf:'flex-start',
    marginBottom:7
  },
  rank: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold', 
    marginLeft:20,
    fontSize: 15
  },
  rankBackground: {
    borderRadius: 100,
    backgroundColor: '#F81250',
  },
})