import {Planet} from 'types';

export type HomeTabParamList = {
  Home: undefined;
  Wishlist: undefined;
  Detail: {item: Planet};
};

export type RootStackParamList = {
  Splash: undefined;
  HomeTab: undefined;
  Detail: {item: Planet};
};
