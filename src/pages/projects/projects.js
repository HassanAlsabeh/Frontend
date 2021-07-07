import React, { Component } from 'react';
import "./project.scss";
export default class Projects extends Component{
 

render(){
    return(<div>
        
             <h1 class="title-bar"> Hover Effects for Image Cards </h1>

<div class="container">
  <div class="card">
    <img src="//unsplash.it/399/400" alt="" class="card-img"></img>
    <div class="card-text">
    <h3 class="card-title">Simple Line Lite</h3>
    <p class=" card-body">Hover Effect Useing Simple Lines</p>
    </div>
  </div>
  
  <div class="card-2">
    <img src="//unsplash.it/400/400" alt="" class="card-img"></img>
    <div class="card-text">
    <h3 class="card-title">Fat Box Dark</h3>
    <p class=" card-body"> Hover Effect Useing Think Lines</p>
    </div>
  </div>
  
    <div class="card-3">
    <img src="//unsplash.it/402/400" alt="" class="card-img"></img>
    <div class="card-text">
    <h3 class="card-title">Color Gradient Box</h3>
    <p class=" card-body">Simple Box with Color Gradient Effect</p>
    </div>
  </div>
    
  
</div>
        </div>
    )}
}