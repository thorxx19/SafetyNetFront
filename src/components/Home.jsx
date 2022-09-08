import React from "react";
import logo from '../assets/logo.jpg'
import '../style/Home.css'




function Home (){
    return (
        <div className="back">

            <h1 className="my-5">SafetyNet</h1>
            <img className="logo" src={logo} alt='Logo'/>

        </div>


    )
}

export default Home