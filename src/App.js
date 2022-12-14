import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home'; 
import Login from './backend/Login';
import { auth } from './backend/firebase';
import Profile from './components/Profile';
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser); 
  console.log(user);
const dispatch = useDispatch();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      console.log(userAuth);
      dispatch(
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
    } else {
      dispatch(logout());
    }
  });

  return unsubscribe;
}, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ?(
          <Login/>
        ) : (
          <Switch>
          <Route path='/profile'>
              <Profile/>
          </Route>
            <Route path='/' >
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
