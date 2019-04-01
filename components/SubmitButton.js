import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SubmitButton = ({ submitHandler, label, saving }) => (
  <Button type="submit" disabled={saving} onClick={submitHandler}>
    {saving ? "Saving..." : label}
  </Button>
)

SubmitButton.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  label: PropTypes.string,
  saving: PropTypes.bool,
}

SubmitButton.defaultProps = {
  label: "Submit",
  saving: false,
}

export default SubmitButton

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1.25rem;
`
