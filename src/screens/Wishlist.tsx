import React from 'react';
import {Text, View} from 'react-native';

import {CardSkeleton} from '@components';

const Wishlist = () => {
  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-black">Wishlist</Text>
      {new Array(10).fill(null).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </View>
  );
};

export default Wishlist;
