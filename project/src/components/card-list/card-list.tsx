import {Hotels} from '../../types/hotels';
import PlaceCard from '../place-card/place-card';

type CardListProps = {
  hotels: Hotels;
};

function CardList(props: CardListProps):JSX.Element {
  const {hotels} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} />)}
    </div>
  );
}

export default CardList;
