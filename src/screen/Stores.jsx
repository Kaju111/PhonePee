import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Stores = () => {
  return (
    <View style={styles.container}>
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

      <View style={styles.searchBox}>
        <Image source={require('../image/search.png')} style={styles.search} />
        <Text style={styles.searchPlaceHolder}>
          Search by store name or phone number
        </Text>
      </View>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        renderItem={({item, index}) => {
          return (
            <View style={styles.shopItem}>
              <Text style={styles.transactionTime}>
                Last paid ₹50, 3 months ago{' '}
              </Text>
              <View style={styles.shopDetails}>
                <View style={styles.leftSection}>
                  <Image
                    source={require('../image/shop.jpg')}
                    style={styles.shopImg}
                  />
                  <View style={styles.shopNameView}>
                    <Text>Mon Store</Text>
                    <View style={styles.ShopRatingView}>
                      <Image
                        source={require('../image/star.png')}
                        style={styles.rating}
                      />
                      <Text style={styles.ratingCount}>4.3</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Stores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
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
  searchBox: {
    width: '94%',
    height: verticalScale(45),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
  },
  search: {
    width: scale(18),
    height: scale(18),
  },
  searchPlaceHolder: {
    color: '#9e9e9e',
    marginLeft: moderateScale(15),
    fontSize: moderateScale(15),
  },
  shopItem: {
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    padding: moderateScale(10),
  },
  transactionTime: {
    color: '#9e9e9e',
    fontSize: moderateScale(12),
  },
  shopDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(10),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopImg: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },
  shopNameView: {
    marginLeft: moderateScale(10),
  },
  ShopRatingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5)
  },
  rating: {
    width: scale(10),
    height: scale(10),
  },
  ratingCount:{
    color: '#9e9e9e',
    marginLeft: moderateScale(3)
  }
});
