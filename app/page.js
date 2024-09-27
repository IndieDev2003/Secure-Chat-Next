import Header from "@/components/Header";
import Front from "@/components/Front";
import Loading from "@/components/Loading";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Front />
        {/* <Loading /> */}
      </Suspense>
      
    </>
  );
}
