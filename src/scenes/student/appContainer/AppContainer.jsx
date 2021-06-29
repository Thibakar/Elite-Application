import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/shared/header/studentHeader";
import LeftMenu from "../../../components/leftMenu/leftMenu";
import Footer from "../../../components/shared/footer/fixedFooter";
import "./dashboard.scss";

export default function AppContainer(props) {
  return (
    <div>
      <Header />
      <div className="flex student-container">
        <LeftMenu />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

AppContainer.propTypes = { children: PropTypes.node.isRequired };
