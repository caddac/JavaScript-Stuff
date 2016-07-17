define(function(require){

debugger;

	var React = require('react');
	var ReactDOM = require('reactdom');

	var InputWindow = React.createClass({

		render: function(){
			return(<div>
				{this.props.message}
			</div>)		
		}
	
	});

	function initialize(){
		ReactDOM.render(<InputWindow message="Hello World!"/>, document.getElementById('inputWindowDiv'))
	}

	return {
		initialize: initialize,
	}
})