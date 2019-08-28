import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  DrawerLayoutAndroid,
  TouchableNativeFeedback,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Touchables from './Touchables';
import MenuDrawer from './MenuDrawer';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';

class Home extends React.Component {
  state = {
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree',
    ],
  };

  openDrawer = () => {
    this.drawer.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.closeDrawer();
  };

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        renderNavigationView={() => {
          <MenuDrawer
          // navigation={this.props.navigation}
          // closeDrawer={this.closeDrawer}
          />;
        }}
        ref={_drawer => {
          this.drawer = _drawer;
        }}>
        <View style={styles.container} onLayout={this.onLayout}>
          <View style={styles.header}>
            <TouchableNativeFeedback onPress={(onPress = this.openDrawer)}>
              <FontAwesome name="menu" size={30} style={{padding: 10}} />
            </TouchableNativeFeedback>
            <Text style={styles.text}>madeInAba</Text>
            <TouchableNativeFeedback>
              <FontAwesome name="magnify" size={30} style={{padding: 10}} />
            </TouchableNativeFeedback>
          </View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={170}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            // parentWidth={this.state.width}
          />
          <Touchables />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
