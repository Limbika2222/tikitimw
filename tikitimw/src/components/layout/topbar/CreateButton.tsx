import { Plus } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CreateButton() {
  return (
    <PrimaryButton className="px-5 py-2.5 text-sm shadow-xl shadow-violet-950/15">
      <Plus className="h-5 w-5" />
      Create
    </PrimaryButton>
  );
}