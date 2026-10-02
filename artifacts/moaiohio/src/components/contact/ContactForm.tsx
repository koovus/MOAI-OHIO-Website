import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const projectTypes = [
  { value: "Vibe coding prototype", label: "Explore an idea with a prototype" },
  { value: "AI workflow integration", label: "Put AI to work in my workflow" },
  { value: "Rapid MVP build", label: "Build a first version of my product" },
  { value: "Business development coaching", label: "Get guidance on my business" },
  { value: "Other", label: "Talk through something else" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name."),
  email: z.string().trim().min(1, "Please add your email address.").email("Please enter a valid email address."),
  projectType: z.string(),
  message: z.string().trim().min(1, "Tell us a little about your idea or goal."),
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
         <h3>Thanks for reaching out.</h3>
         <p>Your message is in. We'll review your note and be in touch.</p>
        <button
          type="button"
          data-testid="button-contact-reset"
          onClick={() => {
            form.reset();
            mutation.reset();
            setSubmitted(false);
          }}
        >
           Share another idea
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
               <FormLabel>Your name</FormLabel>
               <FormControl><input {...field} autoComplete="name" placeholder="What should we call you?" disabled={mutation.isPending} data-testid="input-contact-name" /></FormControl>
              <FormMessage className="play-field-error" />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem className="play-form-field">
               <FormLabel>Email address</FormLabel>
               <FormControl><input {...field} type="email" autoComplete="email" placeholder="Where can we reach you?" disabled={mutation.isPending} data-testid="input-contact-email" /></FormControl>
              <FormMessage className="play-field-error" />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="projectType" render={({ field }) => (
          <FormItem className="play-form-field">
             <FormLabel>How can we help? <em>(optional)</em></FormLabel>
            <FormControl>
              <select {...field} disabled={mutation.isPending} data-testid="select-contact-project-type">
                 <option value="">Choose what you're working toward</option>
                 {projectTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
              </select>
            </FormControl>
            <FormMessage className="play-field-error" />
          </FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem className="play-form-field">
             <FormLabel>Tell us about your idea or goal</FormLabel>
             <FormControl><textarea {...field} rows={4} placeholder="What are you working on? What would you like to make happen? A rough outline is welcome." disabled={mutation.isPending} data-testid="input-contact-message" /></FormControl>
            <FormMessage className="play-field-error" />
          </FormItem>
        )} />
        {mutation.isError && (
          <p className="play-form-error" role="alert" data-testid="status-contact-error">
             We couldn't send your message. Please try again, or email us directly at{" "}
             <a href="mailto:dan@moaiohio.com">dan@moaiohio.com</a>.
          </p>
        )}
        <button className="play-submit" type="submit" disabled={mutation.isPending} data-testid="button-contact-submit">
           <span>{mutation.isPending ? "Sending your message…" : "Start the conversation"}</span>
          <ArrowRight size={19} aria-hidden="true" />
        </button>
      </form>
    </Form>
  );
}