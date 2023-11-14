import {Planet} from 'types';
import {StateCreator} from 'zustand';

export interface WishlistSlice {
  wishlist: Planet[];
  add: (planet: Planet) => void;
  clear: () => void;
}

const createWishlistSlice: StateCreator<WishlistSlice> = set => ({
  wishlist: [],
  add: (planet: Planet) =>
    set(state => ({wishlist: state.wishlist.concat(planet)})),
  clear: () => set(() => ({wishlist: []})),
});

export default createWishlistSlice;
