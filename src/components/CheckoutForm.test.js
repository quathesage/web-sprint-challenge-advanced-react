import React from "react";
 import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>)

  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm/>)

  const firstName = screen.getByLabelText('First Name:')
  const lastName = screen.getByLabelText('Last Name:')
  const address = screen.getByLabelText('Address:')
  const city = screen.getByLabelText('City:')
  const state = screen.getByLabelText('State:')
  const zip = screen.getByLabelText('Zip:')
  const button = screen.getByRole('button')

  userEvent.type(firstName, 'DeQuavion');
  userEvent.type(lastName,'Wilburn');
  userEvent.type(address, '1234 Farm rd');
  userEvent.type(city, 'Murfreesboro');
  userEvent.type(state, 'Tennessee');
  userEvent.type(zip, '123456');
  userEvent.click(button);

  const successMessage = await screen.findByTestId('successMessage');

  expect(successMessage).toBeInTheDocument();
});
