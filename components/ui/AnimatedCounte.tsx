'use client';
import CountUp from "react-countup";

const AnimatedCounte = ({amount }: {amount: number}) => {
  return (
    <div className="w-full">
        <CountUp
            duration={2.15}
            decimals={2}
            decimal=","
            prefix="$"
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounte