import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScreenCategory from "screens/User/Category/Category";
import ScreenBlogHome from "screens/User/BlogHome/BlogHome";
import ScreenPostFull from "screens/User/PostFull/PostFull";
import ScreenProfile from "screens/User/Profile/Profile";
import ScreenSignIn from "screens/Auth/SignIn/SignIn";
import ScreenSignUp from "screens/Auth/SignUp/SignUp";
import ScreenAccountList from "screens/Admin/AccountList/AccountList";
import ScreenPostsList from "screens/Admin/PostsList/PostsList";

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route exact path="/sign-in" component={ScreenSignIn} />
        <Route exact path="/sign-up" component={ScreenSignUp} />
        <Redirect exact from="/user" to="/user/blog-home" />
        <Route exact path="/user/blog-home" component={ScreenBlogHome} />
        <Route
          path="/user/career-advice"
          render={(props) => (
            <ScreenCategory {...props} category="career-advice" />
          )}
        />
        <Route
          path="/user/learning-tips"
          render={(props) => (
            <ScreenCategory {...props} category="learning-tips" />
          )}
        />
        <Route
          path="/user/course-updates"
          render={(props) => (
            <ScreenCategory {...props} category="course-updates" />
          )}
        />
        <Route
          path="/user/news"
          render={(props) => <ScreenCategory {...props} category="news" />}
        />
        <Route
          path="/user/business"
          render={(props) => <ScreenCategory {...props} category="business" />}
        />
        <Route path="/user/detail" component={ScreenPostFull} />
        <Route path="/user/profile" component={ScreenProfile} />
        {/* Admin */}
        <Redirect exact from="/admin" to="/admin/account-list" />
        <Route path="/admin/accounts-list" component={ScreenAccountList} />
        <Route path="/admin/posts-list" component={ScreenPostsList} />
      </Switch>
    </Router>
  );
}

export default RootRoute;
