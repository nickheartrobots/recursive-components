import React, { Component } from 'react';
import Header from './Components/Header';
import RecursiveBracket from './Components/RecursiveBracket';

// NCAA Midwest Regional 2018
const data = [
    "Kansas",
    "Penn",
    "Seton Hall",
    "NC State",
    "Clemson",
    "New Mexico State",
    "Auburn",
    "College of Charleston",
    "TCU",
    "Syracuse",
    "Michigan State",
    "Bucknell",
    "Rhode Island",
    "Oklahoma",
    "Duke",
    "Iona"
];

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<RecursiveBracket teams={data}/>
			</div>
		);
	}
}

export default App;