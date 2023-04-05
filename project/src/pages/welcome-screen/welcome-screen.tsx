import PlacesOptionsList from '../../components/places-options-list/places-options-list';
import PlaceCard from '../../components/place-card/place-card';

// type WeclomeScreenProps = {
//   dodo: string;
// };

const locationList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const isOpenOptionsList = false;

function WelcomeScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {locationList.map((item) => <li key={item} className="locations__item"><a className="locations__item-link tabs__item" href="/"><span>{item}</span></a></li>)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              {isOpenOptionsList ? <PlacesOptionsList /> : ''}
            </form>
            <div className="cities__places-list places__list tabs__content">
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WelcomeScreen;
