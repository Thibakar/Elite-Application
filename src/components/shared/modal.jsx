/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export default function ModalComponent(props) {
  return (
    <Modal show={props.modal} onHide={props.toggleModal}>
      <Modal.Header className="header-border" closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="CheckImgAlign">
          <img className=" checkImgWidth" src={props.imageUrl} alt="cannot display" />
        </div>
        <h2 className="m-l-30 m-t-10 m-b-20 m-r-30 OrderAlign">{props.title}</h2>
        <div className="m-t-25 p-l-10 p-r-10 colorDarkGray FontSize">{props.description}</div>
        <div className="m-t-30 m-b-20 verticalhorizontalMiddle">
          {props.footerActions.map((i, key) => (
            <div className="linkBorder m-r-20">
              <a className="decorationNone" key={key} href={i.link}>
                {i.title}
              </a>

            </div>
          ))}
        </div>

      </Modal.Body>
    </Modal>
  );
}

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  footerActions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
  description: PropTypes.string,
};

ModalComponent.defaultProps = {
  imageUrl: "",
  description: "",
  footerActions: [""],
};
