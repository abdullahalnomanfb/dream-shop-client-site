import React, { useState } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { GrHelp } from "react-icons/gr";
import MainSidebar from "./MainSidebar";

const content = { en: { help: "Help" }, bn: { help: "সাহায্য" } };

const TopNavBar = () => {
  const [lang, setLang] = useState("en");

  return (
    <section>
      <MainSidebar />
      <div className="ms-5 ps-4 top-main  ">
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <h5>
              DREAM <span className="text-secondary">Shop</span>
            </h5>
          </Navbar.Brand>
          <Form className="d-flex w-100">
            <FormControl
              type="search"
              placeholder="Search for products (e.g. eggs, milk, potato)"
              className="ms-2 w-100 mx-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="w-100">
            <Nav.Link href="#action1" style={{ borderLeft: "1px solid gray" }}>
              <span>
                {" "}
                <GrHelp />{" "}
                <h6 style={{ display: "inline" }}>{content[lang].help}</h6>
              </span>
            </Nav.Link>
            <Nav.Link href="#action2">
              <button onClick={() => setLang("bn")}>Ban</button>{" "}
              <button onClick={() => setLang("en")}>Eng</button>
            </Nav.Link>
            <button className="login-button">Sign In</button>
          </Nav>
        </Navbar>
      </div>
    </section>
  );
};

export default TopNavBar;