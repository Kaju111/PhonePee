import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#A74AC7"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.headerLift}>
            <View>
              <Image source={require('../image/boy.png')} style={styles.user} />
              <Image
                source={require('../image/india.png')}
                style={styles.flag}
              />
            </View>
            <View style={{marginLeft: moderateScale(10)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.home}>Home</Text>
                <Image
                  source={require('../image/down.png')}
                  style={styles.down}
                />
              </View>
              <Text style={styles.address}>349, House No 2, Tezpur, Assam</Text>
            </View>
          </View>
            <View style={styles.headerRight}>
              <Image
                source={require('../image/qrCode.png')}
                style={styles.qrcode}
              />
                <Image
                source={require('../image/bell.png')}
                style={[styles.qrcode, {marginLeft:moderateScale(15), marginRight: moderateScale(16)}]}
              />
                <Image
                source={require('../image/information.png')}
                style={styles.qrcode}
              />
            </View>
        </View>
      </View>
      <View style={styles.update}>
        <View style={styles.updateTop}>
          <Image source={require('../image/logo.png')} style={styles.logo}/>
          <View>
            <Text style={styles.title}>App Update Available</Text>
            <Text>{'We need fixed some issues and added some cool feaures in this update'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    backgroundColor: '#A74AC7',
    justifyContent: 'flex-end',
  },
  header2: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  headerLift: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    width: scale(40),
    height: scale(40),
  },
  flag: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    right: -moderateScale(3),
    bottom: moderateScale(0),
    borderRadius: scale(9),
    borderWidth: 2,
    borderColor: 'white',
  },
  home: {
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: '600',
  },
  down: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
    marginLeft: moderateScale(5),
  },
  address: {
    color: 'white',
    fontSize: moderateScale(11),
    marginTop: moderateVerticalScale(2),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrcode: {
    width: scale(20),
    height: scale(20),
    tintColor: 'white',
  },
  update:{
    width:'90%',
    height: verticalScale(100),
    borderRadius:moderateScale(10),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    shadowRadius: 10,
    shadowColor: 'rgba(0,0,0,.5)',
    backgroundColor: '#f2f2f2',
    shadowOffset:{x:0,y:0}
  },
  update:{
    width:'94%',
    height: verticalScale(130),
    borderRadius:moderateScale(5),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    backgroundColor: 'white',
  },
  updateTop:{
    flexDirection: 'row',
    width: '100%',
    paddingLeft: moderateScale(13),
    paddingRight: moderateScale(13),
    marginTop: moderateVerticalScale(10)
  },
  logo:{
    width: scale(30),
    height: scale(30)
  },
  title:{
    fontSize: moderateScale(20),
    fontWeight: '600'
  }
});
