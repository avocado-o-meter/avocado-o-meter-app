import React from 'react';
import {StyleSheet, Text, Pressable, ViewStyle, TextStyle} from 'react-native';

interface Props {
  onPress: () => void;
}

export function DemoButton({
  onPress,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(240, 79, 90)' : 'rgb(240, 79, 103)',
        },
        styles.container,
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 45,
    minWidth: '45%',
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
