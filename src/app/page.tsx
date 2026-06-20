import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/translations";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
