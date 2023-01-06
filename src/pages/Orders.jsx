import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import TabView from "../contexts/tabView";

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* <Helmet>
        <title>Pesanan | Happypets</title>
      </Helmet> */}

      <Header category="Halaman" title="Pesanan" />
      <div>
        <TabView
          title={"table untuk dashboard"}
          tabs={[
            { name: "Semua Pesanan", content: "Semua Pesanan" },
            { name: "Menunggu Pembayaran", content: "Menunggu Pembayaran" },
            { name: "Pesanan Diproses", content: "Pesanan Diproses" },
            { name: "Pesanan Dikirim", content: "Pesanan Dikirim" },
            { name: "Pesanan Selesai", content: "Pesanan Selesai" },
          ]}
        />
      </div>
    </div>
  );
};
export default Orders;
