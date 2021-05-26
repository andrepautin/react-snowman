import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

test("should display message 'You lose' after max wrong guesses", function () {
  const {container} = render(<Snowman maxWrong={1} word={["apple"]}/>);
  expect(container.querySelector(".Snowman-lose")).not.toBeInTheDocument();

  fireEvent.click(container.querySelector('button[value="z"]'));

  expect(container.querySelector(".Snowman-lose")).toBeInTheDocument();
});

test("watches snapshot", function () {
  const {container} = render(<Snowman maxWrong={1} word={["apple"]}/>);

  expect(container).toMatchSnapshot();
});