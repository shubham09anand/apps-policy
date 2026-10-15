import React from 'react'

function PolicySection({ id, title, children }) {
     return (
          <section id={id} className="scroll-mt-28 group relative">
               <div className="absolute -left-4 top-1.5 hidden h-6 w-1 rounded-full bg-blue-600 transition-all group-hover:block lg:block" />
               <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
               <div className="mt-4 space-y-4 leading-relaxed text-slate-600">{children}</div>
          </section>
     );
}

function InfoBlock({ title, children }) {
     return (
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-slate-50 hover:border-slate-200">
               <h3 className="font-medium text-slate-900 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    {title}
               </h3>
               <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
          </div>
     );
}

const PingMePolicyDetails = ({ sections, activeSection }) => {
     return (

          <>
               <aside className="hidden lg:block sticky top-8 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                         On this page
                    </p>
                    <nav className="space-y-1.5 text-sm" aria-label="Policy sections">
                         {sections.map((section) => {
                              const Icon = section.icon;
                              const isActive = activeSection === section.id;

                              return (
                                   <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive
                                             ? "bg-blue-50 font-medium text-blue-700"
                                             : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                             }`}
                                   >
                                        <Icon
                                             size={24}
                                             sw={1}
                                             sc={isActive ? "#1d4ed8" : "#64748b"}
                                        />
                                        <span>{section.label}</span>
                                   </a>
                              );
                         })}
                    </nav>
               </aside>
               <article className="min-w-0 space-y-12 rounded-3xl md:border border-slate-200/80 bg-white md:shadow-xl shadow-slate-200/50 sm:p-12">
                    <div className="flex gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-relaxed text-blue-950 backdrop-blur-sm">
                         <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs">
                              i
                         </div>
                         <div>
                              <strong className="font-semibold text-blue-900">Please read this policy carefully.</strong> It describes
                              the general data flows used by PingMe. Features you choose to use,
                              your device settings, and app permissions affect which information
                              is processed.
                         </div>
                    </div>

                    <div className="p-1">
                         <PolicySection id="purpose" title="⭐ Purpose">
                              <p>
                                   PingMe is developed as a personal learning project to explore
                                   messaging technology and mobile application development. The app
                                   is provided for educational purposes. This statement does not
                                   replace the privacy disclosures or responsibilities described
                                   in this policy.
                              </p>
                         </PolicySection>
                    </div>

                    <div className="p-1">
                         <PolicySection id="about" title="1. About this policy">
                              <p>
                                   PingMe is a messaging application that lets users communicate
                                   and share content. In this policy, “PingMe,” “we,” or “us”
                                   refers to the operator of the PingMe app. This policy applies to
                                   your use of the PingMe mobile app and related services.
                              </p>
                         </PolicySection>
                    </div>

                    <PolicySection id="information" title="2. Information we handle">
                         <div className="grid gap-4 sm:grid-cols-1">
                              <InfoBlock title="Account and profile information">
                                   Information you provide to register, sign in, or maintain your
                                   profile, such as your account identifier, profile details, and
                                   profile photo. Authentication information is processed to
                                   verify your account and keep your session working.
                              </InfoBlock>
                              <InfoBlock title="Messages and conversations">
                                   Messages and related conversation information you send or
                                   receive, such as message identifiers, delivery or read status,
                                   timestamps, and information needed to synchronize conversations
                                   between your device and our service. Messages are handled by our
                                   backend service and may also be stored locally so the app can
                                   display conversations and support offline use.
                              </InfoBlock>
                              <InfoBlock title="Media and files">
                                   If you send or receive photos, videos, audio, documents, or
                                   other files, PingMe processes the selected content and related
                                   metadata to upload, deliver, display, play, or download it.
                                   Media may be stored using Amazon Web Services (AWS) storage and
                                   may be downloaded to your device when you choose to view or save
                                   it.
                              </InfoBlock>
                              <InfoBlock title="Contacts">
                                   If you grant contact permission and use contact-related
                                   features, the app may access contact information on your device
                                   to help you identify or connect with people using PingMe. You
                                   can manage this permission in your device settings.
                              </InfoBlock>
                              <InfoBlock title="Location you choose to share">
                                   If you use a location-sharing feature, PingMe processes the
                                   location information you choose to share so it can be sent to
                                   the intended conversation recipient(s). Only share your
                                   location when you are comfortable doing so.
                              </InfoBlock>
                              <InfoBlock title="Device, app, and notification information">
                                   The app may process technical information needed to operate the
                                   service, such as app or device details, connectivity
                                   information, and a Firebase Cloud Messaging (FCM) registration
                                   token. The token helps route push notifications to your device.
                              </InfoBlock>
                              <InfoBlock title="Information stored on your device">
                                   PingMe uses local app storage, including SQLite and device-local
                                   key-value storage, for cached conversations, offline access,
                                   session state, and app preferences. Selected media or
                                   thumbnails may also be cached locally to improve the app
                                   experience.
                              </InfoBlock>
                         </div>
                    </PolicySection>

                    <PolicySection id="use" title="3. How we use information">
                         <p>We use information as needed to:</p>
                         <ul className="grid gap-2.5 sm:grid-cols-2 list-none pl-0">
                              {[
                                   "Create and manage accounts and authenticate users",
                                   "Send, receive, synchronize, and display messages",
                                   "Deliver media, documents, and other content you share",
                                   "Support offline access and local message history",
                                   "Send push notifications and keep the service functioning",
                                   "Protect the service, troubleshoot errors, and prevent abuse",
                                   "Respond to support requests and meet legal obligations"
                              ].map((item, idx) => (
                                   <li key={idx} className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/40 p-3 text-sm text-slate-600">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                                        <span>{item}</span>
                                   </li>
                              ))}
                         </ul>
                    </PolicySection>

                    <PolicySection id="sharing" title="4. When information is shared">
                         <p>We do not sell your personal information. Information may be shared or processed in these circumstances:</p>
                         <div className="space-y-3">
                              {[
                                   { title: "With recipients:", desc: "messages, profile details, and content you choose to send are made available to their intended recipients." },
                                   { title: "Service providers:", desc: "infrastructure providers help operate PingMe. These may include backend/database hosting, AWS for media storage and delivery, and Firebase Cloud Messaging for push notifications." },
                                   { title: "Legal and safety reasons:", desc: "information may be disclosed where required by law or reasonably necessary to protect users, the service, or others." },
                                   { title: "Business changes:", desc: "information may be transferred as part of a merger, acquisition, or transfer, subject to applicable law." }
                              ].map((share, i) => (
                                   <div key={i} className="rounded-xl border border-slate-100 bg-slate-50/40 p-4 text-sm">
                                        <strong className="font-semibold text-slate-900">{share.title}</strong>{" "}
                                        <span className="text-slate-600">{share.desc}</span>
                                   </div>
                              ))}
                         </div>
                         <p className="mt-4 text-sm italic text-slate-500">
                              We do not use message content for advertising. This policy does
                              not mean messages are end-to-end encrypted; do not assume
                              end-to-end encryption unless the app explicitly provides that
                              feature.
                         </p>
                    </PolicySection>

                    <PolicySection id="storage" title="5. Storage and security">
                         <p>
                              Conversation data is handled by our backend service and
                              database. Some information is also kept locally on your device
                              to support offline use. Media may be stored separately in AWS
                              storage. Depending on the infrastructure and service providers,
                              information may be processed in countries other than your own.
                         </p>
                         <p>
                              We use technical and organizational measures intended to
                              protect information. However, no method of electronic
                              transmission or storage is completely secure, and we cannot
                              guarantee absolute security. Please keep your device and
                              account credentials secure.
                         </p>
                    </PolicySection>

                    <PolicySection id="permissions" title="6. Permissions and your choices">
                         <p>
                              Depending on the features you use, PingMe may request
                              permissions such as contacts, photos and videos, files,
                              microphone, camera, notifications, or location. These
                              permissions enable the corresponding feature. You can review
                              or revoke permissions in your device settings, although some
                              features may no longer work as intended.
                         </p>
                         <p>
                              You choose what to send and to whom. Recipients may be able to
                              save, copy, forward, or capture content you share with them.
                         </p>
                    </PolicySection>

                    <PolicySection id="retention" title="7. Retention and deletion">
                         <p>
                              We retain information for as long as reasonably necessary to
                              provide PingMe, maintain account and conversation functionality,
                              resolve disputes, enforce our terms, and meet legal
                              requirements. Retention periods may vary by information type
                              and feature.
                         </p>
                         <p>
                              Local data may remain on your device until it is removed by the
                              app, you clear the app's storage, or you uninstall the app.
                              Uninstalling the app does not necessarily delete information
                              already stored on our servers or with service providers.
                         </p>
                         <p>
                              To ask about account or personal-data deletion, contact us
                              below and include enough information for us to locate your
                              account. We may need to verify your request. Some information
                              may be retained where required by law or for legitimate
                              security and operational reasons.
                         </p>
                    </PolicySection>

                    <PolicySection id="children" title="8. Children's privacy">
                         <p>
                              PingMe is not intended for children below the minimum age
                              required to use the service under applicable law. We do not
                              knowingly collect personal information from children in
                              violation of applicable requirements. If you believe a child
                              has provided personal information inappropriately, contact us
                              so we can review the request.
                         </p>
                    </PolicySection>

                    <PolicySection id="third-party" title="9. Third-party services">
                         <p>
                              PingMe relies on third-party infrastructure, including Firebase
                              Cloud Messaging and Amazon Web Services, to support
                              notifications, hosting, storage, or delivery. Their processing
                              of information may also be governed by their own privacy
                              policies and terms.
                         </p>
                    </PolicySection>

                    <PolicySection id="changes" title="10. Changes to this policy">
                         <p>
                              We may update this policy as PingMe changes or as legal
                              requirements evolve. When we do, we will update the effective
                              date on this page. Please review this page periodically.
                         </p>
                    </PolicySection>

                    <PolicySection id="contact" title="11. Contact us">
                         <p>
                              For privacy questions or requests concerning your information,
                              contact:
                         </p>
                         <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6">
                              <p className="font-semibold text-slate-900">PingMe Privacy</p>
                              <p className="mt-1">
                                   Email:{" "}
                                   <a
                                        className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-800"
                                        href="mailto:shubham09anand@gmail.com"
                                   >
                                        shubham09anand@gmail.com
                                   </a>
                              </p>
                              <p className="mt-3 text-xs leading-5 text-slate-500">
                                   Please do not include passwords or other sensitive
                                   authentication details in your email.
                              </p>
                         </div>
                    </PolicySection>

                    <div className="border-t border-slate-100 pt-8 text-xs leading-relaxed text-slate-400">
                         This page is the privacy policy for PingMe. Keep it publicly
                         accessible and update it whenever the app's data practices
                         change.
                    </div>
               </article>
          </>
     )
}

export default PingMePolicyDetails