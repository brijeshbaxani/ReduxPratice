import React, { useEffect, useState } from "react";
import EmployCard from "../EmployCard/EmployCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyDetailsCard = (props) => {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  const [selectedEmploy, setSelectedEmploy] = useState();
  const { employListArray, companyListArray } = useSelector(
    (state) => state.custom
  );

  useEffect(() => {
    const items = companyListArray && companyListArray;
    if (items) {
      setItems(items[id]);
    }
    const employItems = employListArray && employListArray;
    if (employItems) {
      const data = employItems.filter((data, key) => {
        return data?.companyName == companyListArray[id]?.name;
      });
      setSelectedEmploy(data);
    }
  }, []);

  return (
    <>
      <div className="row" style={{ marginTop: 15 }}>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0 col-0"></div>
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12">
          <div
            style={{
              margin: "15px 30px",
              border: "1px solid ",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                borderBottom: "1px solid",
                padding: "20px 30px",
                background: "#dddbdb",
              }}
            >
              Profile Overview
            </div>
            <div className="row" style={{ padding: " 15px 30px" }}>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div>Address :</div>
                <div>{items.address}</div>
                <div>Revanue :</div>
                <div>{items.revenue}</div>
                <div>Phone :</div>
                <div>{items.phone}</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div>Total Employe :</div>
                <div>{selectedEmploy?.length}</div>
              </div>
            </div>
          </div>

          <div
            style={{
              margin: "20px 30px",
              border: "1px solid",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                borderBottom: "1px solid",
                padding: "20px 30px",
                background: "#dddbdb",
              }}
            >
              Employs List
            </div>
            <div style={{ padding: "0px 80px" }}>
              {selectedEmploy && selectedEmploy.length > 0 ? (
                <>
                  {selectedEmploy?.map((data, key) => {
                    return <EmployCard data={data} />;
                  })}
                </>
              ) : (
                <div style={{ padding: 50, textAlign: "center" }}>
                  please add employ details
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0 col-0"></div>
      </div>
    </>
  );
};

export default CompanyDetailsCard;
