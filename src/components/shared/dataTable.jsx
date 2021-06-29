/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import {
  Table,
} from "react-bootstrap";
import _ from "lodash-es";
import PropTypes from "prop-types";
import _s from "underscore.string";

import "./dataTable.scss";

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const columnTitle = _.keys(this.props.data[0]);
    return (
      <div className="dataTable">
        <Table borderless>
          <thead>
            <tr>
              {columnTitle.map((i, key) => <th key={key}>{_s.humanize(i)}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((i, key) => (
              <tr key={key} onClick={() => this.props.onClick(i)}>
                {columnTitle.map((j, subKey) => <td key={subKey}>{i[j]}</td>)}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
DataTable.defaultProps = {
};
