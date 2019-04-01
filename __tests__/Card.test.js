import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import Card from "@Components/Card"
import Occupant from "@Components/Occupant"

describe("<Card />", () => {
  it("should display an inactive room selection card", () => {
    const card = mount(
      <Card
        active={false}
        roomId={2}
        occupantHandler={() => {}}
        toggleHandler={() => {}}
      />
    )

    expect(card).toBeDefined()
    expect(card.find("Wrapper")).toHaveStyleRule("background", "#eaeaea")
    expect(card.find("Header")).toHaveStyleRule("background", "#eaeaea")
  })

  it("should display an active room selection card", () => {
    const card = mount(
      <Card
        active={true}
        roomId={1}
        occupantHandler={() => {}}
        toggleHandler={() => {}}
      />
    )

    expect(card).toBeDefined()
    expect(card.find("Wrapper")).toHaveStyleRule("background", "#fff")
    expect(card.find("Header")).toHaveStyleRule("background", "#d8d8d8")
  })

  it("should have an two occupant selection controls", () => {
    const card = shallow(
      <Card
        active={true}
        roomId={1}
        occupantHandler={() => {}}
        toggleHandler={() => {}}
      />
    )

    expect(card.find(Occupant).length).toEqual(2)
  })

  it("should omit a checkbox on the first room", () => {
    const cardOne = mount(
      <Card
        active={true}
        roomId={1}
        occupantHandler={() => {}}
        toggleHandler={() => {}}
      />
    )

    const cardTwo = mount(
      <Card
        active={true}
        roomId={2}
        occupantHandler={() => {}}
        toggleHandler={() => {}}
      />
    )

    expect(cardOne.find("input[type='checkbox']").length).toBe(0)
    expect(cardTwo.find("input[type='checkbox']").length).toBe(1)
  })
})
