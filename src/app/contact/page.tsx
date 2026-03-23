import type { Metadata } from "next";
import { contactDetails } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Emmaus Hope Foundation by email, phone, or message to discuss donations, volunteering, partnerships, or general inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Emmaus Hope Foundation",
    description:
      "Contact Emmaus Hope Foundation by email, phone, or message to discuss donations, volunteering, partnerships, or general inquiries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with Emmaus Hope Foundation"
        description="We would be glad to hear from donors, volunteers, churches, NGOs, public institutions, and anyone interested in supporting this mission."
      />

      <section className="pb-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <StaggerGrid className="grid gap-6">
              {contactDetails.map((item) => (
                <FocusCard key={item.title} {...item} />
              ))}
            </StaggerGrid>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}