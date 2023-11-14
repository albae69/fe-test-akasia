import {useEffect, useState} from 'react';

import useBoundStore from '@store';
import {wait} from '@utils';

const useWishlist = () => {
  const {wishlist, clear} = useBoundStore(state => state);

  const [status, setStatus] = useState<'loading' | ''>('loading');

  useEffect(() => {
    (async () => {
      await wait(1000);
      setStatus('');
    })();
  }, []);

  return {wishlist, status, clear};
};

export default useWishlist;
