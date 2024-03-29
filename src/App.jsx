import { useState } from "react";
import "./App.css";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Courses from "./Component/Courses/Courses";

import Toast from "./Component/Toast/Toast";

function App() {
  const [courseTitle, setCourseTitle] = useState([]);
  const [price, setPrice] = useState(0);
  const [credit, setCradit] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleAddtoBookmarks = (title, CoursePrice, CourseCredit) => {
    console.log("Clicked");
    const newCourseTitle = [...courseTitle, title];

    const newPrice = price + CoursePrice;

    const newCredit = credit + CourseCredit;
    if (newCredit <= 20) {
      setCourseTitle(newCourseTitle);
      setCradit(newCredit);
      setPrice(newPrice);
    } else {
      setShowToast(true);
    }
  };

  const handleTost = () => {
    setShowToast(false);
  };

  return (
    <div className=" bg-slate-300 md:pt-10 p-5 ">
      <h1 className="text-4xl font-bold text-center mb-10">Course Registration </h1>

      <div className=" flex flex-col lg:flex-row gap-5">
        <div className="lg:w-[75%] my-4">
          <Courses handleAddtoBookmarks={handleAddtoBookmarks}></Courses>
        </div>
        <div className="lg:w-[25%] my-4">
          <Bookmarks courseTitle={courseTitle} price={price} credit={credit}></Bookmarks>
        </div>
      </div>

      {showToast ? <Toast handleTost={handleTost}></Toast> : ""}
    </div>
  );
}

export default App;
