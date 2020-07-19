import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';

import "./Homepage.scss";
import GoogleAuth from "../GoogleAuth";

export default function Main(){
  return(
    <div className="main-page">
        <p>Want<span>2</span>Drink</p>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
            <source src="/video1.mp4" type="video/mp4" />
            <source src="/video2.mp4" type="video/mp4" />
            <source src="/video3.mp4" type="video/mp4" />
            <source src="/video4.mp4" type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>
        <GoogleAuth/>
    </div>
  )
}