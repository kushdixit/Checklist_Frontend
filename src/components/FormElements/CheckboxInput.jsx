import React from 'react'
import {CheckboxContainer,InputCheckBox} from 'styles/components/CheckboxInput'

const CheckboxInput = (props) => (
  <div className={`checkbox-field ${props?.disabled && 'checkBoxDisable'}`}>
    
    <CheckboxContainer className="checkbox-container">
      <InputCheckBox
        {...props}
        checked={props.value}
        className="checkBox"
        type="checkbox"
        onChange={(e) => {
          props?.onChange(e.target.checked)
        }}
      />
      <span className="checkMark"></span>
      {props?.label}
    </CheckboxContainer>
  </div>
)

export default CheckboxInput
