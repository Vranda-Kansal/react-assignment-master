import "./App.css";
import { useEffect, useState } from "react";
import { getShifts } from "./services/api";
import { filterShiftsByArea } from "./utils/constants";
import EachInfo from "./components/EachInfo";
import { useSelector, useDispatch } from "react-redux";
import { changeShift } from "./utils/shiftSlice";
import Heading from "./components/Heading";

const App = () => {
  const [haisiniFilteredData, sethaisiniFilteredData] = useState([]);
  const [TampereFilteredData, setTampereFilteredData] = useState([]);
  const [TaukaFilteredData, setTaukaFilteredData] = useState([]);
  const dispatch = useDispatch();

  const bookedShifts = useSelector((store) => store.shifts.bookedShifts);
  const selectedShift = useSelector((store) => store.shifts.changeShift);

  const handleClick = (e) => {
    dispatch(changeShift(e.target.outerText));
  };

  const fetchData = async () => {
    let res = await getShifts();
    sethaisiniFilteredData(filterShiftsByArea(res, "Helsinki"));
    setTampereFilteredData(filterShiftsByArea(res, "Tampere"));
    setTaukaFilteredData(filterShiftsByArea(res, "Turku"));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-8 pt-8 pb-5 mr-96 cursor-pointer">
        <span
          className=" text-3xl text-[#004FB4]"
          onClick={(e) => handleClick(e)}
        >
          My shifts
        </span>
        <span
          className=" text-3xl text-[#004FB4] ml-10 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          Available shifts
        </span>
      </div>
      <div className="w-1/2 bg-white shadow-2xl border-2 border-[#A4B8D3] rounded-lg">
        {selectedShift === "My shifts" ? (
          <EachInfo shifts={bookedShifts} />
        ) : (
          <Heading
            haisiniFilteredData={haisiniFilteredData}
            TampereFilteredData={TampereFilteredData}
            TaukaFilteredData={TaukaFilteredData}
          />
        )}
        <div></div>
      </div>
    </div>
  );
};

export default App;
