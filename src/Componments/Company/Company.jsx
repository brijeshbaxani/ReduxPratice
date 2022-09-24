import React, { useState } from "react";
import "./company.css";
import { useDispatch, useSelector } from "react-redux";

const Company = () => {
  const [name, setName] = useState("");
  const [address, setAdderss] = useState("");
  const [revenue, setRevenue] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && address && revenue && phone) {
        let data = {
          name: name && name,
          address: address && address,
          revenue: revenue && revenue,
          phone: phone && phone,
        };
        dispatch({
          type: "AddCompanyData",
          payload: data,
        });
        setPhone("");
        setRevenue("");
        setAdderss("");
        setName("");
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
            <div className="header">Create New Company</div>
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
                value={address}
                type="text"
                placeholder="Enter Address"
                onChange={(e) => {
                  setAdderss(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <div>Revenue :</div>
              <input
                type="text"
                value={revenue}
                placeholder="Enter Revenue"
                onChange={(e) => {
                  setRevenue(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <div>Phone :</div>
              <input
                value={phone}
                type="text"
                placeholder="Enter Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></input>
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

export default Company;
