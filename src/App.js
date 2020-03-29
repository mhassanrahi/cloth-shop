import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

// components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

//pages
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SignAndUpPage from './pages/sign-in-and-up-page/sign-in-and-up.component'

//Firebase Utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect (() => {
  //   const unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
  //     setCurrentUser(user)
  //     createUserProfileDocument(user)
  //   })

  //     return function cleanup() {
  //       unsubscribeFromAuth()
  //     };
  // }, [currentUser])

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({currentUser: user})
      createUserProfileDocument(user)
      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
  return (
    <div className="container">
    {/* Header */}
    <Header currentUser={this.state.currentUser}/>
    {/* Content */}
      <div className="content">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignAndUpPage} />
        </Switch>
      </div>
        
    {/* footer */}
      <Footer/>
      
    </div>
    
  );
  }
}

export default App;
