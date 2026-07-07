import { ReactNode } from "react";

type FormRowProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3;
};

export default function FormRow({
  children,
  columns = 2,
}: FormRowProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
  }[columns];

  return (
    <div className={`grid gap-5 ${gridClass}`}>
      {children}
    </div>
  );
}