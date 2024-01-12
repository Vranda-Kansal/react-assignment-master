import { useSelector } from "react-redux";
import { cancelShift, getShiftBYid } from "../services/api";
import { calculatedTime } from "../utils/constants";
import { addShifts } from "../utils/shiftSlice";

const currTime = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: false,
});

const MyShiftButton = ({ shift }) => {
  const bookedShifts = useSelector((store) => store.shifts.bookedShifts);

  const CancelShift = async (id, start, end, shift) => {
    await cancelShift(id);
    await getShiftBYid(id);
    bookedShifts.filter((item) => shift.id !== item.id);
  };

  return (
    <div>
      <div>
        {" "}
        {currTime <= calculatedTime(shift.startTime) ? (
          <button
            className="rounded-full px-10 py-1 border-2 border-[#E2006A] text-[#E2006A] disabled:opacity-35 "
            disabled
          >
            Cancel
          </button>
        ) : (
          <button
            className="rounded-full px-8 py-1 border-2 border-[#E2006A] text-[#E2006A]"
            onClick={() =>
              CancelShift(shift.id, shift.startTime, shift.endTime, shift)
            }
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};
export default MyShiftButton;
