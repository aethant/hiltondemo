import React from "react"
import { shallow } from "enzyme"

import Meta from "@Components/Meta"

describe("<Meta />", () => {
  it("should present the title with the count provided", () => {
    const meta = shallow(<Meta reservationCount={4} />)
    expect(meta.find("title").text()).toEqual("Hilton Demo (4 reservations)")
  })

  it("should use the default count if none is passed via props", () => {
    const meta = shallow(<Meta />)
    expect(meta.find("title").text()).toEqual("Hilton Demo (1 reservation)")
  })
})
