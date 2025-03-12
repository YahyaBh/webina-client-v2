import { Suspense } from "react";
import Home from "./Home/Home";
import Loading from "./Loading/Loading";

export default function App() {
  return (
    <div >
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </div>
  );
}
