import { PageTransition } from "@/components/layout/PageTransition";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { EnquiryForm } from "@/components/sections/contact/EnquiryForm";
import { FAQ } from "@/components/sections/contact/FAQ";

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="flex flex-col flex-1">
        <ContactHero />
        
        <section className="py-24 bg-navy">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <ContactInfo />
              <EnquiryForm />
            </div>
          </div>
        </section>

        <FAQ />
      </main>
    </PageTransition>
  );
}
