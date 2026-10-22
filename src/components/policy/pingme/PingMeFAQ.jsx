import React, { useState } from "react";
import PingMeFooter from "./shared/PingMeFooter";
import PingMeHeader from "./shared/PingMeHeader";
import { SvgIcons } from "../../../utils/SvgIcons";
import { Link } from "react-router-dom";
import PingMeBanner from "./shared/PingMeBanner";

const faqData = [
     {
          category: "account",
          question: "How do I create a PingMe account?",
          icon: "Profile",
          answer: "Open PingMe and follow the sign-up instructions in the app. Use account details you control and keep your sign-in credentials private.",
     },
     {
          category: "account",
          question: "I can't sign in. What should I do?",
          icon: "Lock",
          answer: "Check that your username and sign-in details are correct, and make sure you have a stable internet connection. If you still can't access your account, contact PingMe support using your registered email address. Never send your password to support.",
     },
     {
          category: "messages",
          icon: "MessageBubble",
          question: "Why aren't my messages sending?",
          answer: "Check your internet connection and try again. If the problem continues, update PingMe to the latest available version and contact support with a description of the issue. Avoid including private message content in your support request.",
     },
     {
          category: "messages",
          icon: "NoNetwork",
          question: "Can I access messages when I'm offline?",
          answer: "Some previously available content may remain accessible on your device while offline. Sending and receiving new messages generally requires an internet connection. Availability can depend on the content and app version.",
     },
     {
          category: "messages",
          icon: "Bell",
          question: "Why aren't notifications arriving?",
          answer: "Check that notifications are enabled for PingMe in your device settings, that Do Not Disturb or battery restrictions aren't blocking them, and that your internet connection is working. You can also restart the app.",
     },
     {
          category: "privacy",
          icon: "Info",
          question: "What information does PingMe handle?",
          answer: "PingMe may process account details, messages and media you send, and technical information needed to operate the service. Read our Privacy Policy for the exact data practices that apply to the current app.",
          link: "/pingme/privacy-policy",
          linkText: "Privacy Policy",
     },
     {
          category: "privacy",
          icon: "Lock",
          question: "How can I keep my account secure?",
          answer: "Use a strong, unique password if your sign-in method uses one, never share verification codes, keep your device protected, and do not share your credentials. PingMe support will never need your password.",
     },
     {
          category: "privacy",
          icon: "Trash",
          question: "Does uninstalling PingMe delete my account?",
          answer: "No. Uninstalling the app does not submit an account deletion request. Use the account deletion page to request deletion and follow the instructions sent to your registered email address.",
          link: "/pingme/ping-me-request-delete-account",
          linkText: "account deletion page",
     },
     {
          category: "deletion",
          icon: "Trash",
          question: "How do I request account deletion?",
          answer: "Visit the PingMe account deletion page and submit the requested account information. You'll receive an email with a confirmation link and further instructions after your request enters the verification process.",
          link: "/pingme/ping-me-request-delete-account",
          linkText: "account deletion page",
     },
     {
          category: "deletion",
          icon: "Info",
          question: "Will my account be deleted as soon as I submit the form?",
          answer: "Not necessarily. Submitting the form starts the request process. Follow the email confirmation instructions. Deletion is completed only after the request is verified and processed.",
     },
     {
          category: "deletion",
          icon: "DatabaseSvg",
          question: "What happens to my data after deletion?",
          answer: "Account deletion is intended to remove your account and associated data according to PingMe's deletion process and retention policy. Some records may need to be retained for a limited period where required for security, legal, or operational reasons. Review our Privacy Policy for the applicable retention rules.",
          link: "/pingme/privacy-policy",
          linkText: "Privacy Policy",
     },
     {
          category: "deletion",
          icon: "Email",
          question: "What if I didn't request account deletion?",
          answer: "Do not click the confirmation link. If you receive an unexpected deletion email, contact PingMe support and keep your account credentials and verification codes private.",
     },
];

const categories = [
     { label: "All questions", value: "all" },
     { label: "Account", value: "account" },
     { label: "Messages", value: "messages" },
     { label: "Privacy & Security", value: "privacy" },
     { label: "Account Deletion", value: "deletion" },
];

