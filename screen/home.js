import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios';
import Star from 'react-native-star-view';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {},
      ngrok_url: '',
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  /*define getmovie(), likedMovie(), dislikedMovie() ,notWatched() functions here*/

  getMovie = () => {
    const url = this.state.ngrok_url;
    axios
      .get(url)
      .then((response) => {
        this.setState({ movieDetails: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  likedMovie = () => {
    const url = this.state.ngrok_url + '/like';
    axios
      .get(url)
      .then((response) => {
        this.getMovie();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  dislikedMovie = () => {
    const url = this.state.ngrok_url + '/dislike';
    axios
      .get(url)
      .then((response) => {
        this.getMovie();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  notWatched = () => {
    const url = this.state.ngrok_url + '/did_not_watch';
    axios
      .get(url)
      .then((response) => {
        this.getMovie();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ width: '100%', height: '100%' }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: RFValue(18),
              fontFamily: 'monospace',
              textAlign: 'center',
              flex: 1,
            }}>
            Movie Recommendation
          </Text>

          <Icon
            name="chevron-right"
            type="feather"
            color={'white'}
            size={RFValue(30)}
            containerStyle={{ position: 'absolute', right: RFValue(5) }}
            onPress={() => {
              this.props.navigation.navigate('Top');
            }}></Icon>

          <Image
            style={{
              flex: 0.65,

              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{ uri: 'https://wallpapercave.com/wp/wp9424755.jpg' }}
          />

          <Text
            style={{
              color: '#fff',
            }}>
            Avatar
          </Text>
          <Text
            style={{
              color: '#fff',
            }}>
            duration
          </Text>

          <Star
            score={5}
            style={{ width: RFValue(200), height: RFValue(40) }}
          />

          <TouchableOpacity onPress={this.likedMovie}>
            <Image
              style={{ width: RFValue(50), height: RFValue(50) }}
              source={require('../assets/like.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dislikedMovie}>
            <Image
              style={{ width: RFValue(50), height: RFValue(50) }}
              source={require('../assets/dislike.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.notWatched}>
            <Image
              style={{ width: RFValue(50), height: RFValue(50) }}
              source={require('../assets/didNotWatch.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

