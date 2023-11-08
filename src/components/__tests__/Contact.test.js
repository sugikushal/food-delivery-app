import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should have a h tag in Contact component", () => {
    render(<Contact/>);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
});

test("Should have 2 input elements in Contact Component", () => {
    render(<Contact/>);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(2);
});

test("Should have a Submit Button in Contact Component", () => {
    render(<Contact/>);
    const button = screen.getByRole("button", {name: "Submit"});
    expect(button).toBeInTheDocument();
})