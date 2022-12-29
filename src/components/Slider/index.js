import React, { Component } from "react";
import Slider from "react-slick";

export default function Slider() {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<>
			<div>
				<h2>Fade</h2>
				<Slider {...settings}>
					<div>
						<img
							src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-40.png"
							alt="Slider Image"
						/>
					</div>
					<div>
						<img
							src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-40.png"
							alt="Slider Image"
						/>
					</div>
					<div>
						<img
							src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-40.png"
							alt="Slider Image"
						/>
					</div>
					<div>
						<img
							src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-40.png"
							alt="Slider Image"
						/>
					</div>
				</Slider>
			</div>
		</>
	);
}
