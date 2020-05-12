import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';


import GoogleAuth from "../GoogleAuth";

export default function Main(){
  const [userInfo, setUserInfo] = useState({});

  return(
    <div>
        <GoogleAuth/>
    </div>
  )
}