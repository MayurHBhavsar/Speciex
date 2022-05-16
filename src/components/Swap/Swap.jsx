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
      // <div>
      //   <div className="Main_Header-Container">
      //     <div className="Navbar-Container">
      //       <div className="Logo-Container">
      //         <img src="./images/mainlogo.png" alt="" width={150} height={47} />
      //       </div>
      //       <div className="Navigation-Container">
      //         <button className="Navbar-Button" onClick={this.props.handleConnect}>Connect Wallet</button>

      //         <div className="accountAddressMain">
      //           <small className="accountAddressStyle">{this.props.parentState.account}</small>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div
      //     // className="mt-2"
      //     style={{ width: "100%", height: "300%", backgroundImage: "url(./images/Background.jpg)", marginTop: "1px", backgroundSize: "cover", backgroundPosition: "fixed" }}>
      //     <div id="content" className="mt-">
      //       <div className="d-flex justify-content-center mb-3 ml-5">
      //         <div style={{ width: "100%", height: "auto", display: "grid", justifyContent: "center", position: "relative", left: "230px", marginTop: "30px" }}>
      //           <button style={{ width: "160px", height: "45px", backgroundColor: "#5c2171", borderRadius: "10px", fontSize: "17px", fontWeight: "bolder", color: "white", outline: "none", textDecoration: "none", border: "none", }} className="mb-2 mr-200"
      //             onClick={(event) => {
      //               this.setState({ currentForm: "buy" });
      //             }}
      //           >
      //             Swap
      //           </button>
      //         </div>
      //         {/* <span>&lt; &nbsp; &gt;</span> */}
      //         <div style={{ width: "100%", height: "auto", display: "grid", justifyContent: "Center", marginRight: "300px", marginTop: "30px" }}>
      //           <button style={{ width: "150px", height: "45px", backgroundColor: "silver", borderRadius: "10px", fontSize: "17px", fontWeight: "bolder", color: "white", border: "none", }} className="mb-2 ml-5"
      //             onClick={(event) => {
      //               this.setState({ currentForm: "buy" });
      //             }}
      //           >
      //             Liquidity
      //           </button>
      //         </div>
      //       </div>
      //       <div>

      //         <SellForm
      //           busdBalance={this.props.busdBalance}
      //           TokenBalance={this.props.TokenBalance}
      //           sellTokens={this.props.sellTokens}
      //           parentState={this.props.parentState}
      //         />
      //       </div>
      //     </div>
      //   </div>

      // </div>
      <main>
        <header>
          <div className="d-flex align-items-lg-center justify-content-center sv">
            <nav className="navbar navbar-expand-lg sv-navbar sv-navbar--light">
              <a className="navbar-brand sv-navbar-brand" href="#">
                <img className="sv-navbar-brand-img" alt="Shivverse" src="image/logo.png" />
              </a>
              <button className="navbar-toggler sv-navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon sv-navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse sv-navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto sv-navbar-nav">
                  <li className="nav-item sv-navbar-nav-item active">
                    <a className="nav-link sv-navbar-nav-item-link" href="#">Trade <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#">Earn</a>
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#" tabIndex={-1}>Win</a>
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#" tabIndex={-1}>NFT</a>
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#" tabIndex={-1}>{this.props.parentState && this.props.parentState.account}</a>
                  </li>
                </ul>
                <button className="btn btn-primary-white" style={{ backgroundColor: 'white' }} onClick={this.props.handleConnect} >Connect Wallet</button>
              </div>
            </nav>
          </div>
        </header>
        <SellForm
          busdBalance={this.props.busdBalance}
          TokenBalance={this.props.TokenBalance}
          sellTokens={this.props.sellTokens}
          parentState={this.props.parentState}
        />
      </main>
    );
  }
}
export default Swap;
