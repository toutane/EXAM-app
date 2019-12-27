import React, { useState, useContext, useEffect } from "react";
import { View, Animated, ScrollView } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/theme-context";
import { ItemContext } from "../../contexts/item-context";
import { QuestionContext } from "../../contexts/question-context";

import Header from "./Header";
import QuestionList from "./QuestionList";

export default ExamView = props => {
  const { theme } = useContext(ThemeContext);

  const { currentItem, listen_item, update_item } = useContext(ItemContext);
  const { update_question, delete_question } = useContext(QuestionContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  useEffect(() => listen_item(props.navigation.getParam("currentItem")), []);

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = _getTitleOpacity();

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor
      }}
    >
      <View>
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
              marginHorizontal: 15,
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
              {currentItem.title}
            </Animated.Text>
          </View>
          <QuestionList
            theme={theme}
            exam={currentItem}
            update_question={update_question}
            delete_question={delete_question}
            nbQ={currentItem.questions.length}
          />
        </ScrollView>
        <Header
          {...props}
          theme={theme}
          item={currentItem}
          update_item={(item, newTitle, isFavorite) =>
            update_item(item, newTitle, isFavorite)
          }
          deleteItem={item => deleteItem(item)}
          backHeader="Documents"
          backBtn={true}
          scrollY={scrollY}
          isOptionsVisible={isOptionsVisible}
          setIsOptionsVisible={setIsOptionsVisible}
        />
      </View>
    </View>
  );
};
