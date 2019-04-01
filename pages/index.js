import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components"
import unionBy from "lodash/unionBy"
import { Helmet } from "react-helmet"

import Loader from "@Components/Loader"
import Card from "@Components/Card"
import SubmitButton from "@Components/SubmitButton"

class RoomAvailability extends Component {
  AVAILABLE_ROOM_COUNT = 4
  LOCAL_STORAGE_KEY = "HiltonRoomFormData"
  DEFAULT_BOX = { active: false, children: 0, adult: 1 }

  state = {
    loaded: false,
    saving: false,
    boxes: new Array(this.AVAILABLE_ROOM_COUNT).fill().reduce(
      (aggregator, _, index) => [
        ...aggregator,
        {
          ...this.DEFAULT_BOX,
          roomId: index + 1,
          active: !index,
        },
      ],
      []
    ),
  }

  handleOccupantChanges = ({ room, occupant, value }) => {
    const boxes = this.state.boxes.reduce(
      (aggregate, box) => [
        ...aggregate,
        box.roomId === room ? { ...box, [occupant]: value } : box,
      ],
      []
    )

    this.setState({ boxes })
  }

  processActivationTriggering = id => {
    const { boxes } = this.state
    const { active } = boxes.find(box => box.roomId === id)

    return active
      ? boxes.map(box =>
          box.roomId >= id ? { ...box, ...this.DEFAULT_BOX } : box
        )
      : boxes.map(box => (box.roomId <= id ? { ...box, active: true } : box))
  }

  handleActivationClick = roomId =>
    this.setState({
      boxes: this.processActivationTriggering(roomId),
    })

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ saving: true }, () =>
      localStorage.setItem(
        this.LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.boxes)
      )
    )

    setTimeout(() => this.setState({ saving: false }), 500)
  }

  componentDidMount() {
    const savedBoxData = JSON.parse(
      localStorage.getItem(this.LOCAL_STORAGE_KEY)
    )
    const boxes = savedBoxData
      ? { boxes: unionBy(savedBoxData, this.state.boxes, "roomId") }
      : {}

    this.setState({ ...boxes, loaded: true })
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            {`Hilton Demo (${
              this.state.boxes.filter(v => v.active).length
            } reservations)`}
          </title>
          <style type="text/css">
            {`
                body {
                  font-family: "Heebo", sans-serif;
                }
              `}
          </style>
        </Helmet>
        <Form action="/submit" method="POST">
          <Section loaded={!this.state.loaded}>
            <Loader />
          </Section>
          <Section loaded={this.state.loaded}>
            {this.state.boxes.map(box => (
              <Card
                {...box}
                key={box.roomId}
                toggleHandler={this.handleActivationClick}
                occupantHandler={this.handleOccupantChanges}
              />
            ))}
          </Section>
          <Section loaded={this.state.loaded}>
            <SubmitButton
              submitHandler={this.handleSubmit}
              saving={this.state.saving}
            />
          </Section>
        </Form>
      </>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-left: 10%;
  margin-right: 10%;
  min-height: 10rem;
`

Form.displayName = "Form"

const Section = styled.section.attrs(props => ({
  displayable: props.loaded ? "flex" : "none",
}))`
  display: ${props => props.displayable};
  justify-content: flex-start;
  align-content: space-between;
  flex: 1;
  flex-wrap: wrap;
`
Section.displayName = "Section"

export default RoomAvailability
