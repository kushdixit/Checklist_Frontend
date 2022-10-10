import styled from "styled-components";

export const ButtonContainer = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    background: #1d2e88;
    border-radius: 8px;
    box-shadow: 0 3px 6px #00000029;
    &:disabled,
    &[disabled],
    &.inactive {
      cursor: default;
      opacity: 0.4;
    }

    &.primary {
      background-color: #9d9d9d;
    }
    &.no-style {
      border: 0;
      background-color: transparent;
      color: inherit;
      padding: initial;
      -webkit-appearance: none;
    }
    &:active,
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 0.6;
    }
    &.withWhiteBorder {
      border-radius: 2px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      border: solid 2px #ffffff;
      color: #ffffff;
    }
    &.with-blue-border {
      border-radius: 2px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      border: solid 1px #1c5bae;
      color: #1c5bae;
    }
    &.no-border {
      border: 0 !important;
    }
  }
`;
