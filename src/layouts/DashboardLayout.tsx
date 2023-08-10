import { PropsWithChildren } from "react";
import { DashboardMenu } from "../components";

export const DashboardLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div>
      {/* <div className="bg-slate-100">
        <h1 className="text-3xl">Dashboard Layout</h1>
      </div> */}
      <DashboardMenu />
      {children}
    </div>
  );
};
