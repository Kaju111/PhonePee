import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import Home from './src/screen/Home';
import Stores from './src/screen/Stores';
import Insurence from './src/screen/Insurence';
import Wealth from './src/screen/Wealth';
import History from './src/screen/History';

const App = () => {
  const [select, setSelect] = useState(0);

  return (
    <View style={styles.container}>
      {select == 0 ? (
        <Home />
      ) : select == 1 ? (
        <Stores />
      ) : select == 2 ? (
        <Insurence />
      ) : select == 3 ? (
        <Wealth />
      ) : (
        <History />
      )}
      <View style={styles.bottomNev}>
        <View style={styles.bottomNev2}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelect(0);
            }}>
            <View
              style={[
                styles.tabIconsBtn,
                {backgroundColor: select == 0 ? '#6600cc' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/image/house.png')}
                style={[
                  styles.tabIcons,
                  {tintColor: select == 0 ? 'white' : 'black'},
                ]}
              />
            </View>
            <Text style={{color: select == 0 ? '#6600cc' : '#bdbdbd'}}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelect(1);
            }}>
            <View
              style={[
                styles.tabIconsBtn,
                {backgroundColor: select == 1 ? '#6600cc' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/image/orders.png')}
                style={[
                  styles.tabIcons,
                  {tintColor: select == 1 ? 'white' : 'black'},
                ]}
              />
            </View>
            <Text style={{color: select == 1 ? '#6600cc' : '#bdbdbd'}}>Store</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelect(2);
            }}>
            <View
              style={[
                styles.tabIconsBtn,
                {backgroundColor: select == 2 ? '#6600cc' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/image/insurance.png')}
                style={[
                  styles.tabIcons,
                  {tintColor: select == 2 ? 'white' : 'black'},
                ]}
              />
            </View>
            <Text style={{color: select == 2 ? '#6600cc' : '#bdbdbd'}}>Insurence</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelect(3);
            }}>
            <View
              style={[
                styles.tabIconsBtn,
                {backgroundColor: select == 3 ? '#6600cc' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/image/rupee.png')}
                style={[
                  styles.tabIcons,
                  {tintColor: select == 3 ? 'white' : 'black'},
                ]}
              />
            </View>
            <Text style={{color: select == 3 ? '#6600cc' : '#bdbdbd'}}>Wealth</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelect(4);
            }}>
            <View
              style={[
                styles.tabIconsBtn,
                {backgroundColor: select == 4 ? '#6600cc' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/image/transaction.png')}
                style={[
                  styles.tabIcons,
                  {tintColor: select == 4 ? 'white' : 'black'},
                ]}
              />
            </View>
            <Text style={{color: select == 4 ? '#6600cc' : '#bdbdbd'}}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNev: {
    width: '100%',
    height: verticalScale(70),
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
  },
  bottomNev2: {
    width: '100%',
    height: verticalScale(55),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcons: {
    width: scale(20),
    height: scale(20),
  },
  tabIconsBtn: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
