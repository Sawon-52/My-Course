import { useState } from "react";
import "./App.css";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Courses from "./Component/Courses/Courses";
import { RxCross2 } from "react-icons/rx";
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

  return (
    <div className=" bg-slate-300 md:pt-10 p-5 ">
      <h1 className="text-4xl font-bold text-center mb-10">Course Registration </h1>

      <div className="md:flex gap-5">
        <div className="md:w-[75%]">
          <Courses handleAddtoBookmarks={handleAddtoBookmarks}></Courses>
        </div>
        <div className="md:w-[25%]">
          <Bookmarks courseTitle={courseTitle} price={price} credit={credit}></Bookmarks>
        </div>
      </div>

      {showToast ? <Toast></Toast> : ""}
    </div>
  );
}

export default App;
