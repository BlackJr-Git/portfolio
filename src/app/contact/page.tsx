"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FAQsThree from "@/components/faqs-3";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Here you would typically send the data to an API endpoint
    console.log(data);
    setSubmitted(true);
  }

  return (
    <>
      <section className="px-3 min-h-[70vh] flex flex-col items-center justify-center bg-background">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-black dark:text-white">
              Get in Touch
            </h2>
            <p className="mb-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
              Ready to start your project? Let&apos;s discuss your needs!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-blue-50/50 dark:bg-blue-950/30 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
              <a href="mailto:juniorassosa@gmail.com" className="flex flex-col items-center gap-2 group w-full">
                <span className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 3.5 6.75v.38l8.5 5.67 8.5-5.67v-.38A1.25 1.25 0 0 0 19.25 5H4.75Zm15.75 3.12-7.7 5.14a1 1 0 0 1-1.1 0L3.5 8.12v9.13c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V8.12Z"/></svg>
                </span>
                <span className="font-semibold text-base text-gray-900 dark:text-gray-100">Email</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm mb-4">juniorassosa@gmail.com</span>
                <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Write
                </span>
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-blue-50/50 dark:bg-blue-950/30 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
              <a href="tel:+243851750853" className="flex flex-col items-center gap-2 group w-full">
                <span className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
                </span>
                <span className="font-semibold text-base text-gray-900 dark:text-gray-100">Phone</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm mb-4">+243 851750853</span>
                <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </span>
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-blue-50/50 dark:bg-blue-950/30 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
              <a href="https://wa.me/243851750853" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group w-full">
                <span className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm.01 17.13c-1.63 0-3.22-.48-4.56-1.38l-.33-.21-3.02.79.8-2.94-.22-.34A8.13 8.13 0 0 1 3.88 12c0-4.48 3.65-8.13 8.13-8.13 4.48 0 8.13 3.65 8.13 8.13 0 4.48-3.65 8.13-8.13 8.13Zm4.56-5.85c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.01-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.36-.77-1.86-.2-.48-.4-.42-.55-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.12.17 1.7 2.6 4.13 3.54.58.2 1.03.32 1.39.41.58.14 1.1.12 1.51.07.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z"/></svg>
                </span>
                <span className="font-semibold text-base text-gray-900 dark:text-gray-100">WhatsApp</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm mb-4">+243 851750853</span>
                <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Chat
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border  p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank you!</h3>
                <p className="text-gray-600 dark:text-gray-300">Your message has been received. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <input
                              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Your name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <input
                              type="email"
                              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="uiux">UI/UX Design</SelectItem>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile Development</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQsThree />
    </>
  );
}
