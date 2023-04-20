import {getRandomNumberInInterval, getRandomPositiveFloat} from '../utils/utils';

const getCity = () => {
  const cities = [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf'
  ];

  return cities[getRandomNumberInInterval(0, cities.length - 1)];
};

const getImage = () => {
  const imagesList = [
    'https://9.react.pages.academy/static/hotel/1.jpg',
    'https://9.react.pages.academy/static/hotel/2.jpg',
    'https://9.react.pages.academy/static/hotel/3.jpg',
    'https://9.react.pages.academy/static/hotel/4.jpg',
    'https://9.react.pages.academy/static/hotel/5.jpg',
    'https://9.react.pages.academy/static/hotel/6.jpg',
    'https://9.react.pages.academy/static/hotel/7.jpg',
    'https://9.react.pages.academy/static/hotel/8.jpg',
    'https://9.react.pages.academy/static/hotel/9.jpg',
    'https://9.react.pages.academy/static/hotel/10.jpg',
    'https://9.react.pages.academy/static/hotel/11.jpg',
    'https://9.react.pages.academy/static/hotel/12.jpg',
    'https://9.react.pages.academy/static/hotel/13.jpg',
    'https://9.react.pages.academy/static/hotel/14.jpg',
    'https://9.react.pages.academy/static/hotel/15.jpg',
    'https://9.react.pages.academy/static/hotel/16.jpg',
    'https://9.react.pages.academy/static/hotel/17.jpg',
    'https://9.react.pages.academy/static/hotel/18.jpg',
    'https://9.react.pages.academy/static/hotel/19.jpg',
  ];

  return imagesList[getRandomNumberInInterval(0, imagesList.length - 1)];
};

const getPlaceType = () => {
  const typesList = [
    'Apartment',
    'Room',
    'House',
    'Hotel',
  ];

  return typesList[getRandomNumberInInterval(0, typesList.length - 1)];
};

const getTitle = () => {
  const titlesList = [
    'Wood and stone place',
    'Waterfront with extraordinary view',
    'Canal View Prinsengracht',
    'Beautiful &amp; luxurious apartment at great location',
    'Nice, cozy, warm big bed apartment',
  ];

  return titlesList[getRandomNumberInInterval(0, titlesList.length - 1)];
};

const getGood = () => {
  const goodsList = [
    'Laptop friendly workspace',
    'Air conditioning',
    'Baby seat',
    'Breakfast',
    'Washer',
    'Wi-fi',
    'Heating',
    'Kitchen',
    'Cable tv'
  ];

  return goodsList[getRandomNumberInInterval(0, goodsList.length - 1)];
};

const getHostAvatar = () => {
  const hostAvatars = [
    'img/avatar-angelina.jpg',
    'img/avatar-max.jpg'
  ];

  return hostAvatars[getRandomNumberInInterval(0, hostAvatars.length - 1)];
};

const getHostName = () => {
  const hostsNames = [
    'Angelina',
    'Max'
  ];

  return hostsNames[getRandomNumberInInterval(0, hostsNames.length - 1)];
};

const createHotel = () => {
  let id = 1;

  return function () {
    const hotel = {
      city: {
        name: getCity(),
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      previewImage: getImage(),
      images: Array.from({length: 6}, getImage),
      title: getTitle(),
      isFavorite: Boolean(getRandomNumberInInterval(0, 1)),
      isPremium: Boolean(getRandomNumberInInterval(0, 1)),
      rating: getRandomPositiveFloat(2, 5, 1),
      type: getPlaceType(),
      bedrooms: getRandomNumberInInterval(0, 3),
      maxAdults: getRandomNumberInInterval(0, 4),
      price: getRandomNumberInInterval(100, 300),
      goods: Array.from({length: 4}, getGood),
      host: {
        id: getRandomNumberInInterval(1, 2),
        name: getHostName(),
        isPro: Boolean(getRandomNumberInInterval(0, 1)),
        avatarUrl: getHostAvatar()
      },
      description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
      location: {
        latitude: 53.528341000000005,
        longitude: 10.018654000000002,
        zoom: 16
      },
      id: id
    };

    id++;

    return hotel;
  };
};

const getHotel = createHotel();

const hotels = Array.from({length: 39}, getHotel);

export {hotels};
