import React from "react"
import { shallow } from "enzyme"

import SubmitButton from "@Components/SubmitButton"

describe("<SubmitButton />", () => {
  it("should render the basic button", () => {
    const button = shallow(
      <SubmitButton submitHandler={() => {}} saving={false} />
    )
    expect(button).toBeDefined()
    expect(button.text()).toEqual("Submit")
  })

  it("should render a button with a provided label", () => {
    const button = shallow(
      <SubmitButton submitHandler={() => {}} label="Fake" saving={false} />
    )
    expect(button).toBeDefined()
    expect(button.text()).toEqual("Fake")
  })

  it("should fire the button handler when clicked", () => {
    const mockHandler = jest.fn()
    const button = shallow(
      <SubmitButton submitHandler={mockHandler} saving={false} />
    )
    button.simulate("click")

    expect(button).toBeDefined()
    expect(mockHandler).toHaveBeenCalled()
  })

  it("should display a saving message when saving prop is true", () => {
    const button = shallow(
      <SubmitButton submitHandler={() => {}} saving={true} />
    )
    expect(button).toBeDefined()
    expect(button.text()).toEqual("Saving...")
  })
})
