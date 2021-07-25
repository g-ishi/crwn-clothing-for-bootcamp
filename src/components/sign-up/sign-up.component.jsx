import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        // パスワードが一致するかをチェックする　一致しない場合は処理終了
        if (password !== confirmPassword) {
            alert("passwords don't match.");
            return;
        }

        // firebaseへのユーザ登録を行う
        try {
            // firebaseへのユーザ作成
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // 作成したユーザをFireStoneに格納する
            await createUserProfileDocument(user, { displayName });

            // ユーザの入力を空に戻す
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account.</h2>
                <span>Sign up with your email and password.</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="ConfirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
