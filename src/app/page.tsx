import Image from "next/image";
import React from "react";
import Sidebar from "../components/sidebar";
import { FlipLink } from "../components/FlipLink";



export default function Home() {
  return (
      <div className={"max-h-screen flex flex-col"}>

        <FlipLink/>

      </div>

  )
}
