import React from 'react';
import {Alert, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '@navigation/types';
import {formatNumber} from '@utils';
import {Button} from '@components';
import useBoundStore from '@store';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Item = ({title, description}: {title: string; description: string}) => {
  return (
    <View className="flex flex-row items-center justify-between mb-2">
      <Text className="text-sm font-regular text-gray-500 capitalize">
        {title ?? 'title'}
      </Text>
      <Text className="text-md font-med text-black capitalize">
        {description ?? 'description'}
      </Text>
    </View>
  );
};

const Detail = ({navigation, route}: Props) => {
  const planet = route?.params?.item;
  const {wishlist, add} = useBoundStore(state => state);

  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-2 text-black">{planet.name}</Text>

      <Item title="Population" description={formatNumber(planet.population)} />
      <Item title="Terrain" description={planet.terrain} />

      <Text className="text-base font-bold  text-black mb-2">
        Additional Information
      </Text>

      <Item title="Gravity" description={planet.gravity} />
      <Item title="climate" description={planet.climate} />
      <Item
        title="diameter"
        description={`${formatNumber(planet.diameter)} km`}
      />
      <Item
        title="Orbital Period"
        description={`${planet.orbital_period} days`}
      />
      <Item
        title="Rotation Period"
        description={`${planet.rotation_period} hours`}
      />
      <Item title="Surface Water" description={`${planet.surface_water}%`} />
      <View className="h-10" />
      {wishlist.filter(item => item.name == planet.name).length > 0 ? (
        <Text className="font-regular text-center text-black underline">
          Already on Wishlist
        </Text>
      ) : (
        <Button
          title="Add to Wishlist"
          onPress={() => {
            add(planet);
            Alert.alert('Message', 'Successfully added planet to wishlist', [
              {onPress: () => navigation.goBack()},
            ]);
          }}
        />
      )}
    </View>
  );
};

export default Detail;
