import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

test("should display message 'You lose' after max wrong guesses", function () {
  const {container} = render(<Snowman maxWrong={1} word={["apple"]}/>);
  // TODO: test not working--> incorrect query?
  fireEvent.click(container.querySelectorAll('button[value="z"]'));

  expect(container.querySelector('.Snowman')).toContainHTML("You lose");
});