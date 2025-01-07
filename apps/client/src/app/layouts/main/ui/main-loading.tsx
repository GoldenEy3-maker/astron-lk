import { Icons } from "@/shared/ui/icons";

export function MainLoading() {
  return (
    <div className="col-[main] grid place-items-center">
      <Icons.Loader className="text-[8rem] text-primary" />
    </div>
  );
}
