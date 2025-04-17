"use client";

import { FlagEnSvg } from "@components/flag/flagEnSvg";
import { FlagFrSvg } from "@components/flag/flagFrSvg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";
import { Typography } from "@ui/typography";
import { useRouter } from "next/navigation";
import { useCookie } from "react-use";

export const LanguageSwitcher = () => {
  const [locale, setLocale, _] = useCookie("NEXT_LOCALE");
  const router = useRouter();

  return (
    <Select
      defaultValue={locale ?? "en"}
      onValueChange={(v) => {
        setLocale(v);

        router.refresh();
      }}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" className="text-white">
          <FlagEnSvg />
          <Typography variant="small" className="text-white">
            EN
          </Typography>
        </SelectItem>
        <SelectItem value="fr" className="text-white">
          <FlagFrSvg />
          <Typography variant="small" className="text-white">
            FR
          </Typography>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
