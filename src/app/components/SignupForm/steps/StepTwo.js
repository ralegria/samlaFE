"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Input, Select, InputNumber, Upload, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateField } from "../../../redux/slices/CustomerSlice";

import Image from "next/image";

const { Dragger } = Upload;

const StepTwo = () => {
  const dispatch = useDispatch();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const draggerProps = {
    name: "ID_photo",
    multiple: false,
    action: process.env.NEXT_PUBLIC_CLOUDINARY_API,
    customRequest: (file) => {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("upload_preset", "iuj87bk5");
      axios
        .post(process.env.NEXT_PUBLIC_CLOUDINARY_API, formData)
        .then((response) => {
          dispatch(
            updateField({
              payload: {
                ID_photo_front: response.data.secure_url,
              },
            })
          );
          file.onSuccess(response.data.secure_url);
        })
        .catch((error) => {
          console.error(error);
          file.onError(error);
        });
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_MAIN_API_URL}/api/states/`
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
        `${process.env.NEXT_PUBLIC_MAIN_API_URL}/api/states/${stateId}/cities`
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
      <Form.Item
        label="Dirección"
        name="address_line1"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu dirección",
          },
        ]}
      >
        <Input placeholder="Ingresar dirección" />
      </Form.Item>
      <Form.Item
        label="Dirección linea 2"
        name="address_line2"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input placeholder="Ingresar dirección linea 2" />
      </Form.Item>
      <Form.Item
        label="Ingresos mensuales"
        name="mo_earnings"
        className="w-full"
        rules={[
          {
            required: true,
            type: "number",
            message: "Por favor ingresa un monto",
          },
        ]}
      >
        <InputNumber placeholder="Ingresar $0.00" className="w-full" />
      </Form.Item>
      <div className="flex flex-col gap-[25px]">
        <h3 className="text-[20px] font-medium text-center">
          Fotografía de documento de identidad
        </h3>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor sube una foto de tu documento",
            },
          ]}
        >
          <Dragger className="ID-dragger" {...draggerProps}>
            <p className="ant-upload-drag-icon flex justify-center">
              <Image
                src={"/icons/media.svg"}
                alt="media"
                width={40}
                height={40}
              />
            </p>
            <p className="ant-upload-text">Arrastrar aqu&iacute;</p>
            <div className="ant-upload-hint">o</div>
            <Button className="bg-[#F2F4F7] text-[#1D2939] text-[14px] font-bold py-[13px] px-[12px] rounded-[4px] border-none h-fit">
              Seleccionar archivo
            </Button>
          </Dragger>
        </Form.Item>
      </div>
    </div>
  );
};

export default StepTwo;
