import { MenuItem } from "ManueItem";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const BeveragesMenu = () => {
  return (
    <div className="ms-md-5 ps-md-4 ">
      <div className="container-fluid">
        <div className="top-image text-center">
          <img
            className="img-fluid"
            src="https://chaldn.com/_mpimage/fruits-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D75433&q=best&v=1&m=700&webp=1"
            alt=""
          />
        </div>
        <div className="fruits-items">
          <h6>
            <Link
              to="/grocery"
              className="text-secondary"
              style={{ textDecoration: "underline" }}
            >
              Food
            </Link>{" "}
            <MdOutlineNavigateNext />
            <span className="text-black"> Fruits Vegetable</span>
          </h6>

          <div className="row">
            {MenuItem?.[1].subItems?.map((pd) => (
              <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                <Link to={`/grocery${pd.path}`}>
                  <img className="img-fluid w-75" src={pd.image} alt="" />
                  <p>
                    <Link to={pd.path} className="text-secondary">
                      {pd.title}
                    </Link>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeveragesMenu;
