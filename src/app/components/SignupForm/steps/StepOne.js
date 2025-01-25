"use client";
import { Form, Input, Select } from "antd";

const StepOne = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Form.Item
        label="Nombres"
        name="names"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tus nombres",
          },
        ]}
      >
        <Input placeholder="Ingresar nombres" />
      </Form.Item>
      <Form.Item
        label="Apellidos"
        name="lastnames"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tus apellidos",
          },
        ]}
      >
        <Input placeholder="Ingresar apellidos" />
      </Form.Item>
      <Form.Item
        label="Correo"
        name="email"
        rules={[
          {
            required: false,
            type: "email",
            message: "Por favor ingresa tu correo",
          },
        ]}
      >
        <Input placeholder="ejemplo@gmai.com" />
      </Form.Item>
      <Form.Item
        label="Número de teléfono"
        name="phone_number"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu teléfono",
          },
        ]}
      >
        <Input placeholder="(+503)" />
      </Form.Item>
      <Form.Item
        label="Tipo de identificación"
        name="ID_type"
        initialValue={"DUI"}
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
      <Form.Item
        label="Número de identificación"
        name="ID_number"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu Número de identificación",
          },
          {
            pattern: /^\d{8}-\d{1}$/,
            message: "Por favor ingresa un número de identificación válido",
          },
        ]}
      >
        <Input placeholder="00000000-0" />
      </Form.Item>
    </div>
  );
};

export default StepOne;
