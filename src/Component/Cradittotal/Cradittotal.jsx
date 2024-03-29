import PropTypes from "prop-types";

const Cradittotal = ({ credit }) => {
  return (
    <div>
      <div className="text-xl font-bold text-gray-500">
        <h1> Total Credit Hour : {credit} hr</h1>
      </div>
    </div>
  );
};

Cradittotal.propTypes = {
  credit: PropTypes.number.isRequired,
};

export default Cradittotal;
