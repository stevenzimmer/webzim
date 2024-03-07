"use client";
import { useState, useEffect } from "react";

function Clock() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString(),
  );
  const [position, setPosition] = useState<object>({});
  const [color, setColor] = useState<object>({});

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Change position
  // Change color
  const setPositionAndColor = () => {
    const random = Math.floor(Math.random() * 92);
    const random2 = Math.floor(Math.random() * 83);
    setPosition({ top: `${random}%`, left: `${random2}%` });

    const [h, s, l] = [Math.floor(Math.random() * 360), "75", "75"];

    setColor({ color: `hsl(${h}deg,${s}%,${l}%)` });
  };
  useEffect(() => {
    setPositionAndColor();
    const interval = setInterval(() => {
      setPositionAndColor();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="absolute" style={position}>
      <div
        className="whitespace-nowrap text-2xl text-white md:text-3xl lg:text-5xl"
        style={color}
      >
        {currentTime}
      </div>
    </div>
  );
}

export default Clock;
