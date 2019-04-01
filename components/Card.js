import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Occupant from "@Components/Occupant"
import Toggle from "@Components/Toggle"

const controlOptions = [
  {
    occupant: "adult",
    range: [1, 2],
  },
  {
    occupant: "children",
    range: [0, 1, 2],
  },
]

const Card = ({ active, roomId, occupantHandler, ...rest }) => (
  <Wrapper active={active}>
    <Header active={active}>
      <Toggle active={active} roomId={roomId} {...rest} />
    </Header>
    <Controls>
      {controlOptions.map(({ occupant, range }) => (
        <Occupant
          key={`select-${roomId}-${occupant}`}
          active={active}
          roomid={roomId}
          occupant={occupant}
          range={range}
          value={rest[occupant]}
          inputHandler={occupantHandler}
        />
      ))}
    </Controls>
  </Wrapper>
)

Card.propTypes = {
  roomId: PropTypes.number.isRequired,
  active: PropTypes.bool,
  toggleHandler: PropTypes.func.isRequired,
  occupantHandler: PropTypes.func.isRequired,
  adult: PropTypes.number,
  children: PropTypes.number,
}

Card.defaultProps = {
  active: false,
}

export default Card

const Wrapper = styled.div.attrs(props => ({
  bg: props.active ? "#fff" : "#eaeaea",
}))`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 3px solid #d8d8d8;
  border-radius: 5px;
  background: ${props => props.bg};
`

Wrapper.displayName = "Wrapper"

const Header = styled.span.attrs(props => ({
  bg: props.active ? "#d8d8d8" : "#eaeaea",
}))`
  display: flex;
  align-items: center;
  align-content: center;
  height: 1.5rem;
  line-height: 1.2;
  background: ${props => props.bg};
  color: #000;
  padding: 5px;
  font-weight: 700;
`

Header.displayName = "Header"

const Controls = styled.section`
  display: flex;
  flex: 1;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
`
Controls.displayName = "Controls"
