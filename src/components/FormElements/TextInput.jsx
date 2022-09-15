import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import EndIcon from 'assets/SVG/PasswordIconText';
import PasswordIconText from 'assets/SVG/PasswordIconText';

const TextInput = (props) => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="app-input-text">
      <Controller
        render={({ field: { value, rules } }) => (
          <input
            className={props.disabled ? 'disabled' : ''}
            onChange={(e)=>{
              console.log("==",e?.target.value)
              props?.onChange(e)
            }}           
            onFocus={(e) => {
              if (props?.onFocus) props?.onFocus(e?.target?.value)
            }}
            onBlur={(e) => {
              if (props?.onBlur) props?.onBlur(e?.target?.value)
            }}
            type={!showPassword ? props.type : 'text'}
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
      <div>
        {!showPassword
          ? props.type === 'password' && (
              <EndIcon
                className="passwordIcon"
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
              />
            )
          : props.type === 'password' && (
              <PasswordIconText
                className="passwordIcon"
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
              />
            )}
      </div>
    </div>
  )
}

export default TextInput
