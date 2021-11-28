import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingPage from "./components/LandingPage/LandingPage";

test("renders subheading", () => {
	render(<LandingPage />);
	expect(screen.getByText("Stays in Finland")).toHaveTextContent(
		"Stays in Finland"
	);
});

test("rendering initial number of stays updated", () => {
	render(<LandingPage />);
	expect(screen.getAllByText(/Stays/)[1]).toHaveTextContent("14 Stays");
});

test("Location Update", () => {
	render(<LandingPage />);
	userEvent.click(screen.getByText("Add Location"));
	userEvent.click(screen.getByText("LOCATION"));
	userEvent.click(screen.getByText("Helsinki, Finland"));
	userEvent.click(screen.getByText(/Submit/));
	expect(screen.getAllByText("Helsinki, Finland")[0]).toHaveTextContent(
		"Helsinki, Finland"
	);
});

test("Guest Increment", () => {
	render(<LandingPage />);
	userEvent.click(screen.getByText("Add guest"));
	userEvent.click(screen.getByText("GUESTS"));
	userEvent.click(screen.getByTitle("addAdult"));
	userEvent.click(screen.getByTitle("addAdult"));
	expect(screen.getByText("2 Guests")).toHaveTextContent("2 Guests");
});

test("Guest Decrement", () => {
	render(<LandingPage />);
	userEvent.click(screen.getByText("Add guest"));
	userEvent.click(screen.getByText("GUESTS"));
	userEvent.click(screen.getByTitle("addAdult"));
	userEvent.click(screen.getByTitle("addAdult"));
	userEvent.click(screen.getByTitle("minusAdult"));
	expect(screen.getByText("1 Guests")).toHaveTextContent("1 Guests");
});
