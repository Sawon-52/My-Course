import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
const Toast = ({ handleTost }) => {
  return (
    <div>
      <div className="fixed bottom-5 p-4 bg-red-500 text-white rounded-lg text-xl flex items-center gap-5">
        <h1>You cannot Acces Course</h1>
        <h1 onClick={handleTost}>
          <RxCross2 />
        </h1>
      </div>
    </div>
  );
};

Toast.propTypes = {
  handleTost: PropTypes.func.isRequired,
};

export default Toast;
