import React, { useEffect, useState } from "react";
import Card from "../Cards/Card.tsx";
import { TbMoneybag, TbPresentation } from "react-icons/tb";
import { MdMoney } from "react-icons/md";
import TopSellingProducts from "./TopSellingProducts.tsx";
import Calendar from "./Calendar.tsx";

const DashBoard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timeInHour, setTimeInHour] = useState(new Date().getHours());
  const date = new Date().toLocaleDateString();
  const name = "ROMs";
  const quickShow = [{label: "total Sale", amount: "37,890.58", icon: <TbPresentation/>},{label: 'total revenue', amount: '12,890.57', icon:<MdMoney/>}, {label:"total profit", amount: '15,190.59',icon: <TbMoneybag/>}]

  const greeting =
    timeInHour > 5 && timeInHour < 12
      ? "Morning"
      : timeInHour > 12 && timeInHour < 17
      ? "Afternoon"
      : timeInHour >= 17 && timeInHour < 21
      ? "Evening"
      : "Night";

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    const intervalInHours = setInterval(() => {
      setTimeInHour(new Date().getHours());
    }, 1000 * 60 * 60);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
      clearInterval(intervalInHours);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col">
        <span className="text-[18px] font-bold">
          Good {greeting}, Mr {name}
        </span>
        <span className="text-[14px] text-gray-500">
          {date} | {time}
        </span>
      </div>
      <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-0 md:gap-2 lg:gap-4 justify-between w-full">
        {quickShow.map((cardItem,index) => (
          <Card className="flex-col sm:flex-col md:flex-row lg:flex-row text-2xl gap-3 justify-center" key={index}>
            <div className="flex justify-center align-middle my-auto">
              <span className="bg-[var(--adminPrimaryColor)] rounded-md text-5xl text-white">
                {cardItem.icon}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="flex justify-center md:justify-start lg:justify-start">$ {cardItem.amount}</span>
              <span className="text-[16px] capitalize text-gray-500 flex justify-center md:justify-start lg:justify-start">
                {cardItem.label}
              </span>
            </div>
          </Card>
        ))}
      </div>
      <div className="my-4">
        <Card className="w-full sm:w-full md:w-2/3 lg:w-fit justify-center"><TopSellingProducts /></Card>
        {/* <Calendar /> */}
      </div>
    </div>
  );
};

export default DashBoard;
