import React from "react";

function FormattedNumber(props) {
  const numberFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedNumber = numberFormat.format(props.number);
  return <span>{formattedNumber}</span>;
}

export default FormattedNumber;
