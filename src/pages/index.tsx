import * as React from "react";
import { Cardbody } from "@/components/layout.module";
import { GlobalStyled } from "@/styles/Home.module";
import Layout from "./main/layout";

export default function Home() {

  return (
    <GlobalStyled titlePage="@media (min-width: 1200px)" >
      <Cardbody >
        <Layout />
      </Cardbody>
    </GlobalStyled>
  )
}



