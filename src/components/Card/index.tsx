import type { FC, ReactNode } from "react";
import React from "react";

interface ICardProps {
  children?: ReactNode;
  title?: string;
}

const Card: FC<ICardProps> = ({
  children,
  title,
}: ICardProps): JSX.Element => {
  return (
    <div className={"bdr1 bdr-light5 bg-light3 m2 p4 rnd"}>
      <p className={"f5 fw7 mb3"}>{title}</p>
      {children}
    </div>
  );
};

export type { ICardProps };
export { Card };
