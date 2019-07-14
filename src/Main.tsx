import React, { Component } from "react";
import React, { Component } from "react";
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Animated } from "react-native";
// core snoopy
import Snoopy from "rn-snoopy";
import filter from "rn-snoopy/stream/filter";
import {} from "react-native/Libraries/vendor/emitter/EventEmitter";
import { EventEmitter } from "fbemitter";

const emitter = new EventEmitter();

const events = Snoopy.stream(emitter);
filter({ method: "updateView" }, true)(events).subscribe();

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

class Main extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}

export default Main;
