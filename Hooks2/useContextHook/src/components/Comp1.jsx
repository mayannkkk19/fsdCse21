import { NComp } from "./NComp1";

export function Comp1({ value }) {
  return (
    <div>
      <NComp value={value} />
      <h1>Name: {value}</h1>
    </div>
  );
}
