import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"

import RoomAvailability from "@Pages/index"

describe("<RoomAvailability />", () => {
  it("should render the component", () => {
    const home = shallow(<RoomAvailability />)
    expect(home).toBeDefined()
  })

  it("should display a section when loaded prop is true", () => {
    const home = mount(<RoomAvailability />)
    expect(home.first("Section")).toHaveStyleRule("display", "flex")
    expect(home.first("Section")).not.toHaveStyleRule("display", "none")
  })

  it("should trigger a save state when submitted", () => {
    const home = mount(<RoomAvailability />)
    home.find("SubmitButton").simulate("click")
    expect(home.state().saving).toBe(true)
  })

  it("should change box state when an inactive room is actived", () => {
    const home = mount(<RoomAvailability />)
    home
      .find("Card")
      .at(1)
      .find("input")
      .simulate("change")

    expect(home.state().boxes.find(v => v.roomId === 2)).toEqual({
      active: true,
      adult: 1,
      children: 0,
      roomId: 2,
    })
  })

  it("should change box state when an active room is deactived", () => {
    const home = mount(<RoomAvailability />)
    home
      .find("Card")
      .at(1)
      .find("input")
      .simulate("change")

    expect(home.state().boxes.find(v => v.roomId === 2)).toEqual({
      active: true,
      adult: 1,
      children: 0,
      roomId: 2,
    })

    home
      .find("Card")
      .at(1)
      .find("input")
      .simulate("change")

    expect(home.state().boxes.find(v => v.roomId === 2)).toEqual({
      active: false,
      adult: 1,
      children: 0,
      roomId: 2,
    })
  })

  it("should modify state when occupants are changed", () => {
    const home = mount(<RoomAvailability />)

    home
      .find("Card")
      .first("select")
      .props()
      .occupantHandler({ room: 1, occupant: "adult", value: 2 })

    expect(home.state().boxes.find(v => v.roomId === 1)).toEqual({
      active: true,
      adult: 2,
      children: 0,
      roomId: 1,
    })
  })
})
