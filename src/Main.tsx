import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Animated from "react-native-reanimated";
// core snoopy
// import Snoopy from "rn-snoopy";
// import filter from "rn-snoopy/stream/filter";
// import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

// const emitter = new EventEmitter();

// const events = Snoopy.stream(emitter);
// filter({ method: "updateView" }, true)(events).subscribe();

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

const { Value, Extrapolate } = Animated;

class Main extends Component {
  constructor(props) {
    super(props);

    // remember Animated destructured
    this.scrollY = new Value(0);
  }

  componentDidMount() {
    // setInterval(() => {
    //   for (let i = 0; i < 1000; i++) {
    //     console.log(i);
    //   }
    // }, 200);
  }

  render() {
    const headerHeight = this.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: Extrapolate.CLAMP
    });

    const profileImageHeight = this.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: Extrapolate.CLAMP
    });

    const profileImageMarginTop = this.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: Extrapolate.CLAMP
    });

    const headerZindex = this.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0, 0, 1000],
      extrapolate: Extrapolate.CLAMP
    });

    const headerTitleBottom = this.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: Extrapolate.CLAMP
    });

    return (
      <View style={styles.root}>
        <Text>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Main;
