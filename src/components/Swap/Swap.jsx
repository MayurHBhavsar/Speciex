import React, { Component } from "react";
import Identicon from "identicon.js";
import BuyForm from "../BuyForm";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Main from "../Main";
import Speciex from "./Speciex";
import SellForm from "../SellForm";
import './Swap.css';
class Swap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
    };
  }
  render() {
    return (
      <div>
        <div className="Main_Header-Container">
          <div className="Navbar-Container">
            <div className="Logo-Container">
              <img src="./images/mainlogo.png" alt="" width={150} height={47} />
            </div>
            <div className="Navigation-Container">
              <button className="Navbar-Button" onClick={this.props.handleConnect}>Connect Wallet</button>

              <div className="accountAddressMain">
                <small className="accountAddressStyle">{this.props.parentState.account}</small>
              </div>
            </div>
          </div>
        </div>
        <div
          // className="mt-2"
          style={{ width: "100%", height: "300%", backgroundImage: "url(./images/Background.jpg)", marginTop: "1px", backgroundSize: "cover", backgroundPosition: "fixed" }}>
          <div id="content" className="mt-">
            <div className="d-flex justify-content-center mb-3 ml-5">
              <div style={{ width: "100%", height: "auto", display: "grid", justifyContent: "center", position: "relative", left: "230px", marginTop: "30px" }}>
                <button style={{ width: "160px", height: "45px", backgroundColor: "#5c2171", borderRadius: "10px", fontSize: "17px", fontWeight: "bolder", color: "white", outline: "none", textDecoration: "none", border: "none", }} className="mb-2 mr-200"
                  onClick={(event) => {
                    this.setState({ currentForm: "buy" });
                  }}
                >
                  Swap
                </button>
              </div>
              {/* <span>&lt; &nbsp; &gt;</span> */}
              <div style={{ width: "100%", height: "auto", display: "grid", justifyContent: "Center", marginRight: "300px", marginTop: "30px" }}>
                <button style={{ width: "150px", height: "45px", backgroundColor: "silver", borderRadius: "10px", fontSize: "17px", fontWeight: "bolder", color: "white", border: "none", }} className="mb-2 ml-5"
                  onClick={(event) => {
                    this.setState({ currentForm: "buy" });
                  }}
                >
                  Liquidity
                </button>
              </div>
            </div>
            <div>

              <SellForm
                busdBalance={this.props.busdBalance}
                TokenBalance={this.props.TokenBalance}
                sellTokens={this.props.sellTokens}
                parentState={this.props.parentState}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Swap;
