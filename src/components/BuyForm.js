import React, { Component } from "react";
import ethLogo from "../eth-logo.png";
import tokenLogo from "../token-logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
    };
  }
  render() {
    const countBuyCI = (val) => {
      var ethetovalue= this.props.parentState.imagesCount;
      console.log('countBuyCIethetovalue....',ethetovalue);
      var addtokenperbusd= val + ethetovalue;
      var userInput = addtokenperbusd;
      var max = Math.floor(userInput / 1000);
      var actualPercentage = 0.01;
      var convertednumber = 0;
      var totalSum = 0;
      if (userInput === 1000) {
        totalSum = 1000 / 0.01;
      } else {
        if (userInput >= 1) {
          if (userInput <= 1000) {
            totalSum = userInput / 0.01;
          } else {
            totalSum = 1000 / 0.01;
          }
        }
        if (max === 0) {
          convertednumber = userInput / 0.01;
        } else {
          for (var i = 0; i < max; i++) {
            if (userInput % 1000 === 0) {
              if (i != 1) {
                actualPercentage = actualPercentage + ((0.001 / 100) * actualPercentage);
              } else {

              }
            } else {
              actualPercentage = actualPercentage + ((0.001 / 100) * actualPercentage);
            }
            if (userInput % 1000 === 0) {
              if (i != 1) {
                totalSum += (1000) / actualPercentage;
              } else {
              }
            } else {
              if (i === max - 1) {
                totalSum += (userInput % 1000) / actualPercentage;

              } else {
                totalSum += (1000) / actualPercentage;
              }
            }
          }
          convertednumber = userInput / actualPercentage;
        }
      }
      return totalSum;
    }
    const busdCalculation = (value) => {
      var calculatedVal = countBuyCI(+this.input.value);
      this.setState({ output: calculatedVal })
    }
    console.log('imagesCount..BuyForm....', this.props.parentState.imagesCount);
    return (
      <div>
        <div>
          <form
            role="main"
            className="row,col-lg-12 ml-auto mr-auto mb-5"
            style={{
              maxWidth: "600px",
              border: "1px solid silver",
              padding: "30px",
              backgroundColor: "white",
              boxShadow: "2px 2px 4px black",

            }}
            onSubmit={(event) => {
              try {
                event.preventDefault();
                let busdAmount;
                busdAmount = this.input.value;
                this.props.buyTokens(busdAmount);
              } catch (error) {
                console.log(error);
              }
            }}
          >

            <div>
              <h2 style={{ color: "#5c2171" }}>Swap</h2>
              <p>Exchange Trade Tokens in an amount</p>
            </div>
            <div className="input-group mb-4">
              <input
                type="number"
                onChange={busdCalculation}
                ref={(input) => {
                  this.input = input;
                }}
                style={{ backgroundColor: "#5c2171", color: "white", marginTop: "20px" }}
                placeholder="BUSD"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <Link className="mb-2 mt-3" to="/Swap" style={{ fontSize: "17px", fontWeight: "bolder", color: "#5c2171", textDecoration: "none" }}>
                  <div style={{ width: "45px", height: "45px", border: "4px solid purple", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%" }}>
                    <i className='fas fa-arrow-down' style={{ fontSize: "23px", fontWeight: "900", color: "#f1c40f" }}></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="input-group mb-5 mt-3">
              <input
                value={this.state.output}
                type="number"
                placeholder="Speciex"
                className="form-control form-control-lg"
                disabled
              />
            </div>
            <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", border: "none" }}>
              <Button type="submit" onClick={"hello"} style={{ width: "220px", height: "45px", backgroundColor: "#5c2171", borderRadius: "25px", border: "none", outline: "none" }} className="mb-4">
                Connect Wallet
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BuyForm;
