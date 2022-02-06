import React, {Component} from 'react';


class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            errors:{
                username: "",
                password: "",
                email: "",
            },
        };
    }
    changeHandler=(e)=>{
        let name =e.target.name;
        let value =e.target.value;
        let errors =this.state.errors;

        switch (name){
            case "username":
                errors.username= value.length<6 ? "Username must be 6 character": "";
                break;
            
            case "email":
                errors.email= value.length<6 ? "Email must be 6 character": "";

                let apos =value.indexOf('@');
                let dotpos =value.lastIndexOf('.');

                if(apos<1 || dotpos-apos<2){
                    errors.email="Please enter valid email id";
                }
                break;
                case "password":
                    errors.password= value.length<8 ? "Password must be 8 character": "";
                    break;
            default:
                break;
        }
        this.setState({errors, [name]: value});

    };
submitHandler=(e)=>{
    e.preventDefault();

    if(this.state.errors.username.length === 0 && this.state.errors.password.length === 0 && this.state.errors.email.length === 0){
        alert("Form is valid");
    }else{
        alert("Form is invalid");
    }
}

  render(){
      const{errors}=this.state;
  return (
      <div className='main_container'>
        <h1>Login Form</h1>
        <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="Enter your Username" name="username" onChange={this.changeHandler}/>
            <p>{errors.username}</p>
            
            <input type="text" placeholder="Enter your Email" name="email" onChange={this.changeHandler}/>
            <p>{errors.email}</p>

            <input type="text" placeholder="Enter your Password" name="password" onChange={this.changeHandler}/>
            <p>{errors.password}</p>

            <input type="submit" value="Login"/>
        </form>
      </div>
  );
}
}

export default Card;