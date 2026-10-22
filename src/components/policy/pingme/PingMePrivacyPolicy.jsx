import React, { useState, useEffect } from "react";
import pingMe from '../../../assets/pingme.png';
import { SvgIcons } from "../../../utils/SvgIcons";
import Pingmescreenshot from "./Pingmescreenshot";
import Permissions from './PingMePermissions';
import PingMePolicyDetails from './PingMePolicyDetails';
import PingMeFooter from "./shared/PingMeFooter";
import PingMeBanner from "./shared/PingMeBanner";

const sections = [
     { id: "purpose", label: "Purpose", icon: SvgIcons.Info },
     { id: "about", label: "2. About this policy", icon: SvgIcons.Info },
     { id: "information", label: "3. Information we handle", icon: SvgIcons.Profile },
     { id: "use", label: "4. How we use information", icon: SvgIcons.AdjustFilter },
     { id: "sharing", label: "5. When information is shared", icon: SvgIcons.ShareSvg },
     { id: "storage", label: "6. Storage and security", icon: SvgIcons.Lock },
     { id: "permissions", label: "7. Permissions and choices", icon: SvgIcons.Setting },
     { id: "retention", label: "8. Retention and deletion", icon: SvgIcons.Clock },
     { id: "children", label: "9. Children's privacy", icon: SvgIcons.Heart },
     { id: "third-party", label: "10. Third-party services", icon: SvgIcons.GridGlobe },
     { id: "changes", label: "11. Policy changes", icon: SvgIcons.Refresh },
     { id: "contact", label: "12. Contact us", icon: SvgIcons.Phone },
];

function PolicySection({ id, title, children }) {
     return (
          <section id={id} className="scroll-mt-28 group relative">
               <div className="absolute -left-4 top-1.5 hidden h-6 w-1 rounded-full bg-blue-600 transition-all group-hover:block lg:block" />
               <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
               <div className="mt-4 space-y-4 leading-relaxed text-slate-600">{children}</div>
          </section>
     );
}

export default function PingMePrivacyPolicy() {
     const [activeSection, setActiveSection] = useState("");
     const [activeTab, setActiveTab] = useState("policy");

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY + 200;

               for (const section of sections) {
                    const el = document.getElementById(section.id);

                    if (el) {
                         const top = el.offsetTop;
                         const height = el.offsetHeight;

                         if (scrollPosition >= top && scrollPosition < top + height) {
                              setActiveSection(section.id);
                              break;
                         }
                    }
               }
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 antialiased selection:bg-blue-500 selection:text-white">

               {/* Header */}
               <PingMeBanner
                    appName="PingMe"
                    title="Privacy Policy"
                    description="Learn how PingMe handles your information, protects your privacy, and gives you control over your personal data."
                    effectiveDate="October 15, 2026"
                    logo={pingMe}
                    homeUrl="/"
               />

               {/* Main Content */}
               <main className="mx-auto max-w-6xl px-2 py-12 sm:px-8 sm:py-16">

                    {/* Tabs */}
                    <div className="mb-8 flex gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                         {[
                              { id: "policy", label: "Policy" },
                              { id: "images", label: "Images" },
                              { id: "permissions", label: "Permission" },
                         ].map((tab) => (
                              <button
                                   key={tab.id}
                                   type="button"
                                   onClick={() => {
                                        setActiveTab(tab.id);
                                        window.scrollTo({
                                             top: 0,
                                             behavior: "smooth",
                                        });
                                   }}
                                   className={`flex-1 rounded-lg cursor-pointer select-none px-6 py-3 text-sm font-semibold transition-colors ${activeTab === tab.id
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-slate-600 hover:bg-slate-100"
                                        }`}
                              >
                                   {tab.label}
                              </button>
                         ))}
                    </div>

                    {/* Policy Tab */}
                    {activeTab === "policy" && (
                         <div className="grid gap-12 items-start lg:grid-cols-[280px_minmax(0,1fr)]">
                              <PingMePolicyDetails
                                   sections={sections}
                                   activeSection={activeSection}
                                   setActiveSection={setActiveSection}
                              />

                              <div className="min-w-0 space-y-12">
                                   {/* Keep your existing policy sections here */}
                              </div>
                         </div>
                    )}

                    {/* Images Tab */}
                    {activeTab === "images" && (
                         <Pingmescreenshot />
                    )}

                    {/* Permissions Tab */}
                    {activeTab === "permissions" && (
                         <Permissions PolicySection={PolicySection} />
                    )}

               </main>
               <PingMeFooter />
          </div>
     );
}

