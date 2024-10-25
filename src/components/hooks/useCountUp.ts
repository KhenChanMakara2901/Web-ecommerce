"use client";
import { useEffect, useState } from "react";

export default function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    if (end === 0) return;

    const incrementTime = Math.abs(Math.floor(duration / end));

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}
