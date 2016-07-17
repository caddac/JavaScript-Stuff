var React = require('react');

var Relationship = React.createClass({
	render: function(){
		console.log(this.props);
		return(
			<div > 
			{this.props.testMessage}
			</div>
		);
	}
});

module.exports = Relationship;