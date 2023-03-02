import React from "react";
import { NavLink } from "react-router-dom";
import CardStats from "./CardStats.js";

export default function HeaderStats() {
  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <NavLink to="Room/A">
                  <CardStats
                    statSubtitle="A"
                    Room_numbers={["100", "101"]}
                    statTitle="2"
                    statArrow="up"
                    statPercent="3.48"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Price : 100"
                    statIconColor="bg-red-500"
                  />
                </NavLink>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <NavLink to="Room/B">
                  <CardStats
                    statSubtitle="B"
                    Room_numbers={["102", "103", "104"]}
                    statTitle="3"
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Price : 80"
                    statIconName="fas fa-chart-pie"
                    statIconColor="bg-orange-500"
                  />
                </NavLink>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <NavLink to="Room/C">
                  <CardStats
                    statSubtitle="C"
                    Room_numbers={["105", "106", "107", "108", "109"]}
                    statTitle="5"
                    statDescripiron="Price : 50"
                    statIconColor="bg-pink-500"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
