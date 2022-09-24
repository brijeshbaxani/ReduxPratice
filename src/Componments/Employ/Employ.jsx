import React, { useState } from "react";
import "./employ.css";
import { useDispatch } from "react-redux";

const Employ = () => {
  const [name, setName] = useState("");
  const [address, setAdderss] = useState("");
  const [companyes, setCompanyes] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && address) {
        let data = {
          name: name && name,
          address: address && address,
          companyName: companyes && companyes,
        };
        dispatch({
          type: "AddEmploayData",
          payload: data,
        });
        setAdderss("");
        setName("");
        setCompanyes("")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="MainDiv">
        <form onSubmit={handleSubmit}>
          <div className="subDiv">
            <div className="header">Create New Employ</div>

            <div className="inputdata">
              <div>Name :</div>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <div>Address :</div>
              <input
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => {
                  setAdderss(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <select
                className="selectOptions"
                value={companyes && companyes}
                onChange={(e) => {
                  setCompanyes(e.target.value);
                }}
              >
                <option value="">Select Company</option>
                <option value="amazon">Amazon</option>
                <option value="tesla">Tesla</option>
                <option value="google">Google</option>
              </select>
            </div>

            <button className="save" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Employ;
