import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./landingpage.css";
import Stays from "../../store/stays";

const LandingPage = () => {
	const [filterdStays, setFilterdStays] = useState(Stays);
	const [show, setShow] = useState(false);
	const [showLocationList, setShowLocationList] = useState(true);
	const [locationFilter, setLocationFilter] = useState("");
	const [guestFilterAdult, setGuestAdultFilter] = useState(0);
	const [guestFilterChild, setGuestChildFilter] = useState(0);
	const [showGuestList, setShowGuestList] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const finlandCities = ["Helsinki", "Turku", "Oulu", "Vaasa"];

	const minusAdult = () => {
		if (guestFilterAdult === 0) {
			return setGuestAdultFilter(0);
		} else {
			return setGuestAdultFilter(guestFilterAdult - 1);
		}
	};

	const minusChild = () => {
		if (guestFilterChild === 0) {
			return setGuestChildFilter(0);
		} else {
			return setGuestChildFilter(guestFilterChild - 1);
		}
	};

	const filterCards = () => {
		const filteredArr = Stays.filter(
			(stay) =>
				stay.city
					.toLowerCase()
					.includes(locationFilter.toLowerCase()) &&
				stay.maxGuests >= guestFilterAdult + guestFilterChild
		);
		setFilterdStays(filteredArr);
	};

	useEffect(() => {}, []);

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
									setShowGuestList(false);
								}}
							>
								{locationFilter
									? locationFilter + ", Finland"
									: "Add Location"}
							</button>
							<button
								style={{
									borderTopRightRadius: 0,
									borderBottomRightRadius: 0,
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
									// color: "#BDBDBD",
								}}
								onClick={() => {
									handleShow();
									setShowLocationList(false);
									setShowGuestList(true);
								}}
							>
								{guestFilterChild || guestFilterAdult
									? guestFilterAdult +
									  guestFilterChild +
									  " Guests"
									: "Add guest"}
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
						<p>{filterdStays.length} Stays</p>
					</div>
				</div>

				{/* Clear Filter */}
				{locationFilter || guestFilterAdult || guestFilterChild ? (
					<div className="row mt-4 p-3 filter-buttons">
						<button
							style={{}}
							onClick={() => {
								setLocationFilter("");
								setGuestAdultFilter(0);
								setGuestChildFilter(0);
								setFilterdStays(Stays);
							}}
						>
							Clear Filters <i class="fas fa-times"></i>
						</button>
					</div>
				) : (
					""
				)}
				{/* Property Cards */}
				<div className="row text-center">
					{filterdStays.map((stay, id) => (
						<div className="col-sm-6 col-md-4" key={id}>
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
									<div className="col col-sm-10">
										<div className="text-left">
											{stay.superHost && (
												<span
													style={{
														borderRadius: "12px",
														border: "1px solid #4F4F4F",
														padding: "1px",
														color: "#4F4F4F",
														fontSize: "11px",
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
											className="fas fa-star"
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
						<div className="row pl-3 pr-3">
							<div
								className="col-sm-4 modal-filter-cols mt-2"
								onClick={() => {
									setShowLocationList(true);
									setShowGuestList(false);
								}}
							>
								<div>
									<p
										style={{
											margin: 0,
											fontSize: "10px",
											fontWeight: "bold",
										}}
									>
										LOCATION
									</p>
									<span>
										{locationFilter
											? locationFilter + ", Finland"
											: "Add Location"}
									</span>
								</div>
							</div>
							<div
								className="col-sm-4 modal-filter-cols mt-2"
								onClick={() => {
									setShowLocationList(false);
									setShowGuestList(true);
								}}
							>
								<div>
									<p
										style={{
											margin: 0,
											fontSize: "10px",
											fontWeight: "bold",
										}}
									>
										GUESTS
									</p>
									<span>
										{guestFilterChild + guestFilterAdult}
									</span>
								</div>
							</div>
							<div
								className="col-sm-4 text-center modal-filter-cols mt-2"
								style={{
									cursor: "auto",
								}}
							>
								<div className="">
									<button
										style={{
											background: "#EB5757",
											boxShadow:
												"0px 1px 6px rgba(0, 0, 0, 0.1)",
											borderRadius: "16px",
											border: "none",
											padding: "10px",

											color: "white",
											cursor: "pointer",
										}}
										onClick={() => {
											handleClose();
											filterCards();
										}}
									>
										<i
											className="fas fa-search"
											style={{
												color: "white",
											}}
										></i>{" "}
										Submit
									</button>
								</div>
							</div>
						</div>

						{/* Show Location Dropdown and Add Guests*/}
						<div className="row">
							{showLocationList && (
								<div className="col-8">
									<ul className="city-list">
										{finlandCities.map((city, id) => (
											<li
												className="mt-4"
												onClick={() => {
													setLocationFilter(city);
												}}
												key={id}
											>
												<i className="fas fa-map-marker-alt"></i>{" "}
												{city}, Finland
											</li>
										))}
									</ul>{" "}
								</div>
							)}
							{showGuestList && (
								<div className="col-6 mx-auto text-center guest-list-dropdown">
									<div className="p-3">
										<div>
											<p>Adults</p>
											<p>Ages 13 or Above</p>
											<i
												style={{}}
												className="far fa-minus-square"
												onClick={() => {
													minusAdult();
												}}
											></i>{" "}
											{guestFilterAdult}{" "}
											<i
												style={{}}
												className="far fa-plus-square"
												onClick={() => {
													setGuestAdultFilter(
														guestFilterAdult + 1
													);
												}}
											></i>
										</div>
										<div className="mt-4">
											<p>Children</p>
											<p>Ages 2-12</p>
											<i
												className="far fa-minus-square"
												onClick={() => {
													minusChild();
												}}
											></i>{" "}
											{guestFilterChild}{" "}
											<i
												className="far fa-plus-square"
												onClick={() => {
													setGuestChildFilter(
														guestFilterChild + 1
													);
												}}
											></i>
										</div>
									</div>
								</div>
							)}
						</div>
					</Modal.Body>
				</Modal>
			</div>

			{/* Footer */}
			<footer
				className="row mt-4 p-4"
				style={{
					backgroundColor: "#1C313A",
					color: "white",
				}}
			>
				<div className="col-12 text-center">
					<p>Created By Adeoluwa Adeboye - devChallenge.io</p>
				</div>
			</footer>
		</>
	);
};

export default LandingPage;
