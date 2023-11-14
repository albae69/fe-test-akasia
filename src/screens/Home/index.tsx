import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import useHome from './useHome';
import {Card, CardSkeleton} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeTabParamList} from '@navigation/types';

type Props = NativeStackScreenProps<HomeTabParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  let {planets, page, setPage, status, reload} = useHome();

  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-black">Home</Text>
      {planets === null ? (
        <>
          {status === 'loading' ? (
            new Array(10)
              .fill(null)
              .map((_, index) => <CardSkeleton key={index} />)
          ) : (
            <View className="flex flex-1 items-center justify-center">
              <Text className="text-2xl font-regular text-red-500 ">
                Something wrong!
              </Text>
              <Text
                className="text-sm font-regular text-black"
                onPress={reload}>
                Try Again
              </Text>
            </View>
          )}
        </>
      ) : (
        <FlashList
          bounces={false}
          className="flex-1"
          data={planets?.results}
          renderItem={({item}) => (
            <Card
              {...item}
              onPress={() => navigation.navigate('Detail', {item: item})}
            />
          )}
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
