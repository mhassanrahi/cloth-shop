import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

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

// Redux

import {setCurrentUser} from './redux/'

class App extends React.Component{

  // const [currentUser, setCurrentUser] = useState({});

  // useEffect (() => {
  //   const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
  //     if (userAuth) {
  //             const userRef = await createUserProfileDocument(userAuth);
      
  //             userRef.onSnapshot(snapShot => {
  //                 setCurrentUser ({
  //                   id: snapShot.id,
  //                   ...snapShot.data()
  //                 })
  //             })
  //           } else {
  //             setCurrentUser(userAuth);
  //           }
  //   })

  //     return function cleanup() {
  //       unsubscribeFromAuth()
  //     };
  // }, [currentUser])


  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} =  this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })

        
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
  return (
    <div className="container">
    {/* Header */}
    <Header/>
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps) (App);
