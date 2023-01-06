import React, { useEffect, useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { LineChart } from "../components";
import { IoIosMore } from "react-icons/io";
import { weeklyStats, dropdownData, PetStats } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "../contexts/axios";
import FormattedNumber from "../contexts/numberFormat";
import Icon from "../contexts/iconFormat";

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
  const [dataAdmin3, setDataAdmin3] = useState([]);
  const [dataAdmin4, setDataAdmin4] = useState([]);

  // 4 statistik in top of admin
  const getDataAdmin = async () => {
    const response = await axios.get("dashboard/dataadmin1");
    setDataAdmin(response.data[0].data);
  };

  // data statistik pembayaran
  const getDataAdmin2 = async () => {
    const response = await axios.get("dashboard/dataadmin2");
    setDataAdmin2(response.data[0].data);
  };

  const getDataAdmin3 = async () => {
    const response = await axios.get("items/lastuploadadmin");
    setDataAdmin3(response.data[0].data);
  };

  const getDataAdmin4 = async () => {
    const response = await axios.get("items/topproduct");
    setDataAdmin4(response.data[0].data);
  };

  useEffect(() => {
    getDataAdmin();
    getDataAdmin2();
    getDataAdmin3();
    getDataAdmin4();
  }, []);

  return (
    <div className="mt-24">
      {/* <Helmet>
        <title>Dasbor | Happypets</title>
      </Helmet> */}
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
          <div className="mt-5 w-72 md:w-400">
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
                    <p className="text-sm text-gray-400">
                      {item.paymentCategory}
                    </p>
                  </div>
                </div>
                {item.orders.map((data, key) => (
                  <p key={key} className={`text-green-600`}>
                    <FormattedNumber number={data.total} />
                  </p>
                ))}
              </div>
            ))}
          </div>
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

      {/* Top 5 Produk Populer */}
      <div className="flex flex-wrap justify-center">
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Top 5 Produk Populer</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-5">
            {dataAdmin4.map((item, key) => (
              <div key={key} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4 items-center">
                  <div
                    style={{ background: "#00C292" }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    <Icon iconName={item.itemType} />
                  </div>
                  <div className="w-64">
                    <p className="text-sm font-semibold truncate">
                      {item.itemName}
                    </p>
                    <p className="text-xs text-gray-400 capitalize">
                      {item.itemType}
                    </p>
                    <p className="text-xs text-green-400">
                      {item.store.storeName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 Hewan Peliharaan */}
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Top 5 Hewan Populer</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-5">
            {PetStats.map((item, key) => (
              <div key={key} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4 items-center">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Baru Saja Ditambahkan */}
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Baru saja ditambahkan</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-5">
            {dataAdmin3.map((item, key) => (
              <div key={key} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4 items-center">
                  <div
                    style={{ background: "#00C292" }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    <Icon iconName={item.itemType} />
                  </div>
                  <div className="w-64">
                    <p className="text-sm font-semibold truncate">
                      {item.itemName}
                    </p>
                    <p className="text-xs text-gray-400 capitalize">
                      {item.itemType}
                    </p>
                    <p className="text-xs text-green-400">
                      {item.store.storeName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboar;
