import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { GenevaButton } from "@/components/ui/GenevaButton";

type FormValues = {
  name: string;
  email: string;
  firm?: string;
  role: string;
  message: string;
};

const roleOptions = [
  "Advisor or RIA",
  "Attorney",
  "Family Office",
  "Family Principal",
  "Existing Partner",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // TODO: wire to backend (Resend / serverFn / Formspree) — client-side only for now.
  const onSubmit = (data: FormValues) => {
    console.log("Geneva contact form submission:", data);
    setSubmitted(true);
  };

  const labelCls =
    "block font-sans text-[11px] font-medium uppercase text-aubergine/70";
  const inputCls =
    "mt-2 w-full border-0 border-b border-aubergine/20 bg-transparent py-3 font-sans text-[16px] text-aubergine outline-none transition-colors focus:border-brick";

  return (
    <SectionReveal
      as="section"
      id="contact"
      ariaLabel="Contact"
      className="bg-beige py-16 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          {/* Left column */}
          <div className="md:col-span-5">
            <EyebrowLabel className="text-brick">Get in Touch</EyebrowLabel>
            <h2
              className="mt-6 font-display font-medium text-aubergine"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              Start a conversation.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-aubergine/85 md:text-[18px]">
              Tell us a bit about yourself and a member of our team will be in touch. All inquiries
              are handled in confidence.
            </p>

            <div className="mt-12 h-px w-10 bg-brick" />

            <div className="mt-8 space-y-3 text-[14px] leading-relaxed text-aubergine/70">
              <p
                className="text-[11px] font-medium uppercase text-brick"
                style={{ letterSpacing: "0.18em" }}
              >
                Existing Partners
              </p>
              <p className="text-aubergine">Existing partners can also reach our Client Services team directly.</p>
              <p>
                <a
                  href="mailto:info@geneva-ppli.com"
                  className="text-aubergine transition-colors hover:text-sunset"
                >
                  info@geneva-ppli.com
                </a>
              </p>
              <p>
                <a href="tel:+12466239700" className="text-aubergine transition-colors hover:text-sunset">
                  +1 246 623 9700
                </a>
              </p>

              <div className="pt-6">
                <p
                  className="text-[11px] font-medium uppercase text-brick"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Office
                </p>
                <address className="mt-3 not-italic text-[14px] leading-[1.7] text-aubergine/80">
                  Geneva Life Holdings<br />
                  2nd Floor, One Welches<br />
                  Welches, St. Thomas<br />
                  Barbados BB22025
                </address>
              </div>
            </div>
          </div>

          {/* Right column — form card */}
          <div className="md:col-span-7">
            <div className="border border-aubergine/10 bg-white p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brick text-brick">
                    <Check strokeWidth={1.5} />
                  </div>
                  <p className="mt-6 font-display text-[28px] font-medium text-aubergine md:text-[32px]">
                    Thank you.
                  </p>
                  <p className="mt-3 max-w-sm text-[16px] text-aubergine/75">
                    A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
                  <div>
                    <label htmlFor="name" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={inputCls}
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[12px] text-brick">Please enter your full name.</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputCls}
                      {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[12px] text-brick">Please enter a valid email.</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="firm" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      Firm / Organization
                    </label>
                    <input
                      id="firm"
                      type="text"
                      autoComplete="organization"
                      className={inputCls}
                      {...register("firm")}
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      I am a... *
                    </label>
                    <select
                      id="role"
                      defaultValue=""
                      className={inputCls + " appearance-none"}
                      {...register("role", { required: true })}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {roleOptions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="mt-1 text-[12px] text-brick">Please select an option.</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={inputCls + " resize-none"}
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[12px] text-brick">Please include a short message.</p>
                    )}
                  </div>

                  <GenevaButton type="submit" className="w-full" disabled={isSubmitting}>
                    Send Message
                  </GenevaButton>

                  <p className="text-[13px] italic leading-relaxed text-aubergine/60">
                    Your information is handled with the same discretion we bring to every Geneva
                    relationship. We do not share inquiry details outside our team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
