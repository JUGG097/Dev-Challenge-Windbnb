import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./landingpage.css";
import Stays from "../../store/stays";

const LandingPage = () => {
	console.log(Stays);
	const [stays, setStays] = useState(Stays);
	const [show, setShow] = useState(false);
	const [showLocationList, setShowLocationList] = useState(true);
	const [showGuestList, setShowGuestList] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="container">
				{/* Nav Area with Search */}
				<div className="row pt-4">
					<div className="col-sm-5 mt-2">
						<div className="text-left">
							<img
								className="img-fluid"
								src="../../../images/logo.png"
								alt="Logo"
							></img>
						</div>
					</div>
					<div className="col-sm-7 mt-2">
						<div className="text-right filter-buttons" style={{}}>
							<button
								style={{
									borderTopRightRadius: 0,
									borderBottomRightRadius: 0,
								}}
								onClick={() => {
									handleShow();
									setShowLocationList(true);
								}}
							>
								Helsinki, Finland
							</button>
							<button
								style={{
									borderTopRightRadius: 0,
									borderBottomRightRadius: 0,
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
									color: "#BDBDBD",
								}}
								onClick={() => {
									handleShow();
								}}
							>
								{" "}
								Add guest
							</button>
							<button
								style={{
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
								}}
								onClick={() => {
									handleShow();
								}}
							>
								{" "}
								<i
									class="fas fa-search"
									style={{
										color: "rgba(235, 87, 87, 0.72)",
									}}
								></i>
							</button>
						</div>
					</div>
				</div>

				{/* Sub Heading Row */}
				<div className="row mt-4">
					<div className="col-6 col-sm-6">
						<h5>Stays in Finland</h5>
					</div>

					<div className="col-6 col-sm-6 text-right my-auto">
						<p>{stays.length} Stays</p>
					</div>
				</div>

				{/* Property Cards */}
				<div className="row text-center">
					{stays.map((stay) => (
						<div className="col-sm-4">
							<div>
								<div>
									<img
										style={{
											borderRadius: "10px",
											width: "100%",
											height: "12rem",
										}}
										src={stay.photo}
										className="img-fluid stay-img"
										alt="stay"
									></img>
								</div>

								<div
									className="row pt-2"
									style={{
										fontSize: ".9rem",
										color: "#828282",
									}}
								>
									<div className="col-10 col-sm-10">
										<div className="text-left">
											{stay.superHost && (
												<span
													style={{
														borderRadius: "12px",
														border: "1px solid #4F4F4F",
														padding: "2px",
														color: "#4F4F4F",
													}}
												>
													SUPER HOST
												</span>
											)}
											{"  "}
											<span>{stay.type}</span>{" "}
											{stay.beds && (
												<span>. {stay.beds} beds</span>
											)}
											{/* <span>{stay.rating}</span> */}
										</div>
									</div>

									<div className="col-2 col-sm-2 text-center pr-5">
										<span
											class="fas fa-star"
											style={{
												color: "rgba(235, 87, 87, 0.72)",
											}}
										>
											<span
												style={{
													color: "#828282",
												}}
											>
												{stay.rating}
											</span>
										</span>
									</div>
								</div>

								<p
									style={{
										fontWeight: "bold",
										textAlign: "left",
										fontSize: "1.1rem",
									}}
								>
									{stay.title}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Filter Modal */}
				<Modal
					show={show}
					onHide={handleClose}
					animation={true}
					dialogClassName="modal-100w"
				>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<div className="row pl-5 pr-5">
							<div
								className="col-sm-4 modal-filter-cols mt-2"
								onClick={() => {
									setShowLocationList(true);
								}}
							>
								<div>
									<p>LOCATION</p>
									<span>{}</span>
								</div>
							</div>
							<div
								className="col-sm-4 modal-filter-cols mt-2"
								onClick={() => {
									setShowLocationList(false);
								}}
							>
								<div>
									<p>GUESTS</p>
									<span>{}</span>
								</div>
							</div>
							<div className="col-sm-4 text-center modal-filter-cols mt-2">
								<div className="p-2">
									<button
										style={{
											background: "#EB5757",
											boxShadow:
												"0px 1px 6px rgba(0, 0, 0, 0.1)",
											borderRadius: "10px",
										}}
										onClick={() => {
											handleShow();
										}}
									>
										Submit
									</button>
								</div>
							</div>
						</div>
						<div className="row">
							{showLocationList && (
								<div className="col-12">
									<ul>
										<li>Abia</li>
										<li>Abia</li>
										<li>Abia</li>
									</ul>{" "}
								</div>
							)}
						</div>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default LandingPage;
