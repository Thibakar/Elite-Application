import React from "react";
import "./leftMenu.scss";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenuStatus: true,
    };
  }

  toggleSideNav = () => {
    this.setState({ leftMenuStatus: !this.state.leftMenuStatus });
  }

  render() {
    return (
      <>
        <div className="leftMenu">
          <div className={this.state.leftMenuStatus ? "active side-nav" : "side-nav"}>
            <div className="leftMenuToggle">
              {this.state.leftMenuStatus
                ? <i onClick={() => this.toggleSideNav()} className="fa fa-bars" aria-hidden="true" />
                : <i onClick={() => this.toggleSideNav()} className="fa fa-minus" aria-hidden="true" /> }
            </div>
            <ul className="LeftMenuList">
              <span className="menuHeader">COURSE MANAGEMENT</span>
              <li className="m-t-10 menuItem">
                <span className="menu-icon"><i className="fa fa-youtube-play" aria-hidden="true" /></span>
                <span className="menu-content">Home</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-comment" aria-hidden="true" /></span>
                <span className="menu-content">Live Class</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-user" aria-hidden="true" /></span>
                <span className="menu-content">My Class</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-shopping-bag" aria-hidden="true" /></span>
                <span className="menu-content">product management</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-truck" aria-hidden="true" /></span>
                <span className="menu-content">Course Detail</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-inr" aria-hidden="true" /></span>
                <span className="menu-content">payment management</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-male" aria-hidden="true" /></span>
                <span className="menu-content">Learning Analysis</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-users" aria-hidden="true" /></span>
                <span className="menu-content">Reference Material</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-cog" aria-hidden="true" /></span>
                <span className="menu-content">Free Feature</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-users" aria-hidden="true" /></span>
                <span className="menu-content">Doubt Claarification</span>
              </li>
              <li className="menuItem m-b-20">
                <span className="menu-icon"><i className="fa fa-chrome" aria-hidden="true" /></span>
                <span className="menu-content">Bookmark</span>
              </li>
              <span className="menuHeader">ACCOUNT</span>
              <li className="menuItem m-t-10">
                <span className="menu-icon"><i className="fa fa-tachometer" aria-hidden="true" /></span>
                <span className="menu-content">Profile</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                <span className="menu-content">Notification</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                <span className="menu-content">My Order</span>
              </li>
              <li className="menuItem">
                <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                <span className="menu-content">logout</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
