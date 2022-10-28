import React, { useState } from "react";
import { Controller } from "react-hook-form";
import EndIcon from "assets/SVG/PasswordIconText";
import PasswordIconText from "assets/SVG/PasswordIconText";

import styled from "styled-components";
import { unstable_HistoryRouter } from "react-router-dom";
const TextInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="app-input-text">
      <Controller
        render={({ field: { value, rules, onChange } }) => (
          <input
            className={props.disabled ? "disabled" : ""}
            onChange={(e) => {
              onChange(e);
            }}
            onFocus={(e) => {
              if (props?.onFocus) props?.onFocus(e?.target?.value);
            }}
            onBlur={(e) => {
              if (props?.onBlur) props?.onBlur(e?.target?.value);
            }}
            type={!showPassword ? props.type : "text"}
            placeholder={props.placeholder}
            defaultValue={props?.defaultValue}
            style={props?.style}
            disabled={props.disabled}
            value={props?.value || value}
            rules={rules}
            name={props?.name}
          />
        )}
        name={props?.name}
        control={props.control}
      />
      <>
        {!showPassword
          ? props.type === "password" && (
              <EndIcon
                className="passwordIcon"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )
          : props.type === "password" && (
              <PasswordIconText
                className="passwordIcon"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
      </>
    </div>
  );
};

export default TextInput;
