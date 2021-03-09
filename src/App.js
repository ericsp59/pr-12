import  s from './App.module.css';
import HeaderContainer from '../src/components/Header/HeaderContainer';
import ProfileContainer from '../src/components/Profile/ProfileContainer';
import FriendsContainer from '../src/components/Friends/FriendsContainer';
import WallContainer from '../src/components/Wall/WallContainer';
import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, withRouter, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import  {store} from './redux/redux-store'
import {Provider} from 'react-redux'
// import {Provider} from 'react-redux'


function App() {
  return (
    <div className={`${`container`}`}>
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <HeaderContainer/>
        </div>
      </div>

      <div className={'row'}>
        <div className={'col-sm-2'}>
          <Nav/>
        </div>
        <div className={`col-sm-10`}>
          <div className={s.body}>
            <Switch>
              {/* <Route exact path='/' render={() => (<ProfileContainer/>)}/> */}
              <Route exact path='/Profile' render={() => (<ProfileContainer/>)}/>
              <Route exact path='/friends' render={() => (<FriendsContainer/>)}/>
              <Route exact path='/wall' render={() => (<WallContainer/>)}/>
              <Route path='*' render={() => <div>404 NOT </div>}/>
            </Switch>
          </div>

        </div>
      </div>

      <div className={'row'}>
        <div className={'col-sm-12'}>
          {/* <footer>
            <h3>footer</h3>
          </footer> */}
        </div>
      </div>
    </div>
  );
}

const AppContainer = compose (
  withRouter, 
  )(App);

const MainApp = () => {
  return <BrowserRouter>
          <Provider store={store}>
            <AppContainer/>
          </Provider>
         </BrowserRouter>
}

export default MainApp;
