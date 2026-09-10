import { CirclePlus, MoreVertical, ArrowUp } from "lucide-react";
import React, { useState } from "react";
import { Flex, Radio, Space, Table, Tag } from "antd";

const topOptions = [
  // { label: "topStart", value: "topStart" },
  // { label: "topCenter", value: "topCenter" },
  // { label: "topEnd", value: "topEnd" },
  // { label: "none", value: "none" },
];
const bottomOptions = [
  // { label: "bottomStart", value: "bottomStart" },
  // { label: "bottomCenter", value: "bottomCenter" },
  // { label: "bottomEnd", value: "bottomEnd" },
  // { label: "none", value: "none" },
];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <Flex gap="small" align="center" wrap>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "kawaii") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="medium">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["kawaii"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function OrderManagment() {
  const [top, setTop] = useState("topStart");
  const [bottom, setBottom] = useState("bottomEnd");
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-lato font-bold text-[22px] py-2 px-2 leading-none tracking-[0.5%] text-[#023337]">
          Order List
        </h3>
        <div className="flex gap-4 px-2 py-2">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            <CirclePlus size={20} />
            <span>Add Order</span>
          </button>
          <button className="p-2 rounded-lg flex gap-2 bg-white hover:bg-neutral-100 text-black border px-4 py-2  border-neutral-200 transition-colors duration-200">
            <span>More Action</span>
            <MoreVertical size={24} />
          </button>
        </div>
      </div>
      {/* cards section */}
      <div className="flex justify-around">
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Total Orders
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              1.240
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Total Orders
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              1.240
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Total Orders
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              1.240
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>{" "}
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Total Orders
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              1.240
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>
      </div>

      {/* antd da table section go */}

      <div>
        <Radio.Group
          style={{ marginBottom: 10 }}
          options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value);
          }}
        />
      </div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      />
      <Table
        columns={columns}
        pagination={{ placement: [top, bottom] }}
        dataSource={data}
      />
    </div>
  );
}
