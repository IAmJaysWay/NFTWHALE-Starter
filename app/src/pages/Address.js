import React from "react";
import { useState} from "react";
import { Table } from "antd";


function Address() {
  const [txs, setTxs] = useState();

  const columns = [
    {
      title: "Event",
      dataIndex: "from",
    },
    {
      title: "Token ID",
      dataIndex: "tokenId",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "From",
      dataIndex: "from",
    },
  ];

  return (
    <>
      <div className="App">
        <div className="tableContainer">
          <Table columns={columns} dataSource={txs} />
        </div>
      </div>
    </>
  );
}

export default Address;
