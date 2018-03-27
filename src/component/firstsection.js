import React, { Component } from 'react';
import {ArticleContent} from './const';

import imgUrl from '../images/Slider02.png';

function FirstSection(){
        return <section className="main-section">
        <div className="main">
            <div className="content">
            <h2>{ArticleContent.title}</h2>
            <span>{ArticleContent.subtitle}</span>
            <p>{ArticleContent.content}</p>
            <button className="downloadbtn" type="button">Download</button> 
        </div>
    </div>
        <div className="slider-image">
        <img className="logo" src={imgUrl}/>           
    </div> 
   </section>;
      }

export default FirstSection;