import React, { useState } from "react";
import "./landingpage.css";
import Stays from "../../store/stays";

const LandingPage = () => {
	console.log(Stays);
	const [stays, setStays] = useState(Stays);

	return (
		<>
			<div className="container">
				{/* Nav Area with Search */}
				<div className="row pt-4">
					<div className="col-sm-6">
						<div className="text-left">
							<img
								className="img-fluid"
								src="../../../images/logo.png"
								alt="Logo"
							></img>
						</div>
					</div>
					<div className="col-sm-6">
						<div
							className="text-center"
							style={{
								boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
								borderRadius: "16px",
								padding: "10px",
							}}
						>
							<span>Helsinki, Finland |</span>
							<span> Add guest |</span>
							<span>
								{" "}
								<i
									class="fas fa-search"
									style={{
										color: "rgba(235, 87, 87, 0.72)",
									}}
								></i>
							</span>
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
			</div>
		</>
	);
};

export default LandingPage;
