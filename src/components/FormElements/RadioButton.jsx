import React, { useState } from "react";
import { Radio, Space } from "antd";

import { RadioSection } from "styles/components/RadioButton";
const RadioButton = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <RadioSection>
        <Space
          direction="horizontal"
          style={{
            maxWidth: 608,
            justifyContent: "space-between",
            display: "flex",
            marginBottom: 30,
          }}
        >
          <Radio style={{ fontSize: 14, fontWeight: 400 }} value={1}>
            1 Column
          </Radio>
          <Radio style={{ fontSize: 14, fontWeight: 400 }} value={2}>
            2 Columns
          </Radio>
        </Space>
      </RadioSection>
    </Radio.Group>
  );
};

export default RadioButton;
