import SpinnerMini from "../_components/SpinnerMini";

export default function Loading() {
  return (
    <div className="grid items-center justify-center gap-2">
      <div className="flex justify-center items-center">
        <SpinnerMini />
      </div>
      <h3 className="text-xl text-primary-200">Loading cabin data...</h3>
    </div>
  );
}
