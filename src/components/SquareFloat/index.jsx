import "./squareFloat.css";

const SquareFloat = ({
  top = 0,
  left = 0,
  size = "400px",
  opacity = "0.3",
  animationDelay = 0,
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(0deg,#3358f4,#1d8cf8)",
        width: size,
        height: size,
        opacity,
        borderRadius: "20%",
        position: "absolute",
        top,
        left,
        zIndex: -1,
        animation: "moveLR 7s infinite",
        animationDelay,
      }}
    ></div>
  );
};
export default SquareFloat;
