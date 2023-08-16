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
import ComonHeader from './ComonHeader';

const Stores = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#6b00b3"
        translucent={true}
      />
      <ComonHeader/>
      <ScrollView>
        <View style={styles.searchBox}>
          <Image
            source={require('../image/search.png')}
            style={styles.search}
          />
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
                        <Text
                          style={[
                            styles.ratingCount,
                            {marginLeft: moderateScale(20)},
                          ]}>
                          50 m
                        </Text>
                        <Text
                          style={[
                            styles.ratingCount,
                            {marginLeft: moderateScale(20)},
                          ]}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.payNowBtn}>
                  <Image
                    source={require('../image/upright.png')}
                    style={styles.upicon}
                  />
                  <Text style={styles.paynow}>Pay Now</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.categoryCard}>
          <Text style={styles.heading}>Popular Categories</Text>
          <FlatList
            numColumns={4}
            contentContainerStyle={{marginTop: moderateScale(20)}}
            data={[
              {
                icons: require('../image/shop.png'),
                title: 'Kirana & General Store',
              },
              {
                icons: require('../image/food.png'),
                title: 'Fruits and Vegetables',
              },
              {
                icons: require('../image/turkey.png'),
                title: 'Meat Shop',
              },
              {
                icons: require('../image/medicine.png'),
                title: 'Pharmacy',
              },
              {
                icons: require('../image/pharmacy.png'),
                title: 'Doctor & Path labs',
              },
              {
                icons: require('../image/beverages.png'),
                title: 'Food Beverages',
              },
              {
                icons: require('../image/stationery.png'),
                title: 'Stationery',
              },
              {
                icons: require('../image/damage.png'),
                title: 'Home Cleaning',
              },
            ]}
            renderItem={({item, index}) =>{
              return(
                <TouchableOpacity style={styles.categoryItem}>
                    <Image source={item.icons} style={styles.categoryIcons}/>
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </ScrollView>
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
    marginTop: moderateScale(5),
  },
  rating: {
    width: scale(10),
    height: scale(10),
  },
  ratingCount: {
    color: '#9e9e9e',
    marginLeft: moderateScale(3),
  },
  payNowBtn: {
    width: '96%',
    height: verticalScale(30),
    borderRadius: moderateScale(30),
    borderWidth: 0.4,
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(10),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upicon: {
    width: scale(10),
    height: scale(10),
    tintColor: '#6b00b3',
  },
  paynow: {
    color: '#6b00b3',
    marginLeft: moderateScale(10),
  },
  categoryCard: {
    width: '94%',
    height: verticalScale(200),
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(100),
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  categoryItem:{
    width: '25%',
    alignItems: 'center',
    marginTop: moderateVerticalScale(15)
  },
  categoryIcons:{
    width:scale(30),
    height: scale(30),
    tintColor: '#6b00b3'
  },
  title:{
    fontSize: moderateScale(12),
    textAlign: 'center',
    marginTop: moderateVerticalScale(5)
  }
});
