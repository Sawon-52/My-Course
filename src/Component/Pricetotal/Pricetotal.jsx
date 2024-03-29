import PropTypes from "prop-types";

const Pricetotal = ({ price }) => {
  return (
    <div>
      <div className="text-xl font-bold text-gray-500">
        <h1> Total Price : {price.toFixed(2)} USD</h1>
      </div>
    </div>
  );
};

Pricetotal.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Pricetotal;
