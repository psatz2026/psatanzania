import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/causes" },
    { label: "Our Team", href: "/team" },
    { label: "FAQs", href: "/faqs" },
  ],
  "Get Involved": [
    { label: "Become a Volunteer", href: "/become-a-volunteer" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
    { label: "Terms of Use", href: "/legal-pages/terms-of-use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-[1460px] mx-auto px-[30px] py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-sm flex-shrink-0">
                <Image
                  src="/1.png"
                  alt="Patient Safety Alliance Tanzania"
                  width={34}
                  height={34}
                  className="w-[34px] h-[34px] object-contain"
                />
              </span>
              <span className="font-heading text-[15px] leading-[1.3] text-white max-w-[160px]">
                Patient Safety Alliance Tanzania
              </span>
            </Link>
            <p className="font-body text-[15px] leading-[1.6] text-white/70 max-w-[320px]">
              A youth-led alliance promoting patient safety and patient-centred
              care across Tanzania.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <h4 className="font-heading text-[13px] uppercase tracking-widest text-white/40">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[13px] text-white/40">
            © {new Date().getFullYear()} Patient Safety Alliance Tanzania. All rights reserved.
          </p>
          <p className="font-body text-[13px] text-white/40">
            Collaborating for Better Care.
          </p>
        </div>
      </div>
    </footer>
  );
}
