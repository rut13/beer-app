import { rateBeer } from './beerService';

export const addRatingToTheBeerSoTheUserKnowsIfItsGoodForNextTime = (beerId, rating) => {
  rateBeer(beerId, rating);
};
