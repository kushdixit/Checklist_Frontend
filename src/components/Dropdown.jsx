import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { deleteChecklist } from "redux/actions/checklist/index";

const DropdownBox = () => {
  const { id: pathId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const DeleteChecklist = async () => {
    const res = await dispatch(deleteChecklist(pathId));
    if (res.status === 204) {
      navigate("/process");
    }
  };
  const items = [
    {
      key: "0",
      label: <div onClick={() => console.log("dsa")}>Add media header</div>,
    },
    {
      key: "1",
      label: <div onClick={() => console.log("dsa")}>Checkbox Styles</div>,
    },
    {
      key: "2",
      label: (
        <div onClick={() => console.log("dsa")}>Duplicate this checklist</div>
      ),
    },
    {
      key: "3",
      label: <div onClick={() => console.log("dsa")}>Print this checklist</div>,
    },
    {
      key: "4",
      danger: true,
      label: <div onClick={DeleteChecklist}>Delete checklist</div>,
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Select
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownBox;
