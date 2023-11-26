import { render, screen } from "@testing-library/react";
import { FluentSearch } from "./FluentSearch";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("FluentSearch", () => {
  it("given useOnSearch=true user types and then presses enter should call provided onSearch callback", async () => {
    // arrange
    const user = userEvent.setup();
    const onSearchMock = jest.fn();

    // act
    render(<FluentSearch onSearch={onSearchMock} userOnSearch={true} />);
    await user.type(screen.getByRole("searchbox"), "test{Enter}");

    // assert
    expect(onSearchMock).toHaveBeenCalled();
  });

  it("given useOnSearch=false user types and then presses enter should call provided onSearch callback", async () => {
    // arrange
    const user = userEvent.setup();
    const onSearchMock = jest.fn();

    // act
    render(<FluentSearch onSearch={onSearchMock} userOnSearch={false} />);
    await user.type(screen.getByRole("searchbox"), "test{Enter}");

    // assert
    expect(onSearchMock).toHaveBeenCalled();
  });
});
