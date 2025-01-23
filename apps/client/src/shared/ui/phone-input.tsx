import { forwardRef } from "react";
import { Input } from "./input";
import * as RPNInput from "react-phone-number-input/input";
import { DefaultInputComponentProps } from "react-phone-number-input";

export const PhoneInput = forwardRef<
  HTMLInputElement,
  DefaultInputComponentProps
>((props, ref) => {
  return (
    <RPNInput.default
      inputComponent={Input}
      ref={ref}
      {...props}
      onChange={props.onChange}
    />
    // <InputMask
    //   type="tel"
    //   placeholder="+7 ("
    //   track={({ inputType, value, data }) => {
    //     if (
    //       inputType === "insert" &&
    //       value === "" &&
    //       (data === "8" || data === "+")
    //     ) {
    //       return "7";
    //     }

    //     if (inputType === "insert" && value === "" && data === "9") {
    //       return "79";
    //     }

    //     return data;
    //   }}
    //   component={Input}
    //   ref={ref}
    //   {...phoneFormatOptions}
    //   {...props}
    // />
  );
});
