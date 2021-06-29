import React from "react";
import { ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap";

import _ from "lodash-es";

import "./topMenu.scss";

export default class Topmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "",
      referenceMaterial: {
        "BDS Subjects": ["referencematerials", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CSIR: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        GATE: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "IIT JAM": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "B.E subjects": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CS: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "IBPS Banking": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        MBBS: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DCET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DCE: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DATA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DIPLOMA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        NAVODAYA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        NEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        PGCET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        PGNEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        UGCNEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
      },
      courses: {
        CS: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CSIR: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        GATE: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "IIT JAM": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "B.E subjects": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        NEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        PGCET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        PGNEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DCET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DCE: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DATA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        UGCNEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "IBPS Banking": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        MBBS: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "BDS Subjects": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],

        CEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DIPLOMA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        NAVODAYA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
      },
      buyCourses: {
        DCE: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DATA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        GATE: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CS: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CSIR: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],

        "IIT JAM": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "B.E subjects": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        NEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        PGCET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        PGNEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],

        CEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DIPLOMA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        CA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        DCET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        UGCNEET: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "IBPS Banking": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        MBBS: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
        "BDS Subjects": ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],

        NAVODAYA: ["DCET-1", "DCET-1", "DCET-1", "DCET-1", "DCET-1"],
      },
    };
  }

  toggleMenu = (menu) => {
    if (this.state.activeMenu === menu) {
      this.setState({ activeMenu: "" });
    } else {
      this.setState({ activeMenu: menu });
    }
  };

  getMenuOpenClass = (menu) => {
    if (this.state.activeMenu === menu) {
      return "show";
    }
  };

  menuDom = (menu) => {
    let temp = [];
    if (menu === "referenceMaterial") {
      temp = _.keys(this.state.referenceMaterial);
    } else if (menu === "courses") {
      temp = _.keys(this.state.courses);
    } else {
      temp = _.keys(this.state.buyCourses);
    }

    return temp.map((i, key) => (
      <div className="col-md-3">

        <ButtonToolbar key={key} className="m-t-10 m-l-20">
          {["right"].map((direction) => (
            <a href="referencematerials">
              <DropdownButton
                drop={direction}
                variant="secondary"
                title={i}
                id={`dropdown-button-drop-${direction}`}
                key={direction}
              >
                {this.state.referenceMaterial[i].map((j, key) => (

                  <Dropdown.Item eventKey="1">{j}</Dropdown.Item>

                ))}

              </DropdownButton>
            </a>
          ))}
        </ButtonToolbar>
      </div>
    ));
  };

  render() {
    return (
      <div className="megaMenu flex">
        <div className="show">
          <button
            onClick={() => this.toggleMenu("referenceMaterial")}
            className="btn btn-secondary dropdown-toggle "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a href="referencematerials">
            REFERENCE MATERIAL
            </a>
          </button>
          <div
            className={`dropdown-menu ${this.getMenuOpenClass(
              "referenceMaterial",
            )}`}
            aria-labelledby="dropdownMenuButton"
          >
            <a href="referencematerials">
              <div className="row dropmenu">
                {this.menuDom("referenceMaterial")}
              </div>
            </a>
          </div>
        </div>
        <div className="show">
          <button
            onClick={() => this.toggleMenu("courses")}
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a href="courses">
           COURSES
           </a>
          </button>
          <div
            className={`dropdown-menu ${this.getMenuOpenClass("courses")}`}
            aria-labelledby="dropdownMenuButton"
          >
            <div className="row dropmenu">{this.menuDom("courses")}</div>
          </div>
        </div>
        <div className="show">
          <button
            onClick={() => this.toggleMenu("buyCourse")}
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              <a href="buyCourse">
           BUY A COURSE
           </a>
          </button>
          <div
            className={`dropdown-menu ${this.getMenuOpenClass("buyCourse")}`}
            aria-labelledby="dropdownMenuButton"
          >
            <div className="row dropmenu  ">{this.menuDom("buycourse")}</div>
          </div>
        </div>
      </div>
    );
  }
}
