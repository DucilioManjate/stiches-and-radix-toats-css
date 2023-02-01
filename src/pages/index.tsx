import * as React from "react";
import { Cardbody } from "@/components/layout.module";
import { GlobalStyled } from "@/styles/Home.module";
import Layout from "./main/layout";
import Head from "next/head";
import { Main } from "next/document";

export default function Home() {

  return (
    <GlobalStyled >
      <Head>
        <title>Home</title>
      </Head>
      <Cardbody >
        <Layout />
      </Cardbody>
    </GlobalStyled>
  )
}



