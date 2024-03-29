import "./App.css";
import Courses from "./Component/Courses/Courses";
function App() {
  return (
    <div className=" bg-slate-300 md:pt-10 p-5">
      <h1 className="text-4xl font-bold text-center mb-10">Course Registration </h1>

      <div className="md:w-2/3">
        <Courses></Courses>
      </div>
    </div>
  );
}

export default App;
