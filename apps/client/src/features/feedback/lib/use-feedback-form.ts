import { useForm } from "react-hook-form";
import { useFeedback } from "./use-feedback";
import {
  feedbackFormSchema,
  FeedbackFormSchema,
} from "../model/feedback-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useFeedbackForm() {
  const form = useForm<FeedbackFormSchema>({
    defaultValues: {
      fio: "",
      phone: "",
      message: "",
      privacy: true,
      personalData: false,
    },
    resolver: zodResolver(feedbackFormSchema),
  });

  const { sendFeedbackHandler, isPending } = useFeedback({
    onSuccess: () => {
      form.reset();
    },
  });

  return { sendFeedbackHandler, isPending, form };
}
