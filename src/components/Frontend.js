
import React, { Component } from "react";
import ethLogo from "../eth-logo.png";
import tokenLogo from "../token-logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Frontend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
    };
  }
  render() {
    return (
        <>
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
                </ul>
                <button className="btn btn-primary-white" style={{backgroundColor:'white'}}>Connect Wallet</button>
              </div>
            </nav>
          </div>
        </header>
        <section>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-primary-white --border" style={{backgroundColor:'white'}}>Swap</button>
            <button className="btn btn-primary-transparent" 
              style={{backgroundColor: 'transparent',color: '#777c82',fontSize: '1.25rem',
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
                <h2 className="sv-cnt-body-title">Payment Details</h2>
                <div className="d-block mt-3">
                  <div className="select-box">
                    <div className="select-box__current" tabIndex={1}>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={10} defaultValue={11} name="Value" defaultChecked="checked" />
                        <p className="select-box__input-text">0.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={11} defaultValue={12} name="Value" />
                        <p className="select-box__input-text">1.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={12} defaultValue={13} name="Value" />
                        <p className="select-box__input-text">2.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={13} defaultValue={14} name="Value" />
                        <p className="select-box__input-text">3.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={14} defaultValue={15} name="Value" />
                        <p className="select-box__input-text">4.00 <span>Select a Currency</span></p>
                      </div>
                      <img className="select-box__icon" src="image/dropdown.png" alt="Arrow Icon" aria-hidden="true" />
                    </div>
                    <ul className="select-box__list">
                      <li>
                        <label className="select-box__option" htmlFor={10} aria-hidden="aria-hidden">Select a Currency</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={11} aria-hidden="aria-hidden">Rupees</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={12} aria-hidden="aria-hidden">Dollar</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={13} aria-hidden="aria-hidden">Euro</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={14} aria-hidden="aria-hidden">Pound</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <img className="drop-arrow" src="image/Icon-2.png" alt="Arrow Icon" />
                </div>
                <div className="d-block">
                  <div className="select-box">
                    <div className="select-box__current" tabIndex={1}>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={0} defaultValue={1} name="Currency" defaultChecked="checked" />
                        <p className="select-box__input-text">0.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={1} defaultValue={2} name="Currency" />
                        <p className="select-box__input-text">1.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={2} defaultValue={3} name="Currency" />
                        <p className="select-box__input-text">2.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={3} defaultValue={4} name="Currency" />
                        <p className="select-box__input-text">3.00 <span>Select a Currency</span></p>
                      </div>
                      <div className="select-box__value">
                        <input className="select-box__input" type="radio" id={4} defaultValue={5} name="Currency" />
                        <p className="select-box__input-text">4.00 <span>Select a Currency</span></p>
                      </div>
                      <img className="select-box__icon" src="image/dropdown.png" alt="Arrow Icon" aria-hidden="true" />
                    </div>
                    <ul className="select-box__list">
                      <li>
                        <label className="select-box__option" htmlFor={0} aria-hidden="aria-hidden">Select a Currency</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={1} aria-hidden="aria-hidden">Rupees</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={2} aria-hidden="aria-hidden">Dollar</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={3} aria-hidden="aria-hidden">Euro</label>
                      </li>
                      <li>
                        <label className="select-box__option" htmlFor={4} aria-hidden="aria-hidden">Pound</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="btn btn-primary-white --border --width" style={{backgroundColor:'white'}}>Unlock Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </>
    );
  }
}
export default Frontend;


// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="utf-8">
//         <meta http-equiv="x-ua-compatiuble" content="ie=edge">
//         <meta name="viewport" content="width=device-width, intial-scale=1, shrink-to-fit=no, user-scalable=no">
//         <title>SPECIEX</title>
//         <link rel="shortcut icon" href="">

//         <!-- Stytles -->
//         <link href="style/bootstrap.css" rel="stylesheet">
//         <link href="style/main.css"rel="stylesheet">
//     </head>
//     <body>
//         <main>
//             <header>
//                 <div class="d-flex align-items-lg-center justify-content-center sv">
//                     <nav class="navbar navbar-expand-lg sv-navbar sv-navbar--light">
//                         <a class="navbar-brand sv-navbar-brand" href="#">
//                             <img class="sv-navbar-brand-img" alt="Shivverse" src="images/logo.png">
//                         </a>
//                         <button class="navbar-toggler sv-navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon sv-navbar-toggler-icon"></span>
//                         </button>
                    
//                         <div class="collapse navbar-collapse sv-navbar-collapse" id="navbarSupportedContent">
//                             <ul class="navbar-nav ml-auto sv-navbar-nav">
//                                 <li class="nav-item sv-navbar-nav-item active">
//                                     <a class="nav-link sv-navbar-nav-item-link" href="#">Trade <span class="sr-only">(current)</span></a>
//                                 </li>
//                                 <li class="nav-item sv-navbar-nav-item">
//                                     <a class="nav-link sv-navbar-nav-item-link" href="#">Earn</a>
//                                 </li>
//                                 <li class="nav-item sv-navbar-nav-item">
//                                     <a class="nav-link sv-navbar-nav-item-link" href="#" tabindex="-1">Win</a>
//                                 </li>
//                                 <li class="nav-item sv-navbar-nav-item">
//                                     <a class="nav-link sv-navbar-nav-item-link" href="#" tabindex="-1">NFT</a>
//                                 </li>
//                             </ul>
//                             <button class="btn btn-primary-white">Connect Wallet</button>
//                         </div>
//                     </nav>
//                 </div>
//             </header>

//             <section>
//                 <div class="d-flex align-items-center justify-content-center">
//                     <button class="btn btn-primary-white --border">Swap</button>
//                     <button class="btn btn-primary-transparent">Liquidity</button>
//                 </div>

//                 <div class="d-flex align-items-center justify-content-center mt-3">
//                     <div class="sv-cnt">
//                         <div class="sv-cnt-header">
//                             <h1 class="sv-cnt-header-title">Swap</h1>
//                             <p class="sv-cnt-header-para">Exchange Trade Tokens in an instant</p>
//                         </div>
//                         <div class="sv-cnt-body mt-3">
//                             <h2 class="sv-cnt-body-title">Payment Details</h2>

//                             <div class="d-block mt-3">
//                                 <div class="select-box">
//                                     <div class="select-box__current" tabindex="1">
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="10" value="11" name="Value" checked="checked"/>
//                                             <p class="select-box__input-text">0.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="11" value="12" name="Value"/>
//                                             <p class="select-box__input-text">1.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="12" value="13" name="Value"/>
//                                             <p class="select-box__input-text">2.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="13" value="14" name="Value"/>
//                                             <p class="select-box__input-text">3.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="14" value="15" name="Value"/>
//                                             <p class="select-box__input-text">4.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <img class="select-box__icon" src="images/dropdown.png" alt="Arrow Icon" aria-hidden="true"/>
//                                     </div>
//                                     <ul class="select-box__list">
//                                         <li>
//                                             <label class="select-box__option" for="10" aria-hidden="aria-hidden">Select a Currency</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="11" aria-hidden="aria-hidden">Rupees</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="12" aria-hidden="aria-hidden">Dollar</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="13" aria-hidden="aria-hidden">Euro</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="14" aria-hidden="aria-hidden">Pound</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
                            
//                             <div class="d-flex align-items-center justify-content-center my-3">
//                                 <img class="drop-arrow" src="images/Icon-2.png" alt="Arrow Icon"/>
//                             </div>

//                             <div class="d-block">
//                                 <div class="select-box">
//                                     <div class="select-box__current" tabindex="1">
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="0" value="1" name="Currency" checked="checked"/>
//                                             <p class="select-box__input-text">0.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="1" value="2" name="Currency"/>
//                                             <p class="select-box__input-text">1.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="2" value="3" name="Currency"/>
//                                             <p class="select-box__input-text">2.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="3" value="4" name="Currency"/>
//                                             <p class="select-box__input-text">3.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <div class="select-box__value">
//                                             <input class="select-box__input" type="radio" id="4" value="5" name="Currency"/>
//                                             <p class="select-box__input-text">4.00 <span>Select a Currency</span></p>
//                                         </div>
//                                         <img class="select-box__icon" src="images/dropdown.png" alt="Arrow Icon" aria-hidden="true"/>
//                                     </div>
//                                     <ul class="select-box__list">
//                                         <li>
//                                             <label class="select-box__option" for="0" aria-hidden="aria-hidden">Select a Currency</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="1" aria-hidden="aria-hidden">Rupees</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="2" aria-hidden="aria-hidden">Dollar</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="3" aria-hidden="aria-hidden">Euro</label>
//                                         </li>
//                                         <li>
//                                             <label class="select-box__option" for="4" aria-hidden="aria-hidden">Pound</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div class="d-flex align-items-center justify-content-center mt-3">
//                                 <button class="btn btn-primary-white --border --width">Unlock Wallet</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     </body>
//     <script src="js/jquery-3.3.1.slim.min.js"></script>
//     <script src="js/popper.min.js"></script>
//     <script src="js/bootstrap.min.js"></script>
// </html>