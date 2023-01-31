type PaginationBtnProps = {
  direction: "previous" | "next";
  handlePreviousClick: () => void;
  handleNextClick: () => void;
};

function PaginationBtn({
  direction,
  handlePreviousClick,
  handleNextClick,
}: PaginationBtnProps) {
  return (
    <button
      className="bg-white py-4 bg-opacity-5 rounded-full"
      onClick={direction === "previous" ? handlePreviousClick : handleNextClick}
    >
      {direction === "previous" ? "Previous" : "Next"}
    </button>
  );
}

export default PaginationBtn;
