import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { cn } from "@/shared/lib/cn";
import { Label } from "@/shared/ui/label";
import { motion, AnimatePresence } from "motion/react";
import { TextMorph } from "./text-morph";
import { createContext, useContext, useId } from "react";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

type FormItemProps = React.ComponentPropsWithRef<"div">;

function FormItem({ className, ...props }: FormItemProps) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

type FormLabelProps = React.ComponentPropsWithRef<typeof LabelPrimitive.Root>;

function FormLabel(props: FormLabelProps) {
  const { formItemId } = useFormField();

  return <Label htmlFor={formItemId} {...props} />;
}

type FormControlProps = React.ComponentPropsWithRef<typeof Slot>;

function FormControl({ ...props }: FormControlProps) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

function FormDescription({ className, ...props }: FormDescriptionProps) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children?: string;
};

function FormMessage({ className, children, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  return (
    <AnimatePresence>
      {body ? (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: "0.5rem" }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
        >
          <p
            id={formMessageId}
            className={cn("text-destructive", className)}
            {...props}
          >
            <TextMorph as="span">{body}</TextMorph>
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
