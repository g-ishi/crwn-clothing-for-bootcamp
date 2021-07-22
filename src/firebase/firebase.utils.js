// firebase全体はかなり大きなライブラリなので、必要なモジュールのみをimportするようにしている
import firebase from 'firebase/app';

// その中でも特に必要なモジュールのimportを実施
// これらは上記でimportしたfirebaseモジュールに自動的にアタッチさせる
// 以下のimportにより、firebase.auth()とfirebase.firestore()にアクセスすることができるようになる
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDZ9-M59eUUBH2OGypYUlOA7XKKyEhFHuQ",
    authDomain: "crwn-db-2f172.firebaseapp.com",
    projectId: "crwn-db-2f172",
    storageBucket: "crwn-db-2f172.appspot.com",
    messagingSenderId: "721247697592",
    appId: "1:721247697592:web:fb49fae0fc89c64e90524d",
    measurementId: "G-PFQVZ1KBWR"
};

// firebaseアプリの初期化
// 多分これでFirebaseプロジェクトとの通信ややりとりを行う準備をしているイメージ
firebase.initializeApp(config);

// 他のコードベースで使うところのためにexportしておく
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// 認証プロバイダの情報を設定する(今回はgoogleのを使っているが、他にもtwitterやfacebookなどのも使える)
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// 認証ポップアップを出す関数を設定する
// 認証プロバイダにはgoogleを設定している
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// firebaseライブラリ全体を使いたい場合ようにエクスポートしておく。
// (import { firebase } from ~~とかでも良さそうだけど...?)
export default firebase;
