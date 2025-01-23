"use client";
import { useState } from "react";
import { Button, Form } from "antd";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";

import "./SignupForm.scss";

const data = {
  names: null,
  lastnames: null,
  email: null,
  phone_number: null,
  ID_type: "DUI",
  ID_number: null,
  address_line1: null,
  address_line2: null,
  state: null,
  city: null,
  mo_earns: null,
  ID_photo_front: null,
  ID_photo_back: null,
  selfie: null,
};

const SignupForm = () => {
  const [formData, setFormData] = useState(data);

  const onChange = (values) => {
    setFormData({ ...formData, ...values });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(formData);

  return (
    <Form
      name="Step 1 Form"
      onValuesChange={onChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="signup-form flex flex-col gap-[50px]"
    >
      <StepOne />
      <StepTwo />
      <Form.Item label={null}>
        <Button
          htmlType="submit"
          className="bg-[#FF5C00] text-[#FFF] text-[22px] font-normal py-[12px] rounded-[8px] w-full h-fit"
        >
          Continuar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
