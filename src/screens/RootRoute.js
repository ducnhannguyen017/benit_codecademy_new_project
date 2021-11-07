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
import { PrivateRoute } from "components/Auth/PrivateRoute";

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route exact path="/sign-in" component={ScreenSignIn} />
        <Route exact path="/sign-up" component={ScreenSignUp} />
        <Redirect exact from="/user" to="/user/blog-home" />
        <Route exact path="/user/blog-home" component={ScreenBlogHome} />

        <Route exact path="/user/tag/:tag" component={ScreenCategory} />

        <Route exact path="/user/detail/:postId" component={ScreenPostFull} />
        <Route exact path="/user/profile/:userId" component={ScreenProfile} />
        <Route
          exact
          path="/user/profile/:userId/edit/:postId"
          component={ScreenProfile}
        />
        {/* Admin */}
        <Redirect exact from="/admin" to="/admin/accounts-list" />
        <PrivateRoute
          exact
          role="ROLE_ADMIN"
          path="/admin/accounts-list"
          component={ScreenAccountList}
        />
        <PrivateRoute
          exact
          role="ROLE_ADMIN"
          path="/admin/posts-list"
          component={ScreenPostsList}
        />
      </Switch>
    </Router>
  );
}

export default RootRoute;
