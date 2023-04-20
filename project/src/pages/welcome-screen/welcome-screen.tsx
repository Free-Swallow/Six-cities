import CardList from '../../components/card-list/card-list';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Hotels} from '../../types/hotels';
import {getHotels, SortType} from '../../utils/hotels';

type WelcomeScreenProps = {
  hotels: Hotels;
};

const locationList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const sortList = Object.entries(SortType);

function WelcomeScreen(props: WelcomeScreenProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState(locationList[0]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [sortBy, setSortBy] = useState(SortType.POPULAR);

  const hotels = getHotels(props.hotels, currentCity, sortBy);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <Navigation />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">

              {locationList.map((item) => <li key={item} className="locations__item"><Link onClick={() => {setCurrentCity(item); setSortBy(SortType.POPULAR);}} className={`locations__item-link tabs__item ${currentCity === item ? 'tabs__item--active' : ''}`} to="/"><span>{item}</span></Link></li>)}

            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{hotels.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpenFilter(!isOpenFilter)}>
                  {sortBy}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>

                {isOpenFilter ? <ul className="places__options places__options--custom places__options--opened">{sortList.map((item) => <li key={item[1]} onClick={() => {setSortBy(item[1]); setIsOpenFilter(!isOpenFilter);}} className="places__option" tabIndex={0}>{item[1]}</li>)}</ul> : ''}

              </form>

              <CardList hotels={hotels}/>

            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default WelcomeScreen;
