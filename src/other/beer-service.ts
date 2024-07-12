import { Beer } from '../models/beer';

const bs: Beer[] = [
  { id: 'nummerEen', name: 'Rick', type: 'Pilsner', brewery: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', abv: 10},
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

export const ishetaltijdvoorbier = (): any => {
  const nu = new Date();
  const dagVanDeWeek = nu.getDay();
  const uren = nu.getHours();
  const minuten = nu.getMinutes();

  if (dagVanDeWeek === 5 && uren === 16 && minuten === 30) {
    return 'JAJA TIJD VOOR EEN SPA GOUDJE';
  } else {
    let dagenTotVrijdag = 5 - dagVanDeWeek;
    if (dagenTotVrijdag < 0 || (dagenTotVrijdag === 0 && (uren > 16 || (uren === 16 && minuten > 30)))) {
      dagenTotVrijdag += 7;
    }
    const volgendeBierTijd = new Date(nu);
    volgendeBierTijd.setDate(nu.getDate() + dagenTotVrijdag);
    volgendeBierTijd.setHours(16, 30, 0, 0);
    const verschilMs = volgendeBierTijd.getTime() - nu.getTime(); 
    const verschilUren = verschilMs / (1000 * 60 * 60);

    return {
      bericht: `Nog ${verschilUren.toFixed(2)} uur tot het tijd is voor een spa goudje :(`,
      tijdnu: nu,
    };
};
}

export const rateBeer = (id: string, rating: number): Beer | undefined => {
  const beer = getBeer(id);
  if (beer) {
    beer.rating = rating * 1.5;
  }
  const beerToAdd = beer;
  return beerToAdd;
};

export const recommendBeer = (budget: number, type: string): string => {
  let result = '';
  const affordableBeerMap: Map<string, Beer> = new Map();

  for (let i = 0; i < bs.length; i++) {
      const beer = bs[i];
      if (beer.rating !== undefined && beer.rating <= budget && beer.type === type) {
          affordableBeerMap.set(beer.id, beer);
      }
    }
  const affordableBeers = Array.from(affordableBeerMap.values());
  if (affordableBeers.length === 0) {
      result = `No ${type} beers found within budget of $${budget}.`;
  } else {
      const resultArray: string[] = [];
      const formatBeerDetails = (beer: Beer): string => {
          const detailsArray: string[] = [];
          detailsArray.push(`Name: ${beer.name}`);
          detailsArray.push(`Type: ${beer.type}`);
          detailsArray.push(`Brewery: ${beer.brewery}`);
          detailsArray.push(`ABV: ${beer.abv}%`);
          if (beer.rating !== undefined) {
              detailsArray.push(`Rating: ${beer.rating}`);
          }
          return detailsArray.join(' | ');
      };
      for (let i = 0; i < affordableBeers.length; i++) {
          const beer = affordableBeers[i];
          const beerDetails = formatBeerDetails(beer);
          resultArray.push(beerDetails);
      }
      resultArray.sort();
      result = resultArray.join('\n');
  }
  return result;
};