import React from 'react'
import Select, { components } from 'react-select'
import { Controller } from 'react-hook-form'

const SelectField = (props) => {
  const selected = React.useRef([])

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: props?.background || '#fff',
      borderRadius: '20px',
    
      cursor: 'default',

      border: props?.hideBorder ? '  border: 1px solid #c9c9c9;' : '  border: 1px solid #c9c9c9;',
      // marginBottom: "5px",
      height: props.checkHeight ? 48 : props?.setHeight ? 40 : 48,
      '&:hover': { borderColor: props.hideBorder ? '#cacaca' : '#000' },
      // "div:nth-child(1)": {
      //   height: "100%",
      // },
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 9,
      marginbottom: '0',
      textAlign: 'center',
      borderBottom: '1px solid #E8E8E8',
      borderOpacity: '0.1',
      color: state.selectProps.menuColor,
      padding: '0',
      overflowY: 'overlay',
      display: "table"
    }),

    menuList: (provided, state) => ({
      ...provided,
      paddingTop: 0
    }),

    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#000',
      fontFamily: 'poppinsRegular',
      fontSize: 18,
      textAlign: 'center',
      backgroundColor: state.isSelected ? '#e45829;' : 'initial',
      '&:hover': { opacity: 0.6 },
      zIndex: 1,
      ':active': {
        backgroundColor: !state.isDisabled && (state.isSelected ? null : null),
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: props.colorChange ? '#fff' : '#9d9d9d',
      textAlign: 'center',
      fontFamily: 'poppinsRegular',
      fontSize: 18,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // width:"120px"
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      borderRadius: '25px',
      padding: '0',
      marginRight: '11px',
      height: 'auto !important',
      background: props.colorChange ? '#fff !important' : '#9d9d9d !important',
      color: state.isFocused && props.colorChange ? '#9d9d9d' : props?.colorChange ? '#9d9d9d' : '#fff',
      '&:hover': { color: '#D2D9E8' },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      color: props.indicatorColorChange ? '#fff !important' : '#000 !important',
      marginBottom: '7px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontSize: 16,
      // height: props.checkHeight ? "100%" : props?.setHeight ? 42 : 50,
      justifyContent: 'center',
      padding: '0 10px',

      '&:hover': { color: '#fff' },
      height: '100%',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: props.colorChange ? '#fff' : '#393939',
      textAlign: 'center',
      fontFamily: 'poppinsRegular',
      fontSize: 18,
    }),
    multiValue: (provided) => ({
      ...provided,
      fontFamily: 'poppinsMedium',
      fontSize: 18,
      top: '20px',
      position: 'unset',
      textAlign: 'center',
      transform: 'none',
      background: '#E45829',
      color: '#fff',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      ':hover': {
        backgroundColor: '#d4a397',
      },
    }),
    Input: (provided) => ({
      ...provided,
      height: props.checkHeight ? '100%' : 18,
      margin: '0',
      paddingBottom: '10px !important',
    }),
  }

  const CustomMultiValue = (params) => {
    const { getValue, data } = params
    const selectedOptions = getValue()
    selected.current = selectedOptions
    if (selectedOptions.length == 1) {
      return (
        <label
          style={{
            color: 'black',
            marginLeft: '10px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {selectedOptions?.[0]?.label}{' '}
        </label>
      )
    }

    const currentOptionIdx = selectedOptions.findIndex((option) => option.value === data.value)
    return currentOptionIdx == 0 ? (
      <label style={{ color: 'black' }}>{props?.customMessage || `Multiple values`} </label>
    ) : null
  }

  const Option = (params) => {
    return (
      <div>
        <components.Option {...params}>
          <label>
            {params.data.costCode} {params.label}
          </label>
        </components.Option>
      </div>
    )
  }
  //console.log("SelectField==",props.data)
  return (
    <div className="app-input-text">
      <Controller
        name={props?.name}
        control={props?.control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Select
            onInputChange={(inputValue) => (inputValue.length <= 20 ? inputValue : inputValue.substr(0, 20))}
            isClearable={props?.isClearable}
            menuPlacement={props?.menuPlacement}
            isMulti={props?.multiSelect}
            isDisabled={props?.disabled}
            className={props?.className}
            closeMenuOnSelect={props?.multiSelect ? false : true}
            hideSelectedOptions={false}
            isSearchable={props.searchable ? false : true}
            allowSelectAll={true}
            placeholder={props?.placeholder}
            styles={customStyles}
            onBlur={() => {
              onBlur(selected.current)
              if (props?.onBlur) props?.onBlur(selected.current)
            }}
            onChange={(e) => {
              onChange(e)
              selected.current = e
              if (props?.onChange) props?.onChange(e)
            }}
            value={props?.value ? props?.data?.filter((option) => option?.value === props?.value) : value}
            options={props.data}
            defaultValue={props.defaultValue}
            components={
              !props.customiseMultiSelect
                ? {
                  MultiValue: CustomMultiValue,
                  Option: Option,
                }
                : null
            }
          />
        )}
      />
    </div>
  )
}
export default SelectField
