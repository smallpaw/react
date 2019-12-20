import React, { Component, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";

const Feed = React.lazy(() => import(/* webpackChunkName: "feed" */ "./feed"));
// const Community = React.lazy(() =>
// 	import(/* webpackChunkName: "community" */ "./community")
// );
const Profile = React.lazy(() =>
	import(/* webpackChunkName: "user" */ "./user/profile")
);
// const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
// const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
	import(/* webpackChunkName: "blank-page" */ "./blank-page")
);

class SmallPaw extends Component {
	render() {
		const { match } = this.props;

		return (
			<AppLayout>
				<div className="dashboard-wrapper">
					<Suspense fallback={<div className="loading" />}>
						<Switch>
							<Redirect
								exact
								from={`${match.url}/`}
								to={`${match.url}/feed`}
							/>
							<Route
								path={`${match.url}/feed`}
								render={props => <Feed {...props} />}
							/>
							<Route
								path={`${match.url}/profile`}
								render={props => <Profile {...props} />}
							/>
							{/* <Route
								path={`${match.url}/community`}
								render={props => <Community {...props} />}
							/>
							<Route
								path={`${match.url}/user`}
								render={props => <User {...props} />}
							/> */}
							{/* <Route
								path={`${match.url}/ui`}
								render={props => <Ui {...props} />}
							/>
							<Route
								path={`${match.url}/menu`}
								render={props => <Menu {...props} />}
							/> */}
							<Route
								path={`${match.url}/blank-page`}
								render={props => <BlankPage {...props} />}
							/>
							<Redirect to="/error" />
						</Switch>
					</Suspense>
				</div>
			</AppLayout>
		);
	}
}
const mapStateToProps = ({ menu }) => {
	const { containerClassnames } = menu;
	return { containerClassnames };
};

export default withRouter(
	connect(
		mapStateToProps,
		{}
	)(SmallPaw)
);
