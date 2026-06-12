import { PageTransition } from "@/components/layout/PageTransition";
import { CoursesHero } from "@/components/sections/courses/CoursesHero";
import { CoursesClient } from "@/components/sections/courses/CoursesClient";

export default function CoursesPage() {
  return (
    <PageTransition>
      <main className="flex flex-col flex-1">
        <CoursesHero />
        <CoursesClient />
      </main>
    </PageTransition>
  );
}
