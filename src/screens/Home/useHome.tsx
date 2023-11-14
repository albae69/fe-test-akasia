import {useEffect, useState} from 'react';

import {fetchPlanet} from '@services/planets';
import {PlanetsResponse} from 'types';

const useHome = () => {
  const [planets, setPlanets] = useState<PlanetsResponse | null>(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<'loading' | 'error' | ''>('');

  const init = async (n: number) => {
    if (status === 'loading') {
      return;
    }

    try {
      setStatus('loading');
      const response = await fetchPlanet(n);

      if (page > 1) {
        let temp = {...response};
        temp.results = planets?.results.concat(response.results)!;
        setPlanets(temp);
      } else {
        setPlanets(response);
      }

      setStatus('');
    } catch (error) {
      setStatus('error');
      console.log('error while init', error);
    }
  };

  const reload = () => init(1);

  useEffect(() => {
    init(page);
  }, [page]);

  return {planets, page, setPage, status, reload};
};

export default useHome;
