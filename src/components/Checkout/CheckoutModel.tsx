import { Button, Form, Input } from "antd";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { VscAdd } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers/reducers";
import BookingServices from "services/Booking/BookingServices";

interface IProps {
  switchChecked: boolean | any;
  setIsDisable: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  isDisable: boolean | undefined;
  total:number
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    address:
      "${label} e.g House No 73,Road 14,Block F, Bashundhara R/A, Dhaka-1216",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const CheckoutModel: React.FC<IProps> = ({switchChecked, setIsDisable, isDisable, total}) => {
  const { cart } = useSelector((state: IRootState) => state.carts);

  console.log(switchChecked);

  const {user}=useAuth()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFinish = (values: any) => {
    values.userName=user.displayName
    values.email=user.email
    values.total= total
    values.bag=switchChecked
    values.cart=cart
    console.log(values);
    
    BookingServices.postBooking(values)
    .then((res)=>{
      if(res){
        alert('Response success')
      }
    })
    setShow(false);
    setIsDisable(true);
  };
  return (
    <div>
      <Button
        style={{ width: "100%" }}
        onClick={handleShow}
        disabled={isDisable}
      >
        <VscAdd /> Add Address
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-cente">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={[ "address"]}
                label=" Street Address"
                rules={[{ required: true }]}
              >
                <Input.TextArea placeholder="e.g House No 73,Road 14,Block F, Bashundhara R/A, Dhaka-1216" />
              </Form.Item>
              <Form.Item
                name={["area"]}
                label="Area"
                rules={[{ required: true }]}
              >
                <select
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    border: "1px solid #ddd",
                    outline: "none",
                  }}
                >
                  <option>Select Area</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Barishal</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                  <option>Rangpur</option>
                  <option>Mymensingh</option>
                  <option>Sylhet</option>
                </select>
              </Form.Item>
              <Form.Item
                name={["email"]}
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={[ "phone"]}
                label="Phone"
                rules={[{ required: true }]}
              >
                <Input placeholder="e.g. 01672955886" />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "#ff686e" }}
                >
                  Save Address
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CheckoutModel;
