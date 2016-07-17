var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Activities = require('../components/Activities');
var Relationship = require('../components/Relationship');
// var PromptContainer = require('../containers/PromptContainer');

var routes = (
	<Router history={hashHistory}> 
		<Route path='/' component={Main}>
			<IndexRoute component={Activities}/>
			<Route path='moneyFlows' header='Money Flows' component={Relationship} />
			{/*<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
			<Route path='battle' component={ConfirmBattleContainer} />*/}
		</Route>
	</Router>
);

module.exports  = routes;