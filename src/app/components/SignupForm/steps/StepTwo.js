"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Select } from "antd";

const StepTwo = () => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://samlabe-production.up.railway.app/api/states/"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(states);

  return (
    <div className="flex flex-col gap-[24px]">
      <Form.Item
        label="Departamento"
        name="state"
        rules={[
          {
            required: true,
            message: "Por favor elige una opción",
          },
        ]}
      >
        <Select>
          <Select.Option value="DUI">DUI</Select.Option>
          <Select.Option value="NIT">NIT</Select.Option>
          <Select.Option value="Pasaporte">Pasaporte</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default StepTwo;
