import React from "react"
import { mount } from "enzyme"

import Toggle from "@Components/Toggle"

describe("<Toggle />", () => {
  it("should render an inactive toggle element", () => {
    const toggle = mount(
      <Toggle roomId={1} toggleHandler={() => {}} active={false} />
    )

    expect(toggle).toBeDefined()
  })

  it("should render an active toggle element", () => {
    const toggle = mount(
      <Toggle roomId={1} toggleHandler={() => {}} active={true} />
    )

    expect(toggle).toBeDefined()
  })

  it("should not toggle from active to inactive on change event when first room card", () => {
    const mockClick = jest.fn()
    const toggle = mount(
      <Toggle roomId={1} toggleHandler={mockClick} active={true} />
    )

    expect(toggle.find("input")).toEqual({})
  })

  it("should toggle from active to inactive on change event", () => {
    const mockClick = jest.fn()
    const toggle = mount(
      <Toggle roomId={2} toggleHandler={mockClick} active={true} />
    )

    toggle.find("label").simulate("change")
    expect(mockClick).toHaveBeenCalled()
  })

  it("should toggle from inactive to active on change event", () => {
    const mockClick = jest.fn()
    const toggle = mount(
      <Toggle roomId={2} toggleHandler={mockClick} active={false} />
    )

    toggle.find("label").simulate("change")
    expect(mockClick).toHaveBeenCalled()
  })

  it("should toggle from active to inactive on change event on checkbox itself", () => {
    const mockClick = jest.fn()
    const toggle = mount(
      <Toggle roomId={2} toggleHandler={mockClick} active={true} />
    )

    toggle.find("input").simulate("change")
    expect(mockClick).toHaveBeenCalled()
  })

  it("should toggle from inactive to active on keypress event", () => {
    const mockKeyPress = jest.fn()
    const toggle = mount(
      <Toggle roomId={2} toggleHandler={mockKeyPress} active={true} />
    )

    toggle.find("label").simulate("keypress")
    expect(mockKeyPress).toHaveBeenCalled()
  })

  it("should toggle from active to inactive on keypress event", () => {
    const mockKeyPress = jest.fn()
    const toggle = mount(
      <Toggle roomId={2} toggleHandler={mockKeyPress} active={false} />
    )

    toggle.find("label").simulate("keypress")
    expect(mockKeyPress).toHaveBeenCalled()
  })
})
