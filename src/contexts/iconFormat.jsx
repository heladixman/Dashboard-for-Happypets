import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore, BiScan, BiBox } from "react-icons/bi";
import { FiCreditCard } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

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
  } else if (iconName === "product") {
    return <BiBox />;
  } else if (iconName === "pets") {
    return <MdOutlinePets />;
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

export default Icon;
