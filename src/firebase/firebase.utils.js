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

// ユーザがusersコレクションに存在するかどうかを確認し、存在しない場合はusersコレクションに引数のユーザドキュメントを追加する
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // ユーザがログインしていない場合には処理を終了する
    if (!userAuth) return;

    // ログインユーザのドキュメントを取得する(その場所のリファレンス)
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    // 実際のデータを取得する
    const snapShot = await userRef.get();

    // ログインユーザがusersコレクションに存在しない場合は、データを登録する
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            // キー名に変数名、バリューに変数の値を使うオブジェクトの場合は以下のように省略記法が使える。
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }

    }

    return userRef;
}





// 認証プロバイダの情報を設定する(今回はgoogleのを使っているが、他にもtwitterやfacebookなどのも使える)
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// 認証ポップアップを出す関数を設定する
// 認証プロバイダにはgoogleを設定している
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// firebaseライブラリ全体を使いたい場合ようにエクスポートしておく。
// (import { firebase } from ~~とかでも良さそうだけど...?)
export default firebase;
