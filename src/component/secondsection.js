import React, { Component } from 'react';
import Main from './main';
import {ServiceContent,ServicesSections} from './const';

import imgserUrl1 from '../images/Service1.png';
import imgserUrl2 from '../images/Service2.png';
import imgserUrl3 from '../images/Service3.png';

function SecondSection() {
        return <section className="sub-section body">
         <div className="title body">
             <h1>{ServiceContent.title}</h1>
             <span>{ServiceContent.content}</span>
             <hr/>
         </div>
         <div className="services">
             <div className="ser-section">
                 <div className="circle-image">
                     <img src={imgserUrl1}/>
                 </div>
                 <h3>{ServicesSections.FirstService.title}</h3>
                 <span>{ServicesSections.FirstService.content}</span>
             </div>
             <div className="ser-section">
                 <div className="circle-image">
                 <img src={imgserUrl2}/>
                 </div>
                 <h3>{ServicesSections.SecondService.title}</h3>
                 <span>{ServicesSections.SecondService.content}</span>
                 </div>
             <div className="ser-section">
                 <div className="circle-image">
                 <img src={imgserUrl3}/>
                 </div>
                 <h3>{ServicesSections.ThirdService.title}</h3>
                 <span>{ServicesSections.ThirdService.content}</span>
                   </div>
         </div>
    </section>;
      }

export default SecondSection;