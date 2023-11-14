import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';

import {Card, CardSkeleton} from '@components';
import useWishlist from './useWishlist';
import {HomeTabParamList} from '@navigation/types';

type Props = NativeStackScreenProps<HomeTabParamList, 'Wishlist'>;

const Wishlist = ({navigation}: Props) => {
  const {wishlist, status, clear} = useWishlist();

  return (
    <View className="flex flex-1 bg-white p-4">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-2xl font-bold mb-4 text-black">Wishlist</Text>
        {wishlist.length > 0 && (
          <Text
            className="text-sm font-regular mb-4 text-black"
            onPress={clear}>
            Clear
          </Text>
        )}
      </View>
      {status == 'loading' ? (
        new Array(10).fill(null).map((_, index) => <CardSkeleton key={index} />)
      ) : wishlist.length == 0 ? (
        <View className="flex flex-1 items-center justify-center">
          <Text className="text-regular text-black">No Wishlist</Text>
        </View>
      ) : (
        <FlashList
          bounces={false}
          className="flex-1"
          data={wishlist}
          renderItem={({item}) => (
            <Card
              {...item}
              onPress={() => navigation.navigate('Detail', {item: item})}
            />
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={10}
        />
      )}
    </View>
  );
};

export default Wishlist;
