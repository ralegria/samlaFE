"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Select } from "antd";

const StepTwo = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://samlabe-production.up.railway.app/api/states/"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStates();
  }, []);

  const fetchCities = async (stateId) => {
    try {
      const response = await axios.get(
        `https://samlabe-production.up.railway.app/api/states/${stateId}/cities`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        <Select onChange={(value) => fetchCities(value)}>
          {states.map((state) => (
            <Select.Option key={state._id} value={state._id}>
              {state.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Municipio"
        name="city"
        rules={[
          {
            required: true,
            message: "Por favor elige una opción",
          },
        ]}
      >
        <Select>
          {cities.map((city) => (
            <Select.Option key={city.id_mun} value={city.id_mun}>
              {city.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default StepTwo;
