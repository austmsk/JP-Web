import Image from "next/image";
import React from "react";
import { FlipLink } from "../components/FlipLink";
import Scroll from "../components/Carousel";



export default function Home() {
  return (
      <div className={"max-h-screen flex flex-col"}>

        <FlipLink/>
          <Scroll />
          <Scroll />

      </div>

  )
}
