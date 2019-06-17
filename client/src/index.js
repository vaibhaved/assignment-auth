import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard'

class Client extends React.Component {
	constructor(props) {
		super(props);
		this.state = {		
			register: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				errors: {},
			},
			login: {
				email: "",
				password: "",
				errors: {},
			}
		}
	}

	onChangeLogin = e => {
		const name = e.target.name;
		var login = {...this.state.login};
		login[name] = e.target.value;
		this.setState({login});
	}

	onChangeRegister = e => {
		const name = e.target.name;
		var register = {...this.state.register};
		register[name] = e.target.value;
		this.setState({register});
	}

	onSubmitRegister = e => {
		e.preventDefault();
		const newUser = {
			firstName: this.state.register.firstName,
			lastName: this.state.register.lastName,
			email: this.state.register.email,
			password: this.state.register.password,
		};

		var port = process.env.PORT;
		console.log(port);
		fetch('/api/users/register' , {
      		method: "POST",
      		headers: {
        		'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
		.then(result => (result.json()
			.then(result2 => {
				let updatedregisterErrors = Object.assign({}, this.state.register, {errors: result2})
				this.setState({register:updatedregisterErrors})
				if(result.status === 200) {
					ReactDOM.render(<Dashboard />, document.getElementById('root'))
				}
			})
		))
	}

	onSubmitLogin = e => {
		e.preventDefault();
		const existingUser = {
			email: this.state.login.email,
			password: this.state.login.password,
		};

		fetch('/api/users/login' , {
      		method: "POST",
      		headers: {
        		'Content-Type': 'application/json'
			},
			body: JSON.stringify(existingUser)
		})
		.then(result => (result.json()
			.then(result2 => {
				let updatedloginErrors = Object.assign({}, this.state.login, {errors: result2})
				this.setState({login:updatedloginErrors})
				if(result.status === 200) {
					ReactDOM.render(<Dashboard />, document.getElementById('root'))
				}
			})
		))
	}

    componentWillMount() {
        const script0 = document.createElement("script");
        script0.src="js/classie.js";
        script0.async=true;

        document.head.appendChild(script0);
    }

    componentDidMount() {
        const script1 = document.createElement("script");
        script1.src="js/classie.js";
        script1.async=true;

        const script2 = document.createElement("script");
        script2.src="js/hammer.min.js";
        script2.async=true;

        const script3 = document.createElement("script");
        script3.src="js/main.js";
        script3.async=true;

        document.body.appendChild(script1);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
    }

    render() {
		const loginErrors = this.state.login.errors;
		const registerErrors = this.state.register.errors;
        return (
		    <div id="vs-container" className="vs-container">
			    <header className="vs-header">
			        <ul className="vs-nav">
			            <li><a href="#section-1">Login</a></li>
			            <li><a href="#section-2">Sign Up</a></li>
				        <li><a href="#section-3">Login</a></li>
					    <li><a href="#section-4">Sign Up</a></li>
				    </ul>
			    </header>
			    <div className="vs-wrapper">
		            <section id="section-1">
			            <div className="vs-content">
				            <div className="box">
							    <div className="childBox1">
							        <h1>LOGIN</h1>
						            <div id="col">
							            <form className="loginForm" encType="application/json" autoComplete="off" onSubmit={this.onSubmitLogin} method="post">
								            <div className="row">
									            <div className="column">
									    	        <i className="far fa-user"></i>&nbsp;
									    		    <input name="email" autoComplete="off" className="theInputs" type="email" placeholder="Email" required onChange={this.onChangeLogin} error={loginErrors.email} />
								    		    </div>
							    			    <div className="column">
							    				    <i className="fas fa-unlock-alt"></i>&nbsp;
						    					    <input name="password" autoComplete="off" className="theInputs" type="password" placeholder="Password" required onChange={this.onChangeLogin} error={loginErrors.password} />
					    					    </div>
												<div className="column" style={{lineHeight: "1.0"}}>
													<span style={{fontSize: "14px", fontWeight: "bold"}}>
														{loginErrors.email}{loginErrors.emailnotfound}{loginErrors.passwordincorrect}
													</span>
												</div>
				    					        <div className="column">
			    							        <input className="signinButton" type="submit" value="SIGN IN" />
		    							        </div>
								            </div>
							            </form>
							        </div>
						        </div>
						        <div className="childBox2">
						            <img src="./images/bg.jpg" alt="Background" />
							        <div></div>
						        </div>
					        </div>
				        </div>
			        </section>
			        <section id="section-2">
				        <div className="vs-content">
					        <div className="box">
					            <div className="childBox1">
						            <h1>SIGN UP</h1>
						            <div id="col">
								        <form className="signupForm" autoComplete="off" encType="application/json" onSubmit={this.onSubmitRegister} method="post">
									        <div className="row">
										        <div className="columnSignUp">
											        <i className="fas fa-font"></i>&nbsp;
										            <input name="firstName" autoComplete="off" className="theInputs" type="text" placeholder="First Name" required onChange={this.onChangeRegister} error={registerErrors.firstName} />
									            </div>
									            <div className="columnSignUp">
    										        <i className="far fa-user"></i>&nbsp;
	    									        <input name="lastName" autoComplete="off" className="theInputs" type="text" placeholder="Last Name" required onChange={this.onChangeRegister} error={registerErrors.lastName} />
										        </div>
						    				    <div className="columnSignUp">
								    			    <i className="fas fa-at"></i>&nbsp;
									    		    <input name="email" autoComplete="off" className="theInputs" type="email" placeholder="Email" required onChange={this.onChangeRegister} error={registerErrors.email} />
									    	    </div>
										        <div className="columnSignUp">
										            <i className="fas fa-unlock-alt"></i>&nbsp;
										            <input name="password" autoComplete="off" className="theInputs" type="password" placeholder="Password" required onChange={this.onChangeRegister} error={registerErrors.password} />
									            </div>
												<div className="columnSignUp" style={{lineHeight: "1.0"}}>
													<span style={{fontSize: "14px", fontWeight: "bold"}}>
														{registerErrors.email}{registerErrors.password}
													</span>
												</div>
									            <div className="columnSignUp">
										            <input className="signupButton" type="submit" value="SIGN UP" />
									            </div>
								            </div>
							            </form>
							        </div>
						        </div>
							    <div className="childBox2">
							        <img src="./images/bg.jpg" alt="Background"/>
							        <div></div>
						        </div>
					        </div>
				        </div>
			        </section>
			        <section id="section-3">
					<div className="vs-content">
				            <div className="box">
							    <div className="childBox1">
							        <h1>LOGIN</h1>
						            <div id="col">
							            <form className="loginForm" encType="application/json" autoComplete="off" onSubmit={this.onSubmitLogin} method="post" action="http://localhost:4000/api/users/login">
								            <div className="row">
									            <div className="column">
									    	        <i className="far fa-user"></i>&nbsp;
									    		    <input name="email" autoComplete="off" className="theInputs" type="email" placeholder="Email" required onChange={this.onChangeLogin} error={loginErrors.email} />
								    		    </div>
							    			    <div className="column">
							    				    <i className="fas fa-unlock-alt"></i>&nbsp;
						    					    <input name="password" autoComplete="off" className="theInputs" type="password" placeholder="Password" required onChange={this.onChangeLogin} error={loginErrors.password} />
					    					    </div>
												<div className="column" style={{lineHeight: "1.0"}}>
													<span style={{fontSize: "14px", fontWeight: "bold"}}>
														{loginErrors.email}{loginErrors.emailnotfound}{loginErrors.passwordincorrect}
													</span>
												</div>
				    					        <div className="column">
			    							        <input className="signinButton" type="submit" value="SIGN IN" />
		    							        </div>
								            </div>
							            </form>
							        </div>
						        </div>
						        <div className="childBox2">
						            <img src="./images/bg.jpg" alt="Background" />
							        <div></div>
						        </div>
					        </div>
				        </div>
			        </section>
			        <section id="section-4">
					<div className="vs-content">
					        <div className="box">
					            <div className="childBox1">
						            <h1>SIGN UP</h1>
						            <div id="col">
								        <form className="signupForm" autoComplete="off" encType="application/json" onSubmit={this.onSubmitRegister} method="post" action="http://localhost:4000/api/users/register">
									        <div className="row">
										        <div className="columnSignUp">
											        <i className="fas fa-font"></i>&nbsp;
										            <input name="firstName" autoComplete="off" className="theInputs" type="text" placeholder="First Name" required onChange={this.onChangeRegister} error={registerErrors.firstName} />
									            </div>
									            <div className="columnSignUp">
    										        <i className="far fa-user"></i>&nbsp;
	    									        <input name="lastName" autoComplete="off" className="theInputs" type="text" placeholder="Last Name" required onChange={this.onChangeRegister} error={registerErrors.lastName} />
										        </div>
						    				    <div className="columnSignUp">
								    			    <i className="fas fa-at"></i>&nbsp;
									    		    <input name="email" autoComplete="off" className="theInputs" type="email" placeholder="Email" required onChange={this.onChangeRegister} error={registerErrors.email} />
									    	    </div>
										        <div className="columnSignUp">
										            <i className="fas fa-unlock-alt"></i>&nbsp;
										            <input name="password" autoComplete="off" className="theInputs" type="password" placeholder="Password" required onChange={this.onChangeRegister} error={registerErrors.password} />
									            </div>
												<div className="columnSignUp" style={{lineHeight: "1.0"}}>
													<span style={{fontSize: "14px", fontWeight: "bold"}}>
														{registerErrors.email}{registerErrors.password}
													</span>
												</div>
									            <div className="columnSignUp">
										            <input className="signupButton" type="submit" value="SIGN UP" />
									            </div>
								            </div>
							            </form>
							        </div>
						        </div>
							    <div className="childBox2">
							        <img src="./images/bg.jpg" alt="Background"/>
							        <div></div>
						        </div>
					        </div>
				        </div>
			        </section>
		        </div>
	        </div>
        )
    }
}

ReactDOM.render(<Client />, document.getElementById("root"));