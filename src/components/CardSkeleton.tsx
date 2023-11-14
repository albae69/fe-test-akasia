import React from 'react';
import {View} from 'react-native';

const CardSkeleton = () => {
  return (
    <View className="animate-pulse border shadow-md border-gray-200 rounded-md mb-4 bg-white">
      <View className="p-4">
        <View className="h-2 w-full bg-slate-100 rounded-md mb-2" />
        <View className="h-2 w-full bg-slate-100 rounded-md mb-2" />
        <View className="h-2 w-full bg-slate-100 rounded-md" />
      </View>
    </View>
  );
};

export default CardSkeleton;
