import React from "react";
import { Breadcrumb as Breadcrumbs } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Breadcrumb(props) {
  return (
    <div>
      <Breadcrumbs>
        {props.items.map((i, key) => (
          <Breadcrumbs.Item key={key} href={i.url}>
            {i.label}
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs>
    </div>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};
