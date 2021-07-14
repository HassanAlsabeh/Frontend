import React, { Component } from "react";
import "./login.css";


export default class Home extends Component {
  render() {
    return (
      <div>
       <div class="wrapper fadeInDown">
  <div id="formContent">

    <h2 class="active"> Sign In </h2>

    <form>
      <input type="text2" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text2" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <a href="/dashboard"><input type="button2" class="fadeIn fourth" value="Log In"/></a>
    </form>


    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
      </div>
    );
  }
}
