import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { image, title, details, price, credit } = course;
  return (
    <div className=" bg-white rounded-md p-5 max-w-[480px] space-y-4 flex flex-col justify-between">
      <img className="w-full h-52 object-cover object-center rounded-lg" src={image} alt="Course Image" />
      <h1 className=" text-2xl font-bold">{title}</h1>
      <p className="text-xl text-gray-500 font-semibold text-justify">{details}</p>
      <div className="flex justify-between gap-2">
        <h3 className=" text-xl font-bold">Price: {price}</h3>
        <h3 className=" text-xl font-bold">Credit: {credit} hr</h3>
      </div>
      <div className="w-full cursor-pointer bg-sky-500 hover:bg-sky-700 text-white text-2xl font-bold p-2 text-center rounded-lg">
        <button>Select</button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
