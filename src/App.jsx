import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheName } from "./actions/index";
import Courses from "./components/courses/courses";
import Referencematerials from "./components/coursematerial/referencematerials";
import BuyaCourse from "./components/buyCourse/buyCourse";
import Coursedetails from "./components/buyCourse/courseDetails";
import CourseList from "./components/buyCourse/courseList";
import Syllabus from "./components/courses/syllabus";
import Login from "./scenes/login/login";
import LoginOTP from "./scenes/login/loginOTP";
import Register from "./scenes/register/register";
import CardCarousel from "./components/carousel/cardCarousel";
import Buynow from "./components/buyCourse/buyNow/buyNow";
import CourseMaterials from "./components/coursematerial/courseMaterials";
import SampleVideos from "./components/coursematerial/sampleVideos";
import Test from "./components/coursematerial/test";
import Practices from "./components/coursematerial/practices";
import Materialscontent from "./components/coursematerial/materialscontent";
import Cart from "./scenes/cart/cart";
import Student from "./scenes/student/app";
import StudentProfile from "./scenes/profile/studentPofile";
import { Dashboard } from "./scenes/dashboard/dashboard";
import AppContainer from "./scenes/AppContainer";
import "./assets/styles.scss";

export default function ElliteApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <AppContainer><Dashboard {...props} /></AppContainer>} />
        <Route exact path="/referencematerials" component={(props) => <AppContainer><Referencematerials {...props} /></AppContainer>} />
        <Route exact path="/coursematerials" component={(props) => <AppContainer><CourseMaterials {...props} /></AppContainer>} />
        <Route exact path="/courses" component={(props) => <AppContainer><Courses {...props} /></AppContainer>} />
        <Route exact path="/buyacourse" component={(props) => <AppContainer><BuyaCourse {...props} /></AppContainer>} />
        <Route exact path="/courseList" component={(props) => <AppContainer><CourseList {...props} /></AppContainer>} />
        <Route exact path="/coursedetails" component={(props) => <AppContainer><Coursedetails {...props} /></AppContainer>} />
        <Route exact path="/dashboard" component={(props) => <AppContainer><Dashboard {...props} /></AppContainer>} />
        <Route exact path="/buyNow" component={(props) => <AppContainer><Buynow {...props} /></AppContainer>} />
        <Route exact path="/cart" component={(props) => <AppContainer><Cart {...props} /></AppContainer>} />
        <Route exact path="/studentProfile" component={(props) => <AppContainer><StudentProfile {...props} /></AppContainer>} />
        <Route path="/questionpapers" component={Materialscontent} />
        <Route path="/samplevideos" component={SampleVideos} />
        <Route path="/test" component={Test} />
        <Route path="/practices" component={Practices} />
        <Route path="/syllabus" component={Syllabus} />
        <Route path="/login" component={Login} />
        <Route path="/loginOTP" component={LoginOTP} />
        <Route path="/register" component={Register} />
        <Route path="/cardcarousel" component={CardCarousel} />
        <Route path="/student" component={Student} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  name: state.firstReducer.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheName: () => dispatch(changeTheName()),
});

connect(mapStateToProps, mapDispatchToProps)(ElliteApp);
