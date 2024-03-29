import PropTypes from "prop-types";

const Craditremaining = ({ credit = 0 }) => {
  
  
  return (
    
    <div className="my-5">
      <h2 className=" text-2xl font-bold text-blue-500 ">Credit Hour Remaining {credit} hr</h2>
    </div>
  );
};

Craditremaining.propTypes = {
  credit: PropTypes.number.isRequired,
};

export default Craditremaining;
