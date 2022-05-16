import React, { Component } from "react";
import ethLogo from "../eth-logo.png";
import tokenLogo from "../token-logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
    };
  }
  render() {
    const countBuyCI = (val) => {
      var ethetovalue = this.props.parentState.imagesCount;
      var addtokenperbusd = val + ethetovalue;
      var actualPercentage = 0;
      var percentVal = [];
      var totalSum = 0;
      var calcList = [];
      if (addtokenperbusd) {
        var modVal = addtokenperbusd % 1000;
        var currentVal = addtokenperbusd - modVal;
        calcList.push(modVal > val ? val : modVal);
        while (addtokenperbusd > 0) {
          actualPercentage = actualPercentage === 0 ? 0.01 : (actualPercentage + ((0.001 / 100) * actualPercentage));
          percentVal.push(actualPercentage);
          if ((currentVal > ethetovalue) && (ethetovalue > (currentVal - 1000))) {
            calcList.push(currentVal - ethetovalue);
          } else if (currentVal > ethetovalue) {
            calcList.push(1000)
          }
          currentVal -= 1000;
          addtokenperbusd -= 1000;
        }
        // calcList.reverse();
        console.log(calcList, percentVal)
      }
      var percentlen = percentVal.length;
      calcList.forEach(function (val, index) {
        console.log(val / percentVal[percentlen - index - 1]);
        totalSum += (val / percentVal[percentlen - index - 1]);
        console.log('totalSum', totalSum);
      })
      return totalSum;
    }
    const busdCalculation = (value) => {
      var calculatedVal = countBuyCI(+this.input.value);
      this.setState({ output: calculatedVal })
    }
    console.log('imagesCount..BuyForm....', this.props.parentState.imagesCount);
    return (
      // <div>
      //   <div>
      //     <form
      //       role="main"
      //       className="row,col-lg-12 ml-auto mr-auto mb-5"
      //       style={{
      //         maxWidth: "600px",
      //         border: "1px solid silver",
      //         padding: "30px",
      //         backgroundColor: "white",
      //         boxShadow: "2px 2px 4px black",

      //       }}
      //       onSubmit={(event) => {
      //         try {
      //           event.preventDefault();
      //           let busdAmount;
      //           busdAmount = this.input.value;
      //           this.props.buyTokens(busdAmount);
      //         } catch (error) {
      //           console.log(error);
      //         }
      //       }}
      //     >

      //       <div>
      //         <h2 style={{ color: "#5c2171" }}>Swap</h2>
      //         <p>Exchange Trade Tokens in an amount</p>
      //       </div>
      //       <div className="input-group mb-4">
      //         <input
      //           type="number"
      //           onChange={busdCalculation}
      //           ref={(input) => {
      //             this.input = input;
      //           }}
      //           style={{ backgroundColor: "#5c2171", color: "white", marginTop: "20px" }}
      //           placeholder="BUSD"
      //           className="form-control form-control-lg"
      //           required
      //         />
      //       </div>
      //       <div
      //         style={{
      //           width: "100%",
      //           height: "auto",
      //           display: "flex",
      //           justifyContent: "center",
      //         }}
      //       >
      //         <div>
      //           <Link className="mb-2 mt-3" to="/Swap" style={{ fontSize: "17px", fontWeight: "bolder", color: "#5c2171", textDecoration: "none" }}>
      //             <div style={{ width: "45px", height: "45px", border: "4px solid purple", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%" }}>
      //               <i className='fas fa-arrow-down' style={{ fontSize: "23px", fontWeight: "900", color: "#f1c40f" }}></i>
      //             </div>
      //           </Link>
      //         </div>
      //       </div>
      //       <div className="input-group mb-5 mt-3">
      //         <input
      //           value={this.state.output}
      //           type="number"
      //           placeholder="Speciex"
      //           className="form-control form-control-lg"
      //           disabled
      //         />
      //       </div>
      //       <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", border: "none" }}>
      //         <Button type="submit" onClick={"hello"} style={{ width: "220px", height: "45px", backgroundColor: "#5c2171", borderRadius: "25px", border: "none", outline: "none" }} className="mb-4">
      //           Connect Wallet
      //         </Button>
      //       </div>
      //     </form>
      //   </div>
      // </div>
      <section>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary-white --border" style={{ backgroundColor: 'white' }}>Swap</button>
          <button className="btn btn-primary-transparent"
            style={{
              backgroundColor: 'transparent', color: '#777c82', fontSize: '1.25rem',
              padding: '0.15rem 0.75rem',
              marginLeft: '1rem',
              borderRadius: '5px',
              border: '2px solid #777c82',
              width: '150px',
              fontFamily: 'Neutraface Text Bold',
            }}>Liquidity</button>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div className="sv-cnt">
            <div className="sv-cnt-header">
              <h1 className="sv-cnt-header-title">Swap</h1>
              <p className="sv-cnt-header-para">Exchange Trade Tokens in an instant</p>
            </div>
            <div className="sv-cnt-body mt-3">
              <form
                onSubmit={(event) => {
                  try {
                    event.preventDefault();
                    let busdAmount;
                    busdAmount = this.input.value;
                    this.props.buyTokens(busdAmount);
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                <h2 className="sv-cnt-body-title">Payment Details</h2>
                <div className="d-block mt-3">
                  <div className="select-box">
                    <div className="select-box__current">
                      <div className="select-box__value">
                        <input className="form-control form-control-lg" type="number" placeholder="BUSD" style={{ background: ' transparent' }}
                          onChange={busdCalculation}
                          ref={(input) => {
                            this.input = input;
                          }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                <Link className="mb-2 mt-3" to="/Swap" ><img className="drop-arrow" src="image/Icon-2.png" alt="Arrow Icon" /></Link>
                </div>
                <div className="d-block">
                  <div className="select-box">
                    <div className="select-box__current" tabIndex={1}>
                      <div className="select-box__value">
                        <input className="form-control form-control-lg" type="number" name="Currency" style={{ background: ' transparent' }}
                          value={this.state.output}
                          placeholder="Speciex"
                          disabled />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="btn btn-primary-white --border --width" style={{ backgroundColor: 'white' }}>Unlock Wallet</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BuyForm;
