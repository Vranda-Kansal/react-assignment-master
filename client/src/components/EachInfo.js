import { groupShiftsByDate } from "../utils/constants";
import Available from "./Available";

const EachInfo = ({ shifts }) => {
  return (
    <div>
      {groupShiftsByDate(shifts).map((category, index) => (
        <Available key={index} category={category} />
      ))}
    </div>
  );
};
export default EachInfo;
