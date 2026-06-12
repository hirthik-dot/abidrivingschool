import Link from "next/link";
import { SITE, COURSES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center text-2xl font-display font-bold tracking-tight">
              <span>ABI</span><span className="text-amber">.</span>
              <span className="ml-2 font-light text-white/80">Driving School</span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Professional driving training in Kallakurichi, Tamil Nadu. Your trusted partner on the road to confidence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/60">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-amber transition-colors">Courses</Link></li>
              <li><Link href="/about" className="hover:text-amber transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Courses</h4>
            <ul className="flex flex-col gap-3 text-white/60">
              {COURSES.slice(0, 5).map(course => (
                <li key={course.id}>
                  <Link href="/courses" className="hover:text-amber transition-colors">
                    {course.name} &mdash; {course.full.split(' ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="flex flex-col gap-3 text-white/60">
              <li>{SITE.address}</li>
              <li><a href={`tel:${SITE.phone[0].replace(/ /g, '')}`} className="hover:text-amber transition-colors">{SITE.phone[0]}</a></li>
              <li>{SITE.hours.split(' – ')[0]} – {SITE.hours.split(' – ')[1]}</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-sm gap-4">
          <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Made with <span className="text-amber">&hearts;</span> in Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
