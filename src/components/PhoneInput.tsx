import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+54", country: "AR", flag: "🇦🇷" },
  { code: "+57", country: "CO", flag: "🇨🇴" },
  { code: "+56", country: "CL", flag: "🇨🇱" },
  { code: "+51", country: "PE", flag: "🇵🇪" },
];

export default function CustomPhoneInput({ 
  value, 
  onChange, 
  placeholder = "Número de teléfono",
  className 
}: PhoneInputProps) {
  const [countryCode, setCountryCode] = React.useState("+52");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    if (value) {
      const foundCode = countryCodes.find(c => value.startsWith(c.code));
      if (foundCode) {
        setCountryCode(foundCode.code);
        setPhoneNumber(value.substring(foundCode.code.length));
      }
    }
  }, []);

  const handleCountryChange = (newCode: string) => {
    setCountryCode(newCode);
    onChange(newCode + phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value.replace(/\D/g, '').substring(0, 10);
    setPhoneNumber(number);
    onChange(countryCode + number);
  };

  return (
    <div className={`flex ${className}`}>
      <Select value={countryCode} onValueChange={handleCountryChange}>
        <SelectTrigger className="w-24 rounded-r-none border-r-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <span className="flex items-center gap-2">
                <span>{country.flag}</span>
                <span>{country.code}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        placeholder={placeholder}
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="flex-1 rounded-l-none focus:shadow-glow transition-all duration-300"
        maxLength={10}
      />
    </div>
  );
}