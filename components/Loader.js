import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

const Loader = () => (
  <Wrapper>
    <FontAwesomeIcon icon={faSpinner} spin fixedWidth size="sm" />
    &nbsp;LOADING
  </Wrapper>
)

export default Loader

const Wrapper = styled.div`
  font-size: 1rem;
  max-height: 2.5rem;
  display: flex;
  flex: 1;
`
