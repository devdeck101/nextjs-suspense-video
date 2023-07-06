import Image from "next/image";
import Produto from "./components/Produto";
import Review from "./components/Review";

import { Suspense } from "react";
import ProdutoLoading from "./components/ProdutoLoading";
import ReviewingLoading from "./components/ReviewLoading";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      {/* <Suspense fallback={<h1>CARREGAMENTO EM GRUPO</h1>}> */}
      <Suspense fallback={<h1>Carregando Produtos</h1>}>
        <Produto />
      </Suspense>
      <Suspense fallback={<h1>Carregando Review</h1>}>
        <Review />
      </Suspense>
      <br />

      {/* </Suspense> */}
    </>
  );
}
