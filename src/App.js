import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // ユーザの状態(ログイン,ログアウト,別ユーザになったなど)を検知して実行される
    // この関数はFirebaseとのコネクションを貼って通信している
    // ユーザの状態(ログイン/ログアウト/ユーザ情報の変更)が起こった場合には、Firebase側からメッセージが送られてくる
    // この関数はFirebaseとのコネクションを貼って通信しているので、必要なくなったタイミングでクローズしてあげる必要がある(そうしないとメモリリークが発生する)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    // 2回目呼び出されたら自動的にコネクションをクローズする？
    // 以下参照) なんかよくわからんがhookになっているらしい。。。
    // https://stackoverflow.com/questions/38038343/how-to-remove-the-new-firebase-onauthstatechanged-listener-in-react?rq=1
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* こうすることでHeaderは必ず毎回レンダリングされる */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
}

export default App;
