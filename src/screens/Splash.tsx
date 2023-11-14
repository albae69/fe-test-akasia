import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {wait} from '@utils';
import {RootStackParamList} from '@navigation/types';
import {logo} from '@assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: Props) => {
  useEffect(() => {
    (async () => {
      // DO SOMETHING
      await wait(1500);
      navigation.replace('HomeTab');
    })();
  }, []);

  return (
    <View className="flex flex-1 items-center justify-center bg-white">
      <Image source={logo} className="h-60 w-60 object-contain" />
    </View>
  );
};

export default Splash;
