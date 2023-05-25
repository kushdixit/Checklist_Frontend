import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { ButtonContainer } from "styles/components/Button";
import { colors } from "constants/color";
const Button = ({
  handleClick,

  type,
  children,
  disabled,
  id,
  buttonType,
  props,
}) => {
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
  return (
    <ButtonContainer>
      <button
        type={buttonType ? buttonType : "submit"}
        id={id}
        className={`${type ? `button ${type}` : "button"}`}
        onClick={(e) => _.isFunction(handleClick) && handleClick(e)}
        disabled={disabled}
      >
        {children}
      </button>
    </ButtonContainer>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

Button.defaultProps = {
  id: "",
};

export default Button;
