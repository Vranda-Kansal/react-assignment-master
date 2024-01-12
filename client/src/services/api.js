import axios from "axios";
import { URL } from "../utils/constants";

export const getShifts = async () => {
  try {
    let response = await axios.get(URL + "/shifts");
    return response.data;
  } catch (err) {
    console.log("Error in fetching all the shifts", err.message);
  }
};

export const bookShift = async (id) => {
  try {
    // console.log(id);
    await axios.post(URL + "/shifts/" + { id } + "/book");
  } catch (err) {
    console.log("Error in booking the shift", err.message);
  }
};

export const cancelShift = async (id) => {
  try {
    await axios.post(URL + "/shifts/" + { id } + "/cancel");
  } catch (err) {
    console.log("Error in cancelling the shift", err.message);
  }
};

export const getShiftBYid = async (id) => {
  try {
    await axios.post(URL + "/shifts/" + { id });
  } catch (err) {
    console.log("Error in cancelling my shift", err.message);
  }
};
