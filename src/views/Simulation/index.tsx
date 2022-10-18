import type { FC } from "react";
import React from "react";

import { simulationPdf } from "assets/docs";
import { Card } from "components/Card";

const Simulation: FC = (): JSX.Element => {
  return (
    <Card title={"IoT simulation"}>
      <iframe height={1000} src={simulationPdf} width={700} />
    </Card>
  );
};

export { Simulation };
