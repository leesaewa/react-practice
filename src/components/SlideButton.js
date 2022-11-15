import { IoIosArrowBack } from "react-icons/io";

function SlideButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`btn-${direction}`}>
      <IoIosArrowBack />
    </button>
  );
}

export default SlideButton;
