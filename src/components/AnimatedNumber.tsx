"use client";

import CountUp from 'react-countup';

export default function AnimatedNumber({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  return (
    <CountUp end={end} suffix={suffix} prefix={prefix} enableScrollSpy={true} scrollSpyOnce={true} separator="," duration={2.5} />
  );
}
