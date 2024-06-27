/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => ReactNode;
};

const For = <T extends any>({ each, children }: ForProps<T>) => {
  return each.map((item, index) => children(item, index));
};

export default For;
