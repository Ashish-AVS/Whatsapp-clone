import React from "react";
import Image from "next/image";
import {Circle} from "better-react-spinkit"

export default function Loading() {
  return (
    <center style={{display: "grid", placeItems:"center", height:"100vh"}}>
      <div>
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="Whatsapp"
          style={{marginBottom: 10}}
          height={200}
          width={200}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}
