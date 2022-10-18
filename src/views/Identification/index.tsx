import type { FC } from "react";
import React from "react";

import { Card } from "components/Card";

const Identification: FC = (): JSX.Element => {
  return (
    <Card title={"Identificación del modelo IoT básico"}>
      <p className={"f4"}>{"Sensor"}</p>
      <p>{"BME 280 (Presión atmosférica)"}</p>
      <p className={"f4"}>{"Sistema embebido"}</p>
      <p className={"fs-i"}>{"Hardware:"}</p>
      <p>{"Raspberry Pi"}</p>
      <p className={"fs-i"}>{"Software:"}</p>
      <p>{"Node.js"}</p>
      <p className={"f4"}>{"Conectividad"}</p>
      <p className={"fs-i"}>{"Comunicación física:"}</p>
      <p>{"Wi-Fi"}</p>
      <p className={"fs-i"}>{"Protocolo de comunicación:"}</p>
      <p>{"I2C"}</p>
      <p className={"fs-i"}>{"Protocolo de app:"}</p>
      <p>{"MQTT"}</p>
      <p className={"f4"}>{"Analítica de datos"}</p>
      <p>{"Azure IoT Hub"}</p>
    </Card>
  );
};

export { Identification };
