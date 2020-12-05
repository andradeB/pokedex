import React, { useEffect, useState } from 'react';
import { BaseSheetBackground, BaseSheetContent, Draggable } from './style';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandlerEventExtra, PanGestureHandler } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const AnimatedBackground = Animated.createAnimatedComponent(BaseSheetBackground);
const AnimatedBaseSheetContent = Animated.createAnimatedComponent(BaseSheetContent);
const AnimatedBaseSheetDraggable = Animated.createAnimatedComponent(Draggable);

type BaseSheetProps = {
  onHide: () => void;
  visible: boolean;
  sheetHeight: number;
};

export const BaseSheet: React.FC<BaseSheetProps> = ({ onHide, visible, sheetHeight, children }) => {
  const [animatedOpacity] = useState(new Animated.Value(0));
  const [left] = useState(new Animated.Value(width));

  const onGestureEvent = ({ nativeEvent }: { nativeEvent: PanGestureHandlerEventExtra }) => {
    console.log(nativeEvent);
    if (nativeEvent.translationY > 0) {
      onHide();
    }
  };

  const show = () => {
    Animated.timing(left, {
      toValue: 0,
      duration: 1,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const hide = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(left, {
        toValue: width,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => (visible ? show() : hide()), [visible]);

  return (
    <>
      <AnimatedBackground
        onPress={() => {
          onHide();
        }}
        style={{
          opacity: animatedOpacity,
          transform: [
            {
              translateX: left,
            },
          ],
        }}
      />
      <AnimatedBaseSheetContent
        style={{
          transform: [
            {
              translateY: animatedOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [height, height - sheetHeight],
              }),
            },
          ],
        }}
      >
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <AnimatedBaseSheetDraggable />
        </PanGestureHandler>

        {children}
      </AnimatedBaseSheetContent>
    </>
  );
};
