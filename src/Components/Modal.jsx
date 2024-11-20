import { FaRegClock } from "react-icons/fa6";

const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <FaRegClock className="mx-auto text-5xl text-bgbton" />
          </div>
          <div className="text-center mt-5">
            <h3 className="font-bold text-lg">
              {" "}
              Consultation Time Unavailable!
            </h3>
            <p className="py-4">
              Thank you so much for riching us. Unfortunately we're not avalible
              now. Our consultation team is open form 10:00 AM to 8:00 PM.
              Please visit during this time or provide a message for further
              assistance.
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-block bg-blue-400 text-white font-semibold text-xl hover:bg-blue-600">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
