import { IoIosArrowBack } from "react-icons/io";

function SlideButton({ btnName, onClick }) {
  return (
    <button onClick={onClick} className={`btn-${btnName}`}>
      <IoIosArrowBack />
    </button>
  );
}

export default SlideButton;
