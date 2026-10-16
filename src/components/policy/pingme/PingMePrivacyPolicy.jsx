import React, { useState, useEffect } from "react";
import pingMe from '../../../assets/pingme.png';
import { SvgIcons } from "../../../utils/SvgIcons";
import Pingmescreenshot from "./Pingmescreenshot";
import Permissions from './PingMePermissions';
import PingMePolicyDetails from './PingMePolicyDetails';

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
               <header className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800/80">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                    <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
                         <a
                              href="/"
                              aria-label="PingMe home"
                              className="group inline-flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-4 focus:ring-offset-slate-950"
                         >
                              <div className="group relative flex size-20 md:size-24 items-center justify-center">
                                   {/* Moving glow behind the logo */}
                                   <div className="absolute inset-[-8px] animate-[spin_5s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,#60a5fa_140deg,transparent_200deg,transparent_360deg)] opacity-70 blur-xl" />

                                   {/* Pulsing outer glow */}
                                   <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg animate-pulse" />

                                   {/* Logo container */}
                                   <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-blue-500/20 transition-transform duration-200 group-hover:scale-105">
                                        <img
                                             src={pingMe}
                                             alt="PingMe Logo"
                                             className="h-full w-full object-contain p-1"
                                        />
                                   </div>
                              </div>

                              <span className="text-5xl md:text-8xl font-bold tracking-tight text-white">
                                   Ping<span className="text-blue-400">me</span>
                              </span>
                         </a>

                         <div className="mt-12 max-w-3xl">
                              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                                   Privacy Policy
                              </h1>

                              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                                   This policy explains what information PingMe may handle when you
                                   use our messaging app, why it is used, and the choices available
                                   to you.
                              </p>

                              <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                                   <span className="inline-block h-1 w-1 rounded-full bg-slate-500"></span>
                                   Effective date: October 15, 2026
                              </div>
                         </div>
                    </div>
               </header>

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
          </div>
     );
}

