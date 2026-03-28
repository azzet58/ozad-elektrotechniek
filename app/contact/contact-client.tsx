"use client";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FadeIn } from "@/components/animations/fade-in";
import { useActionState, useEffect, useRef } from "react";
import { sendContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactForm, null);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div data-nav-theme="light" className="pt-24 lg:pt-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm 2xl:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl md:text-5xl 2xl:mb-24 2xl:text-7xl">
            Neem contact op
          </h1>
          <div className="mb-12 max-w-3xl lg:mb-24">
            <p className="font-medium text-neutral-500 2xl:text-2xl">
              Heeft u vragen of wilt u meer informatie? Neem dan gerust contact
              met ons op via het contactformulier hieronder of via WhatsApp.
            </p>
          </div>

          <form action={formAction} ref={formRef}>
            <input
              type="text"
              name="honeypot"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <FieldSet className="mb-12 lg:mb-24">
              <FieldGroup>
                <div className="grid grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="name" className="2xl:text-xl">
                      Naam
                    </FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      className="h-12 md:!text-base 2xl:h-16 2xl:!text-xl"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone" className="2xl:text-xl">
                      Telefoonnummer
                    </FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="h-12 md:!text-base 2xl:h-16 2xl:!text-xl"
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="email" className="2xl:text-xl">
                    E-mailadres
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="h-12 md:!text-base 2xl:h-16 2xl:!text-xl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message" className="2xl:text-xl">
                    Bericht
                  </FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    className="h-36 md:!text-base 2xl:h-64 2xl:!text-xl"
                  />
                </Field>

                {state && (
                  <p
                    className={
                      state.success ? "text-green-600" : "text-red-500"
                    }
                  >
                    {state.message}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className="cursor-pointer self-start rounded-full bg-blue-600 p-4 text-xs font-bold hover:bg-blue-700 disabled:opacity-50 md:text-sm 2xl:p-6 2xl:text-lg"
                >
                  {isPending ? "Versturen..." : "Versturen"}
                </Button>
              </FieldGroup>
            </FieldSet>
          </form>
        </FadeIn>
      </div>
      <FadeIn>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157461.3410764555!2d4.3260223081810745!3d51.927871036392354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5229bbac955e4b85!2sRotterdam!5e0!3m2!1sen!2snl!4v1767195798995!5m2!1sen!2snl"
            allowFullScreen
            height="800"
            loading="lazy"
            className="h-[50vh] w-full lg:h-[100vh]"
            title="Locatie Özad Elektrotechniek Rotterdam"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </FadeIn>
    </div>
  );
}
