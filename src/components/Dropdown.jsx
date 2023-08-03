import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Pdf from "react-to-pdf";
import { deleteChecklist } from "redux/actions/checklist/index";
import { SET_BOX_TYPE } from "redux/actions/action_types";

const DropdownBox = ({ reff, toggleab }) => {
  const { id: pathId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boxType = useSelector((state) => state?.checkBox?.boxType);

  const DeleteChecklist = async () => {
    const res = await dispatch(deleteChecklist(pathId));
    if (res.status === 204) {
      navigate("/process");
    }
  };

  const CheckboxHandler = () => {
    if (boxType === "square")
      dispatch({ type: SET_BOX_TYPE, payload: "round" });
    else dispatch({ type: SET_BOX_TYPE, payload: "square" });
  };

  const items = [
    {
      key: "0",
      label: <div onClick={() => toggleab(true)}>Add media header</div>,
    },
    {
      key: "1",
      label: (
        <div onClick={CheckboxHandler}>
          {boxType === "square" ? "Round" : "Square"} Checkbox
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={() => console.log("dsa")}>Duplicate this checklist</div>
      ),
    },
    {
      key: "3",
      label: (
        <Pdf
          targetRef={reff?.current}
          filename="checklist.pdf"
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              style={{
                border: "none",
                background: "transparent",
                padding: "1px 0px",
                cursor: "pointer",
              }}
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      ),
    },
    {
      key: "4",
      danger: true,
      label: <div onClick={DeleteChecklist}>Delete checklist</div>,
    },
  ];
  return (
    <Dropdown menu={{ items }} disabled={!(pathId !== undefined && pathId)}>
      <div onClick={(e) => e.preventDefault()}>
        <Space>
          Select
          <DownOutlined />
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownBox;
