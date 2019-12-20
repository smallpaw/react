import React, { Component, Fragment } from "react";
import {
	Row,
	Card,
	CardBody,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
	TabContent,
	TabPane,
	Badge,
	CardTitle
} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import GalleryDetail from "../../../containers/pages/GalleryDetail";
import GalleryProfile from "../../../containers/pages/GalleryProfile";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Colxx } from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import SingleLightbox from "../../../components/pages/SingleLightbox";
import { injectIntl } from "react-intl";
import whotoFollowData from "../../../data/follow";
import UserFollow from "../../../components/common/UserFollow";
import UserCardBasic from "../../../components/cards/UserCardBasic";
import recentPostsData from "../../../data/recentposts";
import RecentPost from "../../../components/common/RecentPost";
import posts from "../../../data/posts";
import Post from "../../../components/cards/Post";

class Feed extends Component {
	constructor(props) {
		super(props);

		this.toggleTab = this.toggleTab.bind(this);
		this.state = {
			activeTab: "1"
		};
		this.friendsData = whotoFollowData.slice();
		this.followData = whotoFollowData.slice(0, 5);
	}

	toggleTab(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		return (
			<Fragment>
				<Row>
					<Colxx xxs="12">
						<Row style={{ justifyContent: "center" }}>
							<Colxx xxs="12" lg="6" xl="5">
								{posts.map(itemData => {
									return (
										<Post
											data={itemData}
											key={itemData.key}
											className="mb-4"
										/>
									);
								})}
							</Colxx>
						</Row>
					</Colxx>
				</Row>
			</Fragment>
		);
	}
}
export default injectIntl(Feed);
