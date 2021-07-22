import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        // デフォルトのsubmitする動作を発生させないようにする
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        })

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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;