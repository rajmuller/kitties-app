import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="flex flex-wrap items-end gap-8">{children}</div>;
};

export default Container;
