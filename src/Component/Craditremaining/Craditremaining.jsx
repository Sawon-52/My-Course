import PropTypes from "prop-types";

const Craditremaining = () => {
  return (
    <div className="my-5">
      <h2 className=" text-2xl font-bold text-blue-500 ">Credit Hour Remaining 7 hr</h2>
      <hr className="my-4" />
      <div>
        <h2 className="my-5 text-2xl font-bold">Course Name</h2>
        <ul className=" list-none text-xl space-y-1  text-gray-400 font-semibold">
          <li>Introduction to c programming</li>
          <li>Introduction to c programming</li>
          <li>Introduction to c programming</li>
        </ul>
      </div>
      <hr className="my-4" />
      <div className="text-xl font-bold text-gray-500">
        <h1> Total Credit Hour : 13</h1>
      </div>
      <hr className="my-4" />
      <div className="text-xl font-bold text-gray-500">
        <h1> Total Price : 48000 USD</h1>
      </div>
    </div>
  );
};

Craditremaining.propTypes = {};

export default Craditremaining;
