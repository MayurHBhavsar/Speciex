
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
      // <div className="Main_Header-Container">
      //   <div className="Navbar-Container">
      //     <div className="Logo-Container">
      //       <img src="./images/mainlogo.png" alt="" width={150} height={47} />
      //     </div>
      //     <div className="Navigation-Container">

      //       <button className="Navbar-Button" onClick={this.props.handleConnect} >Connect Wallet</button>
      //       {/* <small className="text-secondary"> */}
      //       <div className="accountAddressMain">
      //         <small className="accountAddressStyle">{this.props.parentState && this.props.parentState.account}</small>
      //       </div>
      //       {/* </small> */}
      //       {this.state.account ? (
      //         <img
      //           style={{ Color: "black", borderRadius: '20px', marginLeft: '10px' }}
      //           className="float-right"
      //           width="35"
      //           height="35"
      //           src={`data:image/png;base64,${new Identicon(this.state.account, 30).toString()}`}
      //           alt=""
      //         />
      //       ) : (
      //         <span></span>
      //       )}
      //     </div>
      //   </div>
      //   <Main
      //     buyTokens={this.props.buyTokens}
      //     parentState={this.props.parentState}
      //   />
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
                    <a className="nav-link sv-navbar-nav-item-link" href="#">{this.props.parentState && this.props.parentState.account}</a>
                  </li>
                </ul>
                <button className="btn btn-primary-white" style={{ backgroundColor: 'white' }} onClick={this.props.handleConnect} >Connect Wallet</button>
              </div>
            </nav>
          </div>
        </header>
        <Main
          buyTokens={this.props.buyTokens}
          parentState={this.props.parentState}
        />
      </main>
    );
  }
}
export default NavBar;
