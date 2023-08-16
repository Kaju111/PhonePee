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
import ComonHeader from './ComonHeader';
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#6b00b3"
        translucent={true}
      />
      <ComonHeader/>
      <ScrollView>
        <View style={styles.update}>
          <View style={styles.updateTop}>
            <Image source={require('../image/logo.png')} style={styles.logo} />
            <View>
              <Text style={styles.title}>App Update Available</Text>
              <Text style={styles.updateMsg}>
                {
                  'We need fixed some issues and added  some cool feaures in this update'
                }
              </Text>
            </View>
          </View>
          <View style={styles.updateBtnView}>
            <Text style={styles.later}>LATER</Text>
            <TouchableOpacity style={styles.updateBtn}>
              <Text style={styles.updateText}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../image/phonpe.png')}
          style={styles.phonepeLogo}
        />
        <View style={styles.moneyTransferCard}>
          <Text style={styles.heading}>Money Transfers</Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../image/user.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.transferText}>To Mobile Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../image/bank.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.transferText}>{'To Bank/\nUPI ID'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../image/reload.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.transferText}>To Self Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../image/bank1.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.transferText}>{'Check\nBalance'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.otherOptions}>
          <TouchableOpacity style={styles.otherOptionsTab}>
            <Image
              source={require('../image/wallett.png')}
              style={styles.icons}
            />
            <Text style={styles.otherOptionsText}>PhonePe Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOptionsTab}>
            <Image source={require('../image/gift.png')} style={styles.icons} />
            <Text style={styles.otherOptionsText}>Rewards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOptionsTab}>
            <Image
              source={require('../image/speakerr.png')}
              style={styles.icons}
            />
            <Text style={styles.otherOptionsText}>Refer & Get 100</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rechargeAndBills}>
          <Text style={styles.heading}>Recharge & Pay Bills</Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/phone.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>Mobile Recharge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/dish.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/idea.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(35), height: scale(35)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/card.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'Credit Card\nPayment'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/renewable.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'Rent \n Payment'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/personal.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'Loan Repayment'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../image/gastank.png')}
                  style={[
                    styles.icons,
                    {tintColor: '#6b00b3', width: scale(35), height: scale(35)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'Book \n Cylinder'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard]}>
                <Image
                  source={require('../image/next.png')}
                  style={[styles.icons, {height: scale(15), width: scale(15)}]}
                />
              </View>
              <Text style={styles.transferText}>{'See All...'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  update: {
    width: '90%',
    height: verticalScale(100),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    shadowRadius: 10,
    shadowColor: 'rgba(0,0,0,.5)',
    backgroundColor: '#f2f2f2',
    shadowOffset: {x: 0, y: 0},
  },
  update: {
    width: '94%',
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    backgroundColor: 'white',
  },
  updateTop: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: moderateScale(13),
    paddingRight: moderateScale(13),
    marginTop: moderateVerticalScale(20),
  },
  logo: {
    width: scale(30),
    height: scale(30),
  },
  title: {
    fontSize: moderateScale(19),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: 'black',
  },
  updateMsg: {
    fontSize: 13,
    width: '70%',
    marginLeft: moderateScale(10),
    color: '#6e6e6e',
  },
  updateBtnView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: moderateVerticalScale(20),
    marginBottom: moderateVerticalScale(15),
    alignItems: 'center',
    marginRight: moderateScale(20),
  },
  later: {
    color: '#6b00b3',
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
  updateBtn: {
    backgroundColor: '#6b00b3',
    paddingBottom: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    borderRadius: moderateScale(20),
    marginLeft: moderateScale(20),
  },
  updateText: {
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
  phonepeLogo: {
    width: '94%',
    height: verticalScale(100),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(17),
    borderRadius: moderateScale(10),
  },
  moneyTransferCard: {
    width: '94%',
    height: verticalScale(130),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
    color: 'black',
  },
  transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  transferTab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferCard: {
    width: scale(36),
    height: scale(36),
    borderRadius: moderateScale(8),
    backgroundColor: '#6b00b3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: scale(28),
    height: scale(28),
    tintColor: 'white',
  },
  transferText: {
    color: '#454545',
    marginTop: moderateScale(5),
    textAlign: 'center',
    fontSize: scale(12),
  },
  otherOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  otherOptionsTab: {
    width: '32%',
    height: verticalScale(60),
    backgroundColor: '#277be8',
    borderRadius: moderateScale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherOptionsText: {
    color: 'white',
    fontWeight: '400',
    marginTop: moderateScale(7),
    fontSize: scale(13),
  },
  rechargeAndBills: {
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
    height: verticalScale(210),
    width: '94%',
    marginBottom: moderateVerticalScale(100),
  },
});
