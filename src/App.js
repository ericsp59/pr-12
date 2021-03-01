import './App.css';
import HeaderContainer from '../src/components/Header/HeaderContainer';
import BodyContainer from '../src/components/Body/BodyContainer';

function App() {
  return (
    <div className={`${`container`}`}>
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <HeaderContainer/>
        </div>
      </div>

      <div className={'row'}>
        <div className={'col-sm-12'}>
          <div>
            <BodyContainer/>
          </div>
        </div>
      </div>

      <div className={'row'}>
        <div className={'col-sm-12'}>
          <footer>
            <h3>footer</h3>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
