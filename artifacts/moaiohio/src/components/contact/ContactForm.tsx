import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const projectTypes = [
  "Vibe coding prototype",
  "AI workflow integration",
  "Rapid MVP build",
  "Business development coaching",
  "Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  projectType: z.string(),
  message: z.string().trim().min(1, "Message is required"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContact();
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", projectType: "", message: "" },
  });

  function submit(values: ContactValues) {
    mutation.mutate(
      { data: { ...values, projectType: values.projectType || undefined } },
      { onSuccess: () => setSubmitted(true) },
    );
  }

  if (submitted) {
    return (
      <div className="play-success" role="status" data-testid="status-contact-success">
        <span className="success-mark"><Check aria-hidden="true" /></span>
        <h3>Message sent!</h3>
        <p>We'll be in touch soon.</p>
        <button
          type="button"
          data-testid="button-contact-reset"
          onClick={() => {
            form.reset();
            mutation.reset();
            setSubmitted(false);
          }}
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form className="play-form" onSubmit={form.handleSubmit(submit)} noValidate aria-busy={mutation.isPending}>
        <div className="play-form-row">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem className="play-form-field">
              <FormLabel>Name</FormLabel>
              <FormControl><input {...field} autoComplete="name" placeholder="Your name" disabled={mutation.isPending} data-testid="input-contact-name" /></FormControl>
              <FormMessage className="play-field-error" />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem className="play-form-field">
              <FormLabel>Email</FormLabel>
              <FormControl><input {...field} type="email" autoComplete="email" placeholder="you@example.com" disabled={mutation.isPending} data-testid="input-contact-email" /></FormControl>
              <FormMessage className="play-field-error" />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="projectType" render={({ field }) => (
          <FormItem className="play-form-field">
            <FormLabel>Project type <em>(optional)</em></FormLabel>
            <FormControl>
              <select {...field} disabled={mutation.isPending} data-testid="select-contact-project-type">
                <option value="">Choose a starting point</option>
                {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </FormControl>
            <FormMessage className="play-field-error" />
          </FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem className="play-form-field">
            <FormLabel>Tell us what's on your mind</FormLabel>
            <FormControl><textarea {...field} rows={4} placeholder="The rough version is welcome." disabled={mutation.isPending} data-testid="input-contact-message" /></FormControl>
            <FormMessage className="play-field-error" />
          </FormItem>
        )} />
        {mutation.isError && (
          <p className="play-form-error" role="alert" data-testid="status-contact-error">
            {mutation.error instanceof Error ? mutation.error.message : "Something went wrong. Please try again."}
          </p>
        )}
        <button className="play-submit" type="submit" disabled={mutation.isPending} data-testid="button-contact-submit">
          <span>{mutation.isPending ? "Sending…" : "Send a note"}</span>
          <ArrowRight size={19} aria-hidden="true" />
        </button>
      </form>
    </Form>
  );
}