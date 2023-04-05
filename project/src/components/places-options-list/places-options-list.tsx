// type PlacesOptionsListType = {
//   activeOptions: string;
// };

const optionsList = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function PlacesOptionsList(): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {optionsList.map((item) => <li key={item} className="places__option" tabIndex={0}>{item}</li>)}
    </ul>
  );
}

export default PlacesOptionsList;
