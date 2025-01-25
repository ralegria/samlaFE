"use client";
import { Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setStep, updateField } from "../../redux/slices/CustomerSlice";
import { STEPS } from "../../../constants";

import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";

import "./SignupForm.scss";

const SignupForm = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.customerForm.formStep);

  //const [currentStep, setCurrentStep] = useState(2);

  const onFormChange = (values) => {
    const newValues = {
      ...values,
      mo_earnings: Number(values.mo_earnings) * 100,
    };
    dispatch(
      updateField({
        payload: newValues,
      })
    );
  };

  const onFinish = () => {
    dispatch(
      setStep({
        step: STEPS.FORWARD,
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //console.log(formData);

  return (
    <Form
      autoComplete="off"
      name="Signup Form"
      onFinish={onFinish}
      onValuesChange={onFormChange}
      onFinishFailed={onFinishFailed}
      className="signup-form flex flex-col gap-[50px]"
    >
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
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
