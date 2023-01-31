import { TableElement } from "./Table";

type ModalProps = {
  element: TableElement | null;
};

function Modal({ element }: ModalProps) {
  return (
    <>
      {element && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 max-w-xs sm:max-w-sm w-full">
          <div className="max-h-screen backdrop-blur-3xl px-12 py-8 rounded-lg overflow-hidden">
            <h1 className="text-4xl">
              {element.name
                .slice(0, 1)
                .toUpperCase()
                .concat(element.name.slice(1))}
            </h1>
            <hr className="my-4 opacity-30" />

            <div className="flex items-center justify-between">
              <p className="text-xl">Id</p>
              <p className="text-lg p-2 rounded-full">{element.id}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xl">Color</p>
              <p
                className="text-lg p-2 rounded-full"
                style={{ backgroundColor: element.color }}
              >
                {element.color}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">Year</p>
              <p className="text-lg p-2 rounded-full">{element.year}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xl">Panton Value</p>
              <p className="text-lg p-2 rounded-full">
                {element.pantone_value}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
