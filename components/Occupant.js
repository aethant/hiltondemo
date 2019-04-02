import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const occupants = {
  adult: { label: "Adults", qualifier: "(18+)" },
  children: { label: "Children", qualifier: "(0-17)" },
}

const Occupant = ({ active, roomid, range, occupant, inputHandler, value }) => {
  const { label, qualifier } = occupants[occupant]
  const localProps = {
    value,
    id: `${roomid}-${occupant}`,
    ...(active ? {} : { disabled: true }),
  }

  return (
    <ControlBox>
      <Label htmlFor={localProps.id} name={label}>
        <p>{label}</p>
        <p>{qualifier}</p>
        <Select
          {...localProps}
          onChange={({ currentTarget: { value } }) =>
            inputHandler({ room: roomid, occupant, value: parseInt(value, 10) })
          }
        >
          {range.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Label>
    </ControlBox>
  )
}

Occupant.propTypes = {
  active: PropTypes.bool,
  roomid: PropTypes.number.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  occupant: PropTypes.string,
  inputHandler: PropTypes.func.isRequired,
  value: PropTypes.number,
}

export default Occupant

const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
`

ControlBox.displayName = "ControlBox"

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;

  > p {
    margin: 0;
    font-size: 0.85rem;
  }
`

Label.displayName = "Label"

const Select = styled.select`
  width: 100%;
  margin: 5px 0 5px 0;
  font-size: 0.75rem;
`

Select.displayName = "Select"
