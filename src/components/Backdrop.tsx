type BackdropProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Backdrop({ setIsOpen }: BackdropProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30"
      onClick={() => setIsOpen(false)}
    ></div>
  );
}

export default Backdrop;
