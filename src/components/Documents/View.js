import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, ScrollView, Animated } from "react-native";
import { screenHeight, screenWidth } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/theme-context";

import Hr from "../Hr/Hr";
import DocsHeader from "./Header";
import FilterBar from "./FilterBar";
import DocsFlatList from "./FlatList";

export default DocsView = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [filterBy, setFilterBy] = useState(0);
  const [viewMode, setViewMode] = useState("List");
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  // useEffect(() => console.log(filterBy), [filterBy]);
  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 35, 36, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = _getTitleOpacity();
  return (
    <View>
      <ScrollView
        style={{
          zIndex: 1,
          height: screenHeight,
          backgroundColor: theme.backgroundColor
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        contentContainerStyle={{ marginTop: 100 }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <Animated.Text
          style={{
            marginLeft: 15,
            opacity: titleOpacity,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          Documents
        </Animated.Text>
        <View style={{ paddingHorizontal: 15 }}>
          <Hr padding={30} />
        </View>
        <FilterBar
          theme={theme}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <DocsFlatList
          {...props}
          theme={theme}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
        {/* <Button title="switch theme" onPress={() => switchTheme()}></Button> */}
      </ScrollView>
      <DocsHeader {...props} scrollY={scrollY} header="Documents" />
    </View>
  );
};
