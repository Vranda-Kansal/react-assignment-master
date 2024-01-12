import { useState } from "react";
import EachInfo from "./EachInfo";

const Heading = ({
  haisiniFilteredData,
  TampereFilteredData,
  TaukaFilteredData,
}) => {
  const [city, setCity] = useState("Helsinki");
  const changeCity = (city) => {
    console.log("clicked");
    setCity(city);
  };
  return (
    <div>
      <div className="flex justify-between border-b-2 border-[#A4B8D3] font-bold text-[#004FB4]">
        <span
          onClick={() => changeCity("Helsinki")}
          className="ml-6 text-xl p-5"
        >
          Helsinki({haisiniFilteredData?.length})
        </span>
        <span onClick={() => changeCity("Tampere")} className="text-xl p-5">
          Tampere({TampereFilteredData?.length}){" "}
        </span>
        <span onClick={() => changeCity("Turku")} className="mr-6 text-xl p-5">
          Turku({TaukaFilteredData?.length})
        </span>
      </div>
      <div>
        {city === "Helsinki" && <EachInfo shifts={haisiniFilteredData} />}
        {city === "Tampere" && <EachInfo shifts={TampereFilteredData} />}
        {city === "Turku" && <EachInfo shifts={TaukaFilteredData} />}
      </div>
    </div>
  );
};
export default Heading;
