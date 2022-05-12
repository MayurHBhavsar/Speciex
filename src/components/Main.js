import React, { Component } from "react";
import BuyFrom from "./BuyForm";
import SellForm from "./SellForm";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: "buy",
		};
	}
	render() {
		let content;
		let parentState = this.props.parentState;
		if (this.state.currentForm === "buy")
			content = (
				<BuyFrom
					busdBalance={parentState.busdBalance}
					TokenBalance={parentState.TokenBalance}
					buyTokens={this.props.buyTokens}
					parentState={this.props.parentState}
				/>
			);
		else
			content = (
				<SellForm
					busdBalance={this.props.busdBalance}
					TokenBalance={this.props.TokenBalance}
					sellTokens={this.props.sellTokens}
					parentState={this.props.parentState}
				/>
			);
		return (
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
						<div className="card-body">{content}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
