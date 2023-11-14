import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Button = {
  onPress: () => void;
  title: string;
};

const Button = ({onPress, title}: Button) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-[48px] w-full flex flex-row items-center justify-center bg-black rounded-lg"
      onPress={onPress}>
      <Text className="text-regular font-bold text-white">
        {title ?? 'title'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
