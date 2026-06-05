import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { GenevaButton } from "@/components/ui/GenevaButton";
import { CONTACT } from "@/lib/constants";

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
  "Accountant",
  "Family Office",
  "Family Principal",
  "Institutional Counterparty",
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

  // Backend integration pending — client-side only for now.
  const onSubmit = (data: FormValues) => {
    console.log("Geneva contact form submission:", data);
    setSubmitted(true);
  };

  const labelCls = "block font-sans text-[11px] font-medium uppercase text-aubergine/70";
  const inputCls =
    "mt-2 w-full border-0 border-b border-aubergine/20 bg-transparent py-3 font-sans text-[16px] text-aubergine outline-none transition-colors focus:border-brick";

  return (
    <SectionReveal as="section" id="contact" ariaLabel="Contact" className="bg-beige py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          {/* Left column */}
          <div className="md:col-span-5">
            <EyebrowLabel className="text-brick">Contact</EyebrowLabel>
            <h2
              className="mt-6 font-display font-medium text-aubergine"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              Start a conversation.
            </h2>
            <p className="mt-6 text-[18px] leading-[1.65] text-aubergine/85">
              Tell us a bit about yourself and a member of our team will be in touch. All inquiries are
              handled in confidence.
            </p>

            <div className="mt-12 h-px w-10 bg-brick" />

            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase text-brick" style={{ letterSpacing: "0.18em" }}>
                Offices
              </p>
              <div className="mt-3 text-[14px] text-aubergine/75" style={{ lineHeight: 1.8 }}>
                Geneva Life Holdings
                <br />
                Barbados (HQ) · New York · Miami · Jerusalem · Zurich
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase text-brick" style={{ letterSpacing: "0.18em" }}>
                Existing Partners
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-aubergine/70">
                Existing partners can also reach our Client Services team directly.
              </p>
              <p className="mt-3 text-[14px]">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-brick underline decoration-brick decoration-1 underline-offset-4 transition-colors hover:text-sunset"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="mt-2 text-[14px]">
                <a
                  href={CONTACT.phoneHref}
                  className="text-brick underline decoration-brick decoration-1 underline-offset-4 transition-colors hover:text-sunset"
                >
                  {CONTACT.phone}
                </a>
              </p>
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
                    A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
                  <div>
                    <label htmlFor="name" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      Full Name *
                    </label>
                    <input id="name" type="text" autoComplete="name" className={inputCls} {...register("name", { required: true })} />
                    {errors.name && <p className="mt-1 text-[12px] text-brick">Please enter your full name.</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      Email Address *
                    </label>
                    <input id="email" type="email" autoComplete="email" className={inputCls} {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                    {errors.email && <p className="mt-1 text-[12px] text-brick">Please enter a valid email.</p>}
                  </div>

                  <div>
                    <label htmlFor="firm" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      Firm / Organization
                    </label>
                    <input id="firm" type="text" autoComplete="organization" className={inputCls} {...register("firm")} />
                  </div>

                  <div>
                    <label htmlFor="role" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      I am a... *
                    </label>
                    <select id="role" defaultValue="" className={inputCls + " appearance-none"} {...register("role", { required: true })}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {roleOptions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    {errors.role && <p className="mt-1 text-[12px] text-brick">Please select an option.</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls} style={{ letterSpacing: "0.18em" }}>
                      How can we help? *
                    </label>
                    <textarea id="message" rows={4} className={inputCls + " resize-none"} {...register("message", { required: true })} />
                    {errors.message && <p className="mt-1 text-[12px] text-brick">Please include a short message.</p>}
                  </div>

                  <GenevaButton type="submit" className="w-full" disabled={isSubmitting}>
                    Send Message
                  </GenevaButton>

                  <p className="text-[13px] italic leading-[1.65] text-aubergine/60">
                    Your information is handled with the same discretion we bring to every Geneva
                    relationship.
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
