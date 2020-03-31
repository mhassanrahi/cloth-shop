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

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        })

        
      } else {
        this.setState({currentUser: userAuth})
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
