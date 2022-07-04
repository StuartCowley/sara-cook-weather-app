import React from "react";
import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  // if (errorMessage) {
  //   return <h1>{errorMessage}</h1>;
  // }
  // if (!errorMessage && city) {
  // return <h1 className="location-details">{`${city}, ${country}`}</h1>;
  // }
  // return <h1>No city searched!</h1>;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
}

export default LocationDetails;

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
