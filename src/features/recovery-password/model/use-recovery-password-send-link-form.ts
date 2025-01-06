import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  RecoveryPasswordSendLinkFormSchema,
  recoveryPasswordSendLinkFormSchema,
} from "./recovery-password-send-link-form-schema";
import { useRecoveryPasswordSendLink } from "./use-recovery-password-send-link";

export function useRecoveryPasswordSendLinkForm() {
  const form = useForm<RecoveryPasswordSendLinkFormSchema>({
    resolver: zodResolver(recoveryPasswordSendLinkFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const { recoveryPasswordSendLinkHandler, isPending } =
    useRecoveryPasswordSendLink({
      onSuccess: () => {
        form.reset();
      },
    });

  return { form, recoveryPasswordSendLinkHandler, isPending };
}
