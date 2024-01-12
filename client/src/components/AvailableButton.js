import { addShifts, bookedShifts } from "../utils/shiftSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bookShift, cancelShift } from "../services/api";

const AvailableButton = ({ shift }) => {
  const [status, setstatus] = useState(false);
  const [disable, setDisbale] = useState(false);
  const [text, setText] = useState(true);
  console.log(status);

  const dispatch = useDispatch();

  const myShifts = useSelector((store) => store.shifts.myshifts);
  const booked = useSelector((store) => store.shifts.bookedShifts);

  useEffect(() => {
    myShifts.forEach((item) => {
      if (item[0] <= shift.startTime && item[1] >= shift.endTime) {
        setDisbale(true);
      }
    });
  }, []);

  const CancelShift = async (id, start, end, shift) => {
    await cancelShift(id);
    myShifts.filter((shift) => shift[0] !== start && shift[1] !== end);
    booked.filter((item) => item !== shift);
    setstatus(false);
  };

  const ShiftBook = async (id, start, end, shift) => {
    setText(false);
    console.log("button");
    let res = await bookShift(id);
    console.log(res);
    dispatch(addShifts([start, end]));
    dispatch(bookedShifts(shift));
    setstatus(true);
    setText(true);
  };
  return (
    <div>
      {" "}
      {disable ? (
        <button
          className="rounded-full px-10 py-1 border-2 border-[#E2006A] text-[#E2006A] disabled:opacity-35 "
          disabled
        >
          Book
        </button>
      ) : status ? (
        <button
          className="rounded-full px-8 py-1 border-2 border-[#E2006A] text-[#E2006A] cursor-pointer "
          onClick={() =>
            CancelShift(shift.id, shift.startTime, shift.endTime, shift)
          }
        >
          Cancel
        </button>
      ) : (
        <button
          className="rounded-full px-10 py-1 border-2 border-[#16A64D] text-[#16A64D] cursor-pointer"
          onClick={() =>
            ShiftBook(shift.id, shift.startTime, shift.endTime, shift)
          }
        >
          {text ? "Book" : "Loading"}
        </button>
      )}
    </div>
  );
};
export default AvailableButton;
