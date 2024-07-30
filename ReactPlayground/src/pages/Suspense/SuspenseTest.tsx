import { Suspense } from "react";
import AxiosNoEffect from "./AxiosNoEffect";
import Loading from "../../app/components/Loading";

function SuspenseTest() {
  return (
    <Suspense fallback={<Loading />}>
      <AxiosNoEffect />
    </Suspense>
  );
}
export default SuspenseTest;
