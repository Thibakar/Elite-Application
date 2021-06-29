/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-debugger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from "react";

import {
  Container,
} from "react-bootstrap";
import moment from "moment";

import elitereg1 from "../../assets/images/carouselimg.png";

import "./notification.scss";

// eslint-disable-next-line react/prefer-stateless-function
export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [
        {
          title: "Live Class Update",
          description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          date: moment().format("DD MM YYYY"),
          image: "url",

        }, {
          title: "New Topic Update",
          description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          date: moment().format("DD MM YYYY"),
          image: "url",

        },
        {
          title: "New Quiz Update",
          description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          date: moment().format("DD MM YYYY"),
          image: "url",
        },
        {

          title: "New Topic Update",
          description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          date: moment().format("DD MM YYYY"),
          image: "url",
        },
      ],
    };
  }

  render() {
    return (
            <div className="mainNotification">
                <Container>
                    <div className="p-l-25 p-b-20">
                    <div className="notify p-l-10">
                        Notification
             </div>
                <div className="notificationList p-l-10 p-r-10">
                   {this.state.task.map((i, key) => {
                       
                    return (
                    <div key={key} className="studentInstructions">
                       <div className="notificationImg">
                           <img src={elitereg1} />
                       </div>
                       <div className="studentInstRight">

                         <h3>{i.title}</h3>
                                  <span>
                                {i.description}
                                </span>


                       </div>
                       <div className="studentMinute">

                           <h6>6 Min Ago</h6>

                       </div>

                       </div>
                     );
                   })}
                   </div>
                   </div>
                </Container>

            </div>


    );
  }
}
