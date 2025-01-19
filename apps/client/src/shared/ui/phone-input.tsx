import { InputMask, InputMaskProps } from "@react-input/mask";
import { forwardRef } from "react";
import { Input } from "./input";
import { phoneFormatOptions } from "../lib/phone-format";

export const PhoneInput = forwardRef<HTMLInputElement, InputMaskProps>(
  (props, ref) => {
    return (
      <InputMask
        type="tel"
        placeholder="+7 ("
        track={({ inputType, value, data }) => {
          if (
            inputType === "insert" &&
            value === "" &&
            (data === "8" || data === "+")
          ) {
            return "7";
          }

          if (inputType === "insert" && value === "" && data === "9") {
            return "79";
          }

          return data;
        }}
        component={Input}
        ref={ref}
        {...phoneFormatOptions}
        {...props}
      />
    );
  }
);
