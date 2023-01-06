import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore, BiScan, BiBox } from "react-icons/bi";
import { FiCreditCard } from 'react-icons/fi'
import { BsBox } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { TbTruckDelivery} from 'react-icons/tb'
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
  PetStats,
  productStats,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";
import { Helmet } from "react-helmet";
import axios from "../contexts/axios";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Dashboar = () => {
  const { currentColor, currentMode } = useStateContext();
  const [dataAdmin, setDataAdmin] = useState([]);
  const [dataAdmin2, setDataAdmin2] = useState([]);

  const getDataAdmin = async () => {
    const response = await axios.get("dashboard/dataadmin1");
    // console.log(response.data[0].data)
    setDataAdmin(response.data[0].data);
  };

  const getDataAdmin2 = async () => {
    const response = await axios.get("dashboard/dataadmin2");
    // console.log(response.data[0].data)
    setDataAdmin2(response.data[0].data);
  };

  useEffect(() => {
    getDataAdmin();
    getDataAdmin2()
  }, []);

  function Icon({ iconName }) {
    if (iconName === "MdOutlinePets") {
      return <MdOutlinePets />;
    } else if (iconName === "BsBox") {
      return <BsBox />;
    } else if (iconName === "BiStore") {
      return <BiStore />;
    } else if (iconName === "AiOutlineUser") {
      return <AiOutlineUser />;
    } else if (iconName === "Bayar Ditoko") {
      return <BiBox />;
    } else if (iconName === "Bayar Ditempat") {
      return <TbTruckDelivery />;
    } else if (iconName === "Pembayaran Digital") {
      return <BiScan />;
    } else if (iconName === "Bank Transfer") {
      return <FiCreditCard />;
    } else {
      return null;
    }
  }

  return (
    <div className="mt-24">
      <Helmet>
        <title>Dasbor | Happypets</title>
      </Helmet>

      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {dataAdmin.map((item, key) => (
            <div
              key={key}
              className="bg-gray-200 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 w-4/5 p-4 mx-3 rounded-2xl "
            >
              <div className="flex flex-wrap items-center">
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl mr-3"
                >
                  <Icon iconName={item.icon} />
                </button>
                <div>
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Statistik Pembayaran</p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>
          <div className="mt-10 w-72 md:w-400">
            {dataAdmin2.map((item, key) => (
              <div key={key} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: "#03C9D7",
                      backgroundColor: "#E5FAFB",
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    <Icon iconName={item.paymentCategory} />
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.paymentName}</p>
                    <p className="text-sm text-gray-400">{item.paymentCategory}</p>
                  </div>
                </div>
                {item.orders.map((data, key)=> (
                  <p className={`text-green-600`}>Rp{data.total}</p>
                ))}
              </div>
            ))}
          </div>
          {/* <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div> */}
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Statistik Penjualan Tahunan</p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Top 5 Produk Populer</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mt-4 w-full"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>

                {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
              </div>
            ))}
            {/* <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div> */}
          </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Top 5 Hewan Populer</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              {/* <IoIosMore /> */}
            </button>
          </div>
          <div className="mt-10 ">
            {PetStats.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mt-4 w-full"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold mt-3">{item.title}</p>
                    {/* <p className="text-xs text-gray-400">{item.desc}</p> */}
                  </div>
                </div>

                {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
              </div>
            ))}
            {/* <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div> */}
          </div>
        </div>
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Baru saja ditambahkan</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              {/* <IoIosMore /> */}
            </button>
          </div>

          <div className="mt-10 ">
            {productStats.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mt-4 w-full"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>

                {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
              </div>
            ))}
            {/* <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboar;
