import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
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

export default function Contact() {
  return (
    <div data-nav-theme="light" className="pt-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-24 text-7xl">Neem contact op</h1>
        <div className="mb-24 max-w-3xl">
          <p className="text-2xl font-medium text-neutral-500">
            Heeft u vragen of wilt u meer informatie? Neem dan gerust contact
            met ons op via het contactformulier hieronder of via WhatsApp.
          </p>
        </div>
        <FieldSet className="mb-24">
          <FieldGroup>
            <div className="grid grid-cols-2 gap-8">
              <Field>
                <FieldLabel htmlFor="name" className="text-xl">
                  Naam
                </FieldLabel>
                <Input type="text" className="h-16 !text-2xl" />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone" className="text-xl">
                  Telefoonnummer
                </FieldLabel>
                <Input type="tel" className="h-16 !text-2xl" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email" className="text-xl">
                E-mailadres
              </FieldLabel>
              <Input type="email" className="h-16 !text-2xl" />
            </Field>
            <Field>
              <FieldLabel htmlFor="message" className="text-xl">
                Bericht
              </FieldLabel>
              <Textarea className="h-64 !text-2xl" />
            </Field>
            <Button
              type="submit"
              className="self-start rounded-full bg-blue-600 p-6 text-lg font-bold hover:bg-black"
            >
              Versturen
            </Button>
          </FieldGroup>
        </FieldSet>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157461.3410764555!2d4.3260223081810745!3d51.927871036392354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5229bbac955e4b85!2sRotterdam!5e0!3m2!1sen!2snl!4v1767195798995!5m2!1sen!2snl"
          allowFullScreen
          height="1200"
          loading="lazy"
          className="w-full rounded-md"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
