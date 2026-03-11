"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
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
import { useState } from "react";

export default function Contact() {
  const [mapActive, setMapActive] = useState(false);

  return (
    <div data-nav-theme="light" className="pt-24 lg:pt-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm xl:text-base">
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
          <h1 className="font-heading mb-12 text-4xl md:text-5xl xl:mb-24 xl:text-7xl">
            Neem contact op
          </h1>
          <div className="mb-12 max-w-3xl lg:mb-24">
            <p className="font-medium text-neutral-500 xl:text-2xl">
              Heeft u vragen of wilt u meer informatie? Neem dan gerust contact
              met ons op via het contactformulier hieronder of via WhatsApp.
            </p>
          </div>
          <FieldSet className="mb-12 lg:mb-24">
            <FieldGroup>
              <div className="grid grid-cols-2 gap-6">
                <Field>
                  <FieldLabel htmlFor="name" className="xl:text-xl">
                    Naam
                  </FieldLabel>
                  <Input
                    type="text"
                    className="h-12 md:!text-base xl:h-16 xl:!text-xl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone" className="xl:text-xl">
                    Telefoonnummer
                  </FieldLabel>
                  <Input
                    type="tel"
                    className="h-12 md:!text-base xl:h-16 xl:!text-xl"
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="email" className="xl:text-xl">
                  E-mailadres
                </FieldLabel>
                <Input
                  type="email"
                  className="h-12 md:!text-base xl:h-16 xl:!text-xl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message" className="xl:text-xl">
                  Bericht
                </FieldLabel>
                <Textarea className="h-36 md:!text-base xl:h-64 xl:!text-xl" />
              </Field>
              <Button
                type="submit"
                className="cursor-pointer self-start rounded-full bg-blue-600 p-4 text-xs font-bold hover:bg-blue-700 md:text-sm xl:p-6 xl:text-lg"
              >
                Versturen
              </Button>
            </FieldGroup>
          </FieldSet>
        </FadeIn>
      </div>
      <FadeIn>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157461.3410764555!2d4.3260223081810745!3d51.927871036392354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5229bbac955e4b85!2sRotterdam!5e0!3m2!1sen!2snl!4v1767195798995!5m2!1sen!2snl"
            allowFullScreen
            height="800"
            loading="lazy"
            className="h-[30vh] w-full md:h-[50vh] xl:h-[100vh]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </FadeIn>
    </div>
  );
}
