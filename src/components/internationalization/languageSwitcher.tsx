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
      <SelectContent position="popper">
        <SelectItem value="en">
          <FlagEnSvg />
          {"\ud83c\uddfa\ud83c\uddf8"}
        </SelectItem>
        <SelectItem value="fr">
          <FlagFrSvg />
          {"\ud83c\uddeb\ud83c\uddf7"}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
