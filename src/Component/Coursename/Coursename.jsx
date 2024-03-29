import PropTypes from "prop-types";

const Coursename = ({ courseTitle, id }) => {
  return (
    <div>
      <ul className=" list-none text-xl space-y-2  text-gray-400 font-semibold">
        <li>
          {id + 1} {courseTitle}
        </li>
      </ul>
    </div>
  );
};

Coursename.propTypes = {
  courseTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Coursename;
