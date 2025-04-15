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
          <Typography className="text-white">
            {"\ud83c\uddfa\ud83c\uddf8"}
          </Typography>
        </SelectItem>
        <SelectItem value="fr" className="text-white">
          <FlagFrSvg />
          <Typography className="text-white">
            {"\ud83c\uddeb\ud83c\uddf7"}
          </Typography>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
