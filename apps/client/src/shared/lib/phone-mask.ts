import { format } from "@react-input/mask";

export function phoneMask(value: string) {
  return format(value, {
    mask: "+_ ___ ___ __ __",
    replacement: { _: /\d/ },
  });
}
