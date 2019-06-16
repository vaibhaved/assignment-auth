import React from 'react';
import ReactDOM from 'react-dom';

class Client extends React.Component {

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
							            <form className="loginForm" autoComplete="off">
								            <div className="row">
									            <div className="column">
									    	        <i className="far fa-user"></i>&nbsp;
									    		    <input autoComplete="off" className="theInputs" type="text" placeholder="Username" required />
								    		    </div>
							    			    <div className="column">
							    				    <i className="fas fa-unlock-alt"></i>&nbsp;
						    					    <input autoComplete="off" className="theInputs" type="password" placeholder="Password" required />
					    					    </div>
				    					        <div className="column">
			    							        <input className="signinButton" type="button" value="SIGN IN" />
		    							        </div>
	    								        <div className="column">
    										        <input className="forgotPassword" type="button" value="Forgot Password?"/>
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
								        <form className="signupForm"autoComplete="off">
									        <div className="row">
										        <div className="columnSignUp">
											        <i className="fas fa-font"></i>&nbsp;
										            <input autoComplete="off" className="theInputs" type="text" placeholder="First Name" required />
									            </div>
									            <div className="columnSignUp">
    										        <i className="fas fa-i-cursor"></i>&nbsp;
	    									        <input autoComplete="off" className="theInputs" type="text" placeholder="Last Name" required />
										        </div>
		    							        <div className="columnSignUp">
											        <i className="far fa-user"></i>&nbsp;
				    							    <input autoComplete="off" className="theInputs" type="text" placeholder="Username" required />
					    					    </div>
						    				    <div className="columnSignUp">
								    			    <i className="fas fa-at"></i>&nbsp;
									    		    <input autoComplete="off" className="theInputs" type="email" placeholder="Email" required />
									    	    </div>
										        <div className="columnSignUp">
										            <i className="fas fa-unlock-alt"></i>&nbsp;
										            <input autoComplete="off" className="theInputs" type="password" placeholder="Password" required />
									            </div>
									            <div className="columnSignUp">
										            <input className="signupButton" type="button" value="SIGN UP" />
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
				        </div>
			        </section>
			        <section id="section-4">
				        <div className="vs-content">
				        </div>
			        </section>
		        </div>
	        </div>
        )
    }
}

ReactDOM.render(<Client />, document.getElementById("root"));