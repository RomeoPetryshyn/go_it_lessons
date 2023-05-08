import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import initialState from "..//initialState";

class RegisterForm extends Component {

    static defaultProps = {
        onSubmit: () => {}
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {...initialState}

    emailId = nanoid();
    passwordId = nanoid();
    repeatPasswordId = nanoid();

    handleChange = ({target}) => {
        const {value, name} = target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    render(){
        const {handleSubmit, handleChange, emailId, passwordId, reapeatPasswordId} = this;
        const {email, password, repeatPassword} = this.state; 

        return (
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor={emailId}>Emai;</label>
                    <input id={emailId} value={email} name="title" onChange={handleChange} type="text" className={styles.field} placeholder="Введите email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={passwordId}>Пароль</label>
                    <input id={passwordId} value={password} name="author" onChange={handleChange} type="password" className={styles.field} placeholder="Введите пароль" required />
                </div>    
                <div className={styles.formGroup}>
                    <label htmlFor={reapeatPasswordId}>Повторите пароль</label>
                    <input id={reapeatPasswordId} value={repeatPassword} name="author" onChange={handleChange} type="password" className={styles.field} placeholder="Повторите пароль" required />
                </div>                 
            </form>
        )
    }
}

export default RegisterForm;