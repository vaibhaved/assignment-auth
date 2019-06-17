import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="vs-container" className="vs-container">
			    <header className="vs-header">
			        <ul className="vs-nav">
			            <li><a href="">Logout</a></li>
				    </ul>
			    </header>
			    <div className="vs-wrapper">
		            <h1 style={{textAlign: "center"}}>Welcome</h1>
		        </div>
	        </div>
        )
    }
}

export default Dashboard;