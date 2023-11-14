import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import useHome from './useHome';
import {Card, CardSkeleton} from '@components';

const Home = () => {
  let {planets, page, setPage, status} = useHome();

  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-black">Home</Text>
      {planets === null ? (
        <>
          {new Array(10).fill(null).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </>
      ) : (
        <FlashList
          bounces={false}
          className="flex-1"
          data={planets?.results}
          renderItem={({item}) => <Card {...item} />}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={planets.count}
          onEndReached={() => {
            if (page < 6) {
              setPage(page + 1);
            }
          }}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            status === 'loading' ? <ActivityIndicator size="small" /> : null
          }
        />
      )}
    </View>
  );
};

export default Home;
