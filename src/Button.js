import PropTypes from "prop-types";

function Button({ text }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "#fff",
      }}
    >
      {text}
    </button>
  );
}

Button.prototypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
