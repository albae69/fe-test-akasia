import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '@navigation/types';
import {formatNumber} from '@utils';
import {Button} from '@components';

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

const Detail = ({route}: Props) => {
  const planet = route?.params?.item;

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
      <Button title="Add to Wishlist" onPress={() => {}} />
    </View>
  );
};

export default Detail;
