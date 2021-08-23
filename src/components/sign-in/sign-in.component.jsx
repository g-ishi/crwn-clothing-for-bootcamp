import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        // デフォルトのsubmitする動作を発生させないようにする
        event.preventDefault();

        const { email, password } = this.state;

        // ログイン処理を行う
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
            })

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        // 今回の使い方では、event.targetにはinputタグの情報が入っているので、
        // そこからname属性とvalue属性を取得している
        const { name, value } = event.target;

        // この書き方でオブジェクトのキー名に変数を使うことができる(ES5以降)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        {/* コンポーネントに渡す引数で値を指定しなかった場合は、デフォルトでTrueとして渡される */}
                        {/* formタグ内のボタン要素はデフォルトでtype="submit"として扱われるが、このボタンはsubmitボタンにしたくないので、明示的にtype="button"を設定しておく */}
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;