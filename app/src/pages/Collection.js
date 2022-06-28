import React from "react";
import { Table } from "antd";
import { useState} from "react";
import { Icon } from "web3uikit";
import etherscan from "../images/etherscan.png";
import opensea from "../images/opensea.png";

function Collection() {
  const [data, setData] = useState();
  const [largest, setLargest] = useState("NA");
  const [highBuy, setHighBuy] = useState("NA");
  const [longHold, setLongHold] = useState("NA");

  const columns = [
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Current Quantity",
      dataIndex: "amount",
    },

    {
      title: "Avg Days Held",
      dataIndex: "avgHold",
    },
    {
      title: "Avg Price",
      dataIndex: "avgPrice",
    },
    {
      title:"Quantity Change",
      dataIndex: "recentTx",
    },
  ];
  

  return (
    <>
      <div className="stats">
        <div className="colStats">
          <div>
            <div className="stat">{longHold}</div>
            Longest Avg Hold
          </div>
          <div>
            <div className="stat">{largest}</div>
            Largest Bag
          </div>

          <div>
            <div className="stat">
              <Icon fill="#ffffff" svg="eth" />
              {highBuy}
            </div>
            Highest Avg Buy In
          </div>
        </div>
        <div className="colLinks">
          <img src={opensea} alt="os" className="link" />
          <img src={etherscan} alt="es" className="link" />
        </div>
      </div>
      <div className="App">
        <div className="tableContainer">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
}

export default Collection;
