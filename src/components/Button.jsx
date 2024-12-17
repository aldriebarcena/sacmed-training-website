const Button = ({ text, isInverted, isBig }) => {
  return (
    <button
      type="button"
      className={`rounded-full text-base font-roboto font-semibold h-[50px] ${isInverted ? `text-mainTeal border-2 border-mainTeal` : `text-white  shadow-md bg-mainTeal`} ${isBig ? `w-56 ` : `w-36`}`}
    >
      {text}
    </button>
  );
};

export default Button;
