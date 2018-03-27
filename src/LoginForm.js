import React from 'react';
import {FormErrors} from './FormErrors';
import Main from './component/main';

class LoginForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
        email: '',
        password: '',
        formErrors: { email: '', password: ''},       
        emailValid: false,
        passwordValid: false,
        formValid: false,
      }    
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  moveToDashboard=(event)=> {
    event.preventDefault();
        var email=localStorage.getItem('email');
        var password=localStorage.getItem('password');
        if(email===this.refs.email.value){
            if(email===this.refs.email.value){            
              this.props.history.push('/dashboard');
            }
        }else{
            console.log(email);
            console.log(this.refs.email.value);
            console.log("notmatched");
        }
        //localStorage.setItem('lastname',this.refs.lastname.value)
        //localStorage.setItem('email',this.refs.email.value)
        //localStorage.setItem('password',this.refs.password.value)
    
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render(){
    return(
     <React.Fragment>
        <div className="container">
          <div className="row">
           <div className="col-md-4 col-md-offset-4">
           <div className="center">           
               <Main/>
               </div> 
               <hr/>
           <h3>Login From</h3>
           <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
           </div>
           <form className ='loginForm' onSubmit={this.moveToDashboard}>
            
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
               <label htmlFor='email'>E-mail</label>
               <input type='email' className='form-control' ref='email' name='email' value={this.state.email} placeholder='Email' onChange={this.handleUserInput} required/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
               <label htmlFor='password'>Password</label>
               <input type="password" className='form-control' ref='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleUserInput} required/>
            </div>
            <div className='form-group'>
               <input type="submit" value="Login" className="btn btn-primary pull-right" disabled={!this.state.formValid} />
            </div>   
           </form>
           </div>
         </div>
        </div>
      </React.Fragment>
    )
}
}
export default LoginForm;