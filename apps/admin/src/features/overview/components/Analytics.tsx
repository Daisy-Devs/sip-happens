"use client";
import { useDispatch, useSelector } from "react-redux";
import AnalyticsCard from "./AnalyticsCard";
import { CirclePlus, Coffee, Shapes, Star } from "lucide-react";
import { showAddProduct } from "@/store/services/slice/authSlice";
import { StatsType } from "../types";

type AnalyticsProps = {
  statisticsData:StatsType | null;
};
const Analytics: React.FC<AnalyticsProps> = ({ statisticsData }) => {
    const dispatch = useDispatch();
  return (
    <section className="grid space-y-5 mb-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:space-x-5">
      <AnalyticsCard
        heading="Products"
        subheading="Total Items"
        value={statisticsData?.totalItems.toString() || "0"}
        icon={<Coffee size={20} />}
      />
      <AnalyticsCard
        heading="Categories"
        subheading="Active Categories"
        value={statisticsData?.activeCategories.toString() || "0"}
        icon={<Shapes size={20} />}
      />
      <AnalyticsCard
        heading="Daily Picks"
        subheading="Featured Items"
        value={statisticsData?.featuredItems.toString() || "0"}
        icon={<Star size={20} />}
      />
      <div onClick={(e)=>{
        dispatch(showAddProduct());
      }} className="p-6 rounded-3xl min-w-40 flex flex-col justify-between h-40 lg:col-span-1 bg-primary-container text-on-primary-container group cursor-pointer hover:opacity-90 transition-all shadow-xl">
        <div className="flex justify-between items-start">
          <CirclePlus size={30} className="text-on-primary-container"/>
        </div>
        <div>
          <p className="text-on-primary-container/80 text-label-md">Quick Action</p>
          <p className="headline-md text-white">New Item</p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
