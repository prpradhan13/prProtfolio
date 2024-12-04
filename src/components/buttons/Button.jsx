/* eslint-disable react/prop-types */

const Button = ({ btnName, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full font-montserrat text-sm dark:text-darkPrimaryText text-lightPrimaryText font-semibold border-2 border-lightBtnBg dark:border-darkBtnBg rounded-xl px-5 py-3 hover:bg-black hover:text-white dark:hover:bg-darkBtnBg dark:hover:text-black ease-linear duration-200`}
    >
      {btnName}
    </button>
  );
};

export default Button;
