import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Planet} from 'types';
import {formatNumber} from '@utils';

interface Card extends Planet {
  onPress: () => void;
}

const Card = ({name, population, terrain, onPress}: Partial<Card>) => {
  return (
    <TouchableOpacity
      className="border shadow-md border-gray-200 rounded-md mb-4 bg-white"
      onPress={onPress}>
      <View className="p-4">
        <Text className="text-lg font-bold text-black">{name}</Text>
        <Text className="text-xs font-regular text-gray-500">
          Population : {formatNumber(population)}
        </Text>
        <Text className="text-xs font-regular text-gray-500">
          Terrain : {terrain}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
