import React from "react"
import { shallow, mount } from "enzyme"
import Occupant from "@Components/Occupant"

const RANGES = {
  adult: [1, 2],
  children: [0, 1, 2],
}

describe("<Occupant />", () => {
  it("should render an Adult occupant(s) selection control", () => {
    const occupant = "adult"
    const control = shallow(
      <Occupant
        occupant={occupant}
        roomid={1}
        value={1}
        range={RANGES[occupant]}
        inputHandler={() => {}}
      />
    )

    expect(control.length).toEqual(1)
    expect(control.find("p").length).toEqual(2)
    expect(
      control
        .find("p")
        .first()
        .text()
    ).toBe("Adults")
  })

  it("should render an Child occupant(s) selection control", () => {
    const occupant = "children"
    const control = mount(
      <Occupant
        occupant={occupant}
        roomid={1}
        value={1}
        range={RANGES[occupant]}
        inputHandler={() => {}}
      />
    )

    expect(control.length).toEqual(1)
    expect(control.find("p").length).toEqual(2)
    expect(
      control
        .find("p")
        .first()
        .text()
    ).toBe("Children")
  })

  it("should fire the selection handler when an occupancy selection is made", () => {
    const occupant = "children"
    const mockHandler = jest.fn()
    const control = mount(
      <Occupant
        occupant={occupant}
        roomid={1}
        value={1}
        range={RANGES[occupant]}
        inputHandler={mockHandler}
      />
    )

    control.find("select").simulate("change", { target: { value: 1 } })

    expect(mockHandler).toHaveBeenCalled()
  })
})