const PingMeFAQ = () => {
     const [search, setSearch] = useState("");
     const [activeCategory, setActiveCategory] = useState("all");
     const [openQuestion, setOpenQuestion] = useState(null);


     const filteredFAQs = faqData.filter((faq) => {
          const matchesCategory =
               activeCategory === "all" || faq?.category === activeCategory;

          const matchesSearch =
               faq?.question.toLowerCase().includes(search.toLowerCase()) ||
               faq?.answer.toLowerCase().includes(search.toLowerCase());

          return matchesCategory && matchesSearch;
     });

     return (
          <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
               <PingMeBanner
                    appName="PingMe"
                    title="Frequently Asked Questions"
                    description="Find answers to common questions about PingMe, including account setup, messaging, privacy, app permissions, troubleshooting, and account deletion."
                    effectiveDate=""
                    homeUrl="/"
               />

               <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 px-5 py-16 sm:py-20">
                    <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl text-center">

                         <p className="mx-auto -mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                              Quick answers about messaging, your account, privacy,
                              and keeping your PingMe experience secure.
                         </p>

                         {/* Search */}
                         <div className="relative mx-auto mt-8 max-w-xl">
                              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                                   ⌕
                              </span>

                              <input
                                   type="search"
                                   value={search}
                                   onChange={(event) => {
                                        setSearch(event.target.value);
                                        setOpenQuestion(null);
                                   }}
                                   placeholder="Search for an answer..."
                                   aria-label="Search frequently asked questions"
                                   className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-sm shadow-lg shadow-blue-900/5 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                              />
                         </div>
                    </div>
               </section>

               {/* FAQ Content */}
               <main className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
                    <div className="mb-7">
                         <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                              How can we help?
                         </h2>

                         <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                              Browse by topic or search for a specific question.
                         </p>
                    </div>

                    {/* Category Filters */}
                    <div className="mb-8 flex flex-wrap gap-2.5">
                         {categories.map((category) => {
                              const isActive = activeCategory === category.value;

                              return (
                                   <button
                                        key={category.value}
                                        type="button"
                                        onClick={() => {
                                             setActiveCategory(category.value);
                                             setOpenQuestion(null);
                                        }}
                                        className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${isActive
                                             ? "border-blue-600 bg-blue-600 text-white"
                                             : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                                             }`}
                                   >
                                        {category.label}
                                   </button>
                              );
                         })}
                    </div>

                    {/* Questions */}
                    <div className="space-y-3">
                         {filteredFAQs.map((faq, index) => {
                              const isOpen = openQuestion === faq?.question;
                              const Icon = SvgIcons[faq?.icon];

                              return (
                                   <div
                                        key={faq?.question}
                                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-200"
                                   >
                                        <div className="flex">
                                             <button
                                                  type="button"
                                                  aria-expanded={isOpen}
                                                  onClick={() =>
                                                       setOpenQuestion(
                                                            isOpen ? null : faq?.question
                                                       )
                                                  }
                                                  className="flex w-full cursor-pointer items-center justify-between gap-5 p-5 py-3 text-left font-bold text-slate-800 sm:p-6 sm:py-3"
                                             >
                                                  <div className="flex place-content-center  gap-3">
                                                       {Icon &&
                                                            <div className="bg-blue-600 p-2 rounded-full h-fit w-fit">
                                                                 <Icon size={20} h={20} w={20} sw={1.5} sc="white" />
                                                            </div>
                                                       }
                                                       <div className={`w-54 my-auto sm:w-fit ${!isOpen && 'truncate'} overflow-hidden`}>{faq?.question}</div>
                                                  </div>
                                                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-xl font-normal transition-transform ${isOpen ? "rotate-45" : ""}`}>
                                                       <SvgIcons.PlusSVG size={16} sc={'#0c97fb'} />
                                                  </span>
                                             </button>
                                        </div>

                                        {isOpen && (
                                             <div>
                                                  <div className="px-5 pb-6 -mt-3 text-sm leading-7 text-slate-600 sm:px-6">
                                                       {faq?.answer}
                                                       {faq?.link && (
                                                            <div className="mt-3">
                                                                 <Link
                                                                      to={faq?.link}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                                                                 >
                                                                      Learn more →
                                                                 </Link>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        )}
                                   </div>
                              );
                         })}
                    </div>

                    {/* No Results */}
                    {filteredFAQs.length === 0 && (
                         <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                              <div className="text-3xl">🔎</div>

                              <h3 className="mt-3 font-bold text-slate-800">
                                   No matching questions found
                              </h3>

                              <p className="mt-2 text-sm text-slate-500">
                                   Try a different search term or select another
                                   category.
                              </p>

                              <button
                                   type="button"
                                   onClick={() => {
                                        setSearch("");
                                        setActiveCategory("all");
                                        setOpenQuestion(null);
                                   }}
                                   className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                              >
                                   Clear filters
                              </button>
                         </div>
                    )}
               </main>

               <PingMeFooter />
          </div>
     );


};

export default PingMeFAQ;
