import { cn } from "@/shared/lib/cn";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { FeedbackForm } from "./feedback-form";

type FeedbackCardProps = {} & React.ComponentProps<typeof Section>;

export function FeedbackCard({ className, ...props }: FeedbackCardProps) {
  return (
    <Section
      space="lg"
      className={cn("rounded-main bg-card ~px-6/12 ~py-5/9", className)}
      {...props}
    >
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Форма обратной связи</h1>
      </SectionHeader>
      <SectionContent>
        <FeedbackForm />
      </SectionContent>
    </Section>
  );
}
