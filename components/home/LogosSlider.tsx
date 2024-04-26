"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { features } from "@/lib/data";

export default function LogosSlider() {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  return (
    <Slider {...settings}>
      {features
        .filter((feature) => {
          return feature.demo;
        })
        .map((props, i: number) => (
          <div className="!w-[150px]" key={i}>
            {props.demo && (
              <div className="w-full bg-transparent grayscale">
                {props.demo}
              </div>
            )}
          </div>
        ))}
      {/* {features
    .filter((feature) => {
      return feature.demo;
    })
    .map((props, i: number) => (
      <div className="w-full" key={i}>
        {props.demo && (
          <div className="bg-transparent grayscale">{props.demo}</div>
        )}
      </div>
    ))} */}
    </Slider>
  );
}
