import React, { Component } from 'react';

/*
 * Create component.
 */

class AccountData extends Component {
	constructor(props) {
		super(props);	

		// Get the units to display.
		this.units = this.props.units ? this.props.units.charAt(0).toUpperCase() + this.props.units.slice(1) : 'Wei';

		this.address = this.props.drizzleState.accounts[this.props.accountIndex];
		this.state = { balance: null };
	}

	componentDidMount() {
		const balance = this.props.drizzleState.accountBalances[this.address];
		this.setState({ balance });
	}

	render() {
		if (this.props.displayFunc) {
			return this.props.displayFunc(this.address, this.state.balance, this.units); 
		}

		return (
			<div>
				<h4>{this.address}</h4>
				<p>{this.state.balance} {this.units}</p>
			</div>
		);
	}
	
	precisionRound(number, precision) {
		var factor = Math.pow(10, precision);
		return Math.round(number * factor) / factor;
	}
}

export default AccountData;
