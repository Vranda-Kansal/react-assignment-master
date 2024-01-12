import { useSelector } from "react-redux";
import AvailableButton from "./AvailableButton";
import { calculatedTime } from "../utils/constants";
import MyShiftButton from "./MyShiftButton";

const Book = ({ shift }) => {
  const nowShift = useSelector((store) => store.shifts.changeShift);

  return (
    <div>
      <div className="flex justify-between items-center p-4 text-[#4F6C92] text-lg border-b-2 border-[#A4B8D3]">
        <p>
          {/* start Time */}
          {/* Start Time:{" "} */}
          {calculatedTime(shift.startTime)} - {calculatedTime(shift.endTime)}
        </p>
        {nowShift === "Available shifts" ? (
          <AvailableButton shift={shift} />
        ) : (
          <MyShiftButton shift={shift} />
        )}
      </div>
    </div>
  );
};
export default Book;
