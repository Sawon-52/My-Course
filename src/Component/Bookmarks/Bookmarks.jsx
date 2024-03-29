import PropTypes from "prop-types";
import Craditremaining from "../Craditremaining/Craditremaining";
import Coursename from "../Coursename/Coursename";
import Cradittotal from "../Cradittotal/Cradittotal";
import Pricetotal from "../Pricetotal/Pricetotal";

const Bookmarks = ({ courseTitle, price, credit }) => {
  return (
    <div className=" bg-white rounded-lg p-5 ">
      <Craditremaining credit={credit}></Craditremaining>
      <hr className="my-4" />

      <div className="my-5">
        <h2 className="my-5 text-2xl font-bold">Course Name</h2>
        <hr className="my-4" />
        {courseTitle.map((courseTitle, idx) => (
          <Coursename courseTitle={courseTitle} key={idx} id={idx}></Coursename>
        ))}
      </div>

      <Cradittotal credit={credit}></Cradittotal>
      <hr className="my-4" />
      <Pricetotal price={price}></Pricetotal>
    </div>
  );
};

Bookmarks.propTypes = {
  courseTitle: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  credit: PropTypes.number.isRequired,
};

export default Bookmarks;
