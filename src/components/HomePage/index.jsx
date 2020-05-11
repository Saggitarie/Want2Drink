import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import GoogleAuth from "../GoogleAuth";

export default function Main(){
  return(
    <div>
        <GoogleAuth/>
    </div>
  )
}