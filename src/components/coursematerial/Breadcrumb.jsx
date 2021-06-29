import React, { Component } from "react";
import {Breadcrumb as Breadcrumbs} from "react-bootstrap";

export default class Breadcrumb extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs>
          {this.props.items.map((i, key) => {
              return <Breadcrumbs.Item href={i.url}>{i.label}</Breadcrumbs.Item>
           
          })}
        </Breadcrumbs>
      </div>
    );
  }
}
