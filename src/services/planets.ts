import {PlanetsResponse} from 'types';
import {get} from './api';

const fetchPlanet = async (page: number): Promise<PlanetsResponse> => {
  const response = await get('planets', {page: page});
  return response.data;
};

export {fetchPlanet};
