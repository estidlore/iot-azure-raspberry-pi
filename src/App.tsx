import type { FC } from "react";
import React from "react";

import { Identification } from "views/Identification";
import { Simulation } from "views/Simulation";

const App: FC = (): JSX.Element => (
  <div className={"ai-center bg-light1 d-f f3 flex-col dark1"}>
    <Identification />
    <Simulation />
  </div>
);

export { App };
