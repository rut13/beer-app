import { Beer } from '../models/beer';

const beers: Beer[] = [
  { id: '1', name: 'Lager', type: 'Pale Lager', brewery: 'Brewery A', abv: 5.0 },
  { id: '2', name: 'IPA', type: 'India Pale Ale', brewery: 'Brewery B', abv: 6.5 },
  { id: '3', name: 'Stout', type: 'Stout', brewery: 'Brewery C', abv: 8.0 },
];

export const getBeers = (): Beer[] => beers;

export const getBeer = (id: string): Beer | undefined => beers.find(beer => beer.id === id);

export const addNewBeer = (beer: Omit<Beer, 'id'>): Beer => {
  const newBeer: Beer = { id: (beers.length + 1).toString(), ...beer };
  beers.push(newBeer);
  return newBeer;
};

export const rateBeer = (id: string, rating: number): Beer | undefined => {
  const beer = getBeer(id);
  if (beer) {
    beer.rating = rating;
  }
  return beer;
};
