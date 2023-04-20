import {Hotels} from '../types/hotels';

const SortType = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

const SortMethod = {
  [SortType.POPULAR]: (hotels: Hotels) => hotels.filter((hotel) => hotel !== null),
  [SortType.LOW_TO_HIGH]: (hotels: Hotels) => hotels.sort((a, b) => a.price - b.price),
  [SortType.HIGH_TO_LOW]: (hotels: Hotels) => hotels.sort((a, b) => b.price - a.price),
  [SortType.TOP_RATED]: (hotels: Hotels) => hotels.sort((a, b) => b.rating - a.rating),
};

const getHotels = (hotels: Hotels, city: string, sortType: string) => {
  const filteredHotels = hotels.filter((hotel) => hotel.city.name === city);
  const sortedHotels = SortMethod[sortType](filteredHotels);

  return sortedHotels;
};

export {getHotels, SortType};
