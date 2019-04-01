import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const MetaData = ({ reservationCount }) => (
  <Helmet>
    <title>{`Hilton Demo (${reservationCount} reservation${
      Boolean(reservationCount > 1) ? "s" : ""
    })`}</title>
    <style type="text/css">
      {`
      body {
        font-family: "Heebo", sans-serif;
      }
    `}
    </style>
  </Helmet>
)

MetaData.propTypes = {
  reservationCount: PropTypes.number,
}

MetaData.defaultProps = {
  reservationCount: 1,
}

export default MetaData
