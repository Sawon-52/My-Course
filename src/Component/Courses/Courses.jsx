import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {courses.map((course, idx) => (
          <Course course={course} key={idx}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
