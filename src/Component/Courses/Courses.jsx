import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleAddtoBookmarks }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {courses.map((course, idx) => (
          <Course course={course} key={idx} handleAddtoBookmarks={handleAddtoBookmarks}></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleAddtoBookmarks: PropTypes.func.isRequired,
};

export default Courses;
