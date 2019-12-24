import React, { useState, useContext } from "react";
import { View, Animated, ScrollView } from "react-native";
import { ThemeContext } from "../contexts/theme-context";
import { screenHeight } from "../utils/dimensions";

import Header from "../components/Exam/Header";

export default ExamView = props => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = this._getTitleOpacity();

  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor
      }}
    >
      <ScrollView
        style={{ height: screenHeight, zIndex: 1 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={61}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginHorizontal: 32,
            marginTop: 100,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Animated.Text
            style={{
              opacity: titleOpacity,
              fontSize: 34,
              fontFamily: "sf-display-bold",
              color: theme.fontColor
            }}
          >
            {props.navigation.getParam("currentItem").title}
          </Animated.Text>
        </View>
      </ScrollView>
      <Header
        {...props}
        backHeader="Documents"
        backBtn={true}
        header={props.navigation.getParam("currentItem").title}
        scrollY={scrollY}
      />
    </View>
  );
};
