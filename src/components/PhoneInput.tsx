import React from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CustomPhoneInput({ 
  value, 
  onChange, 
  placeholder = "Número de teléfono",
  className 
}: PhoneInputProps) {
  return (
    <PhoneInput
      country={'mx'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      inputProps={{
        name: 'phone',
        required: false,
        maxLength: 15,
      }}
      containerClass={cn(
        "phone-input-container",
        className
      )}
      inputClass="phone-input-field"
      buttonClass="phone-input-button"
      dropdownClass="phone-input-dropdown"
      searchClass="phone-input-search"
      containerStyle={{
        width: '100%',
      }}
      inputStyle={{
        width: '100%',
        height: '2.5rem',
        fontSize: '14px',
        border: '1px solid hsl(var(--border))',
        borderRadius: 'calc(var(--radius) - 2px)',
        backgroundColor: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
        paddingLeft: '50px',
      }}
      buttonStyle={{
        border: '1px solid hsl(var(--border))',
        borderRight: 'none',
        backgroundColor: 'hsl(var(--background))',
        borderRadius: 'calc(var(--radius) - 2px) 0 0 calc(var(--radius) - 2px)',
      }}
      dropdownStyle={{
        backgroundColor: 'hsl(var(--popover))',
        border: '1px solid hsl(var(--border))',
        borderRadius: 'calc(var(--radius) - 2px)',
        color: 'hsl(var(--popover-foreground))',
        zIndex: 50,
      }}
    />
  );
}