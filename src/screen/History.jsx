import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const History = () => {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#6b00b3"
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
              style={[
                styles.qrcode,
                {marginLeft: moderateScale(15), marginRight: moderateScale(16)},
              ]}
            />
            <Image
              source={require('../image/information.png')}
              style={styles.qrcode}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(80),
    backgroundColor: '#6b00b3',
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
})