import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons"

const Toggle = ({ roomId, toggleHandler, active }) => (
  <>
    <Label
      htmlFor={`room-${roomId}`}
      tabIndex={0}
      onChange={() => toggleHandler(roomId)}
      onKeyPress={() => toggleHandler(roomId)}
    >
      {roomId !== 1 && (
        <>
          <HiddenCheckbox
            aria-checked={active}
            aria-labelledby={`room-${roomId}`}
            checked={Boolean(active)}
            id={`room-${roomId}`}
            onChange={() => toggleHandler(roomId)}
            type="checkbox"
            room={roomId}
          />
          <DisplayedCheckbox
            room={roomId}
            aria-hidden={true}
            checked={active}
            icon={active ? faCheckSquare : faSquare}
          />
        </>
      )}
      Room {roomId}
    </Label>
  </>
)

Toggle.propTypes = {
  roomId: PropTypes.number.isRequired,
  active: PropTypes.bool,
  toggleHandler: PropTypes.func.isRequired,
}

Toggle.defaultProps = {
  active: false,
}

export default Toggle

const HiddenCheckbox = styled.input`
  display: ${props => props.displayable};
  font-size: 1.2rem;
  height: 1px;
  width: 1px;
  position: absolute;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  visibility: hidden;
`

const DisplayedCheckbox = styled(FontAwesomeIcon)`
  color: white;
  margin-right: 5px;
`

const Label = styled.label`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  padding-left: 10px;
  user-select: none;
  height: 100%;
`
