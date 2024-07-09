import { rateBeer } from './beerService';

export const addRating = (beerId, rating) => {
  rateBeer(beerId, rating);
};
