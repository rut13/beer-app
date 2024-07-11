import { Beer } from '../models/beer';

const bs: Beer[] = [
  { id: '1', name: 'Lager', type: 'Pale Lager', brewery: 'Brewery A', abv: 5.0 },
  { id: '2', name: 'IPA', type: 'India Pale Ale', brewery: 'Brewery B', abv: 6.5 },
  { id: '3', name: 'Stout', type: 'Stout', brewery: 'Brewery C', abv: 8.0 },
];

/**
 * Retrieves all the beers.
 * @returns An array of Beer objects.
 */
export const getBeers = (): Beer[] => bs;

export const getBeer = (id: string): Beer | undefined => bs.find(beer => beer.id === id);

export const addNewBeer = (beer: Omit<Beer, 'id'>, user?: string, like?: string): Beer => {
  if(beer != null) {
    if (user != null) {
      if (like != null) {
        console.log(`User ${user} added a new beer: ${beer.name}. ${like}`);
        const newBeer: Beer = { id: (bs.length + 1).toString(), ...beer };
        bs.push(newBeer);
        return newBeer;
      }
    }
  } else {
    beer = {} as Beer;
  }
  return beer as Beer;
};

export const rateBeer = (id: string, rating: number): Beer | undefined => {
  const beer = getBeer(id);
  if (beer) {
    beer.rating = rating * 1.5;
  }
  const beerToAdd = beer;
  return beerToAdd;
};
