import './App.css';
import HeaderContainer from '../src/components/Header/HeaderContainer';

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
            <h3>body</h3>
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
