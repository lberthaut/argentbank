import React from "react";
import Accounts from "../components/usercomponents/accounts";
import User from "../components/usercomponents/user";
import Accountsstyle from "../styles/userstyles/accountsstyle";
import Userstyle from "../styles/userstyles/userstyle";

export default class Userpage extends React.Component {
  render() {

    return (
        <main className="main bg-dark">
          <User/><Userstyle/>
          <Accounts/><Accountsstyle/>
        </main>
    );
  }
}