import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";

const user = {
  first_name: "Harshal",
  last_name: "Mahajan",
  email: "harshalmahajan173@gmail.com",
  gender: "Male",
};

function renderComponent() {
  render(<UserDetails user={user} />);
}

test("All items are rendered correctly after the API call is made and data is received", async () => {
  renderComponent();
  const allHeadings = screen.getAllByRole("heading");
  expect(allHeadings).toHaveLength(4);
  expect(await screen.findByText("Harshal")).toBeVisible();
  expect(await screen.findByText("Mahajan")).toBeVisible();
  expect(await screen.findByText("harshalmahajan173@gmail.com")).toBeVisible();
  expect(await screen.findByText("Male")).toBeVisible();
});
