import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { FeedbackFormSchema } from "../model/feedback-form-schema";
import { unformatPhone } from "@/shared/lib/format-phone";

type UseFeedbackProps = {
  onSuccess?: () => void;
};

export function useFeedback({ onSuccess }: UseFeedbackProps = {}) {
  const feedbackMutation = useMutation({
    mutationFn: apiClient.sendFeedback,
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      console.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      onSuccess?.();
    },
  });

  function sendFeedbackHandler(values: FeedbackFormSchema) {
    feedbackMutation.mutate({
      ...values,
      phone: unformatPhone(values.phone) ?? "",
    });
  }

  return { sendFeedbackHandler, isPending: feedbackMutation.isPending };
}
