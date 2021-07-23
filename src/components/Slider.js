//import React from 'react';
import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import 'normalize.css/normalize.css';
import './slider-animations.css';
import './sliders.css';
import axios from "axios";

// const content = [
// 	{
// 		title: 'Project 1',
// 		description:
// 		'Introduction about Project 1',
// 		button: 'Read More',
// 		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		
// 	},
// 	{
// 		title: 'Project 2',
// 		description:
// 		'Introduction about Project 2',
// 		button: 'Discover',
// 		image: 'https://i.imgur.com/DCdBXcq.jpg',
		
// 	},
// 	{
// 		title: 'Project 3',
// 		description:
// 		'Introduction about project 3',
// 		button: 'Go now',
// 		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		
// 	}
// ];

export default class Sliders extends Component {

	constructor(props) {
	  super(props);
	  this.state = { Sliders: [] };
	}
  
	componentDidMount() {
	  axios
		.get("http://localhost:5001/home/")
		.then((response) => {
		     console.log(response.data)
			this.setState({ Sliders: response.data });
		})
		.catch((error) => {
		  console.log(error);
		});
		
	}
  
	render() {
		return (
	<div > 
		
		<Slider autoplay={3000} className="slider-wrapper">
		{this.state.Sliders &&
            this.state.Sliders.map((item, index) => (
				
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('http://localhost:5001/uploads/${item.image}') no-repeat center center` }}
					
				>
				
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					
				</div>
			))}
		</Slider>
	</div>
 );
}
}
