import React, { useEffect } from "react";
import autosize from "autosize";
import { Controller } from "react-hook-form";

const TextArea = (props) => {
  useEffect(() => {
    autosize(document.querySelectorAll("textarea"));
  }, []);

  return (
    <div className="app-input-text">
      <Controller
        render={({ field: { value, rules, onChange } }) => (
          <textarea
          
          autoFocus={props.autoFocus}
            onChange={(e) => {
              onChange(e);
            }}
            className={props?.className}
            onFocus={(e) => {
              if (props?.onFocus) props?.onFocus(e?.target?.value);
            }}
            onBlur={(e) => {
              if (props?.onBlur) props?.onBlur(e?.target?.value);
            }}
            type={"text"}
            placeholder={props.placeholder}
            defaultValue={props?.defaultValue}
            style={props?.style}
            disabled={props.disabled}
            value={props?.value || value}
            rules={rules}
            name={props?.name}
            onKeyPress={(e) => {
              if (props?.handlekeyPress) props?.handlekeyPress(e);
            }}
            onKeyDown={(e) => props?.handleKeyDown && props?.handleKeyDown(e)}
            autoComplete={props?.autoComplete ? props?.autoComplete : "off"}
          />
        )}
        name={props?.name}
        control={props.control}
      />
    </div>
  );
};

export default TextArea;
