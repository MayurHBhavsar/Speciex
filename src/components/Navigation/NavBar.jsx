
import React, { Component } from "react";
import Main from "../../components/Main";
import './NavBar.css';
import Identicon from "identicon.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
  }
  render() {
    return (
      <div className="Main_Header-Container">
        <div className="Navbar-Container">
          <div className="Logo-Container">
            <img src="./images/mainlogo.png" alt="" width={150} height={47} />
          </div>
          <div className="Navigation-Container">

            <button className="Navbar-Button" onClick={this.props.handleConnect} >Connect Wallet</button>
            {/* <small className="text-secondary"> */}
            <div className="accountAddressMain">
              <small className="accountAddressStyle">{this.props.parentState && this.props.parentState.account}</small>
            </div>
            {/* </small> */}
            {this.state.account ? (
              <img
                style={{ Color: "black", borderRadius: '20px', marginLeft: '10px' }}
                className="float-right"
                width="35"
                height="35"
                src={`data:image/png;base64,${new Identicon(this.state.account, 30).toString()}`}
                alt=""
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <Main
          buyTokens={this.props.buyTokens}
          parentState={this.props.parentState}
        />
      </div>
    );
  }
}
export default NavBar;
