import React from "react";
import PropTypes from "prop-types";
import { LoadingAnimation } from "./LoadingAnimation";

export class Loader extends React.Component {
  closeModel = () => {
    // if (this.props.onClose != null) {
    //   this.props.onClose();
    // }
  };

  render() {
    return (
      <>
        {this.props.visible ? (
          <div className="eliteLoading">
            <div className="loadingButtons">
              {/* <Icon type="reload" onClick={() => { location.reload(); }} /> */}
            </div>
            <LoadingAnimation width={100} height={100} />
            <h3>{this.props.loadingMessage}</h3>
          </div>
        ) : null}
        {this.props.children}
      </>
    );
  }
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  loadingMessage: PropTypes.string,
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  loadingMessage: "",
  visible: false,
};
