import React from "react"
import { shallow } from "enzyme"

import Loader from "@Components/Loader"

describe("<Loader />", () => {
  it("should render the loader component", () => {
    const loader = shallow(<Loader />)
    expect(loader).toBeDefined()
  })
})
