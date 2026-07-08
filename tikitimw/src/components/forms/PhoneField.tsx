"use client";

import { forwardRef, InputHTMLAttributes } from "react";

import TextField from "./TextField";

interface PhoneFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PhoneField = forwardRef<
  HTMLInputElement,
  PhoneFieldProps
>(({ placeholder, ...props }, ref) => {
  return (
    <TextField
      ref={ref}
      type="tel"
      placeholder={placeholder ?? "+265991234567"}
      autoComplete="tel"
      inputMode="tel"
      {...props}
    />
  );
});

PhoneField.displayName = "PhoneField";

export default PhoneField;