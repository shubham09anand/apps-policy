import React, { useState } from "react";
import axios from "axios";
import PingMetoast from "./PingMetoast";
import PingMeHeader from './PingMeHeader'
import PingMeFooter from "./PingMeFooter";
import { SvgIcons } from '../../../utils/SvgIcons';

const initialData = {
     firstName: "",
     lastName: "",
     username: "",
     email: "",
     password: "",
     reason: "",
     confirm: false,
};

const PingMeRequestDeleteAccount = () => {
     const [toast, setToast] = useState(null);
     const [formData, setFormData] = useState(initialData);
     const [isLoading, setIsLoading] = useState(false);
     const [errors, setErrors] = useState({});

     const handleChange = (e) => {
          const { name, value, type, checked } = e.target;

          setFormData((prev) => ({
               ...prev,
               [name]: type === "checkbox" ? checked : value,
          }));

          setErrors((prev) => ({
               ...prev,
               [name]: "",
          }));
     };

     const validateForm = () => {
          const newErrors = {};

          if (!formData.firstName.trim()) {
               newErrors.firstName = "First name is required.";
          }

          if (!formData.lastName.trim()) {
               newErrors.lastName = "Last name is required.";
          }

          if (!formData.username.trim()) {
               newErrors.username = "Username is required.";
          } else if (/\s/.test(formData.username.trim())) {
               newErrors.username = "Username cannot contain spaces.";
          }

          const email = formData.email.trim();

          if (!email) {
               newErrors.email = "Email address is required.";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
               newErrors.email = "Please enter a valid email address.";
          }

          if (!formData.password) {
               newErrors.password = "Account password is required.";
          }

          if (!formData.confirm) {
               newErrors.confirm =
                    "Please confirm that you want to delete your account.";
          }

          setErrors(newErrors);

          if (Object.keys(newErrors).length > 0) {
               setToast({
                    message: "Please correct the errors before submitting.",
                    type: "error",
               });

               return false;
          }

          return true;
     };

     const handleSubmit = async (e) => {
          e?.preventDefault();

          if (isLoading || !validateForm()) {
               return;
          }

          setIsLoading(true);

          try {
               const response = await axios.post(
                    `http://localhost:5000/api/v1/account-activity/request-account-deletion`,
                    {
                         ...formData,
                         firstName: formData.firstName.trim(),
                         lastName: formData.lastName.trim(),
                         username: formData.username.trim(),
                         email: formData.email.trim(),
                         reason: formData.reason.trim(),
                    }
               );

               setFormData(initialData);
               setErrors({});

               setToast({
                    message:
                         response.data?.message ||
                         "Request submitted successfully!",
                    type: "success",
               });
          } catch (error) {
               setToast({
                    message:
                         error.response?.data?.message ||
                         "Something went wrong. Please try again.",
                    type: "error",
               });
          } finally {
               setIsLoading(false);
          }
     };

     const inputClass =
          "w-full rounded-[11px] border border-slate-300 bg-white px-3.5 py-[13px] text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

     const labelClass =
          "mb-2 block text-[13px] font-semibold text-slate-700";

     const errorClass = "mt-1.5 text-xs text-red-600";

     return (
          <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
               {toast && (
                    <PingMetoast
                         message={toast.message}
                         type={toast.type}
                         onClose={() => setToast(null)}
                    />
               )}

               {/* Header */}
               <PingMeHeader/>

               <main className="mx-auto w-[calc(100%-32px)] max-w-3xl py-11 max-[560px]:py-8">
                    {/* Hero */}
                    <section className="mb-[30px] text-center">
                         <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-50 text-red-600">
                              <SvgIcons.DeleteSvg size={32} sc="#e7000b" />
                         </div>

                         <p className="mt-[18px] text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">
                              Account &amp; data
                         </p>

                         <h1 className="mt-2 text-[clamp(28px,4vw,38px)] font-extrabold leading-[1.15] tracking-[-0.035em] text-slate-900">
                              Delete your PingMe account
                         </h1>

                         <p className="mx-auto mt-4 max-w-[590px] text-[12px] text-slate-500">
                              Submit a deletion request for your PingMe account.
                              We may contact you by email to verify your request
                              before processing it.
                         </p>
                    </section>

                    {/* Form */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[560px]:p-5">
                         <h2 className="text-lg font-bold text-slate-900">
                              Submit a deletion request
                         </h2>

                         <p className="mb-6 mt-2 text-sm leading-relaxed text-slate-500">
                              Enter the details associated with your PingMe account.
                         </p>

                         <form onSubmit={handleSubmit} noValidate>
                              {/* First Name & Last Name */}
                              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                   <div>
                                        <label htmlFor="firstName" className={labelClass}>
                                             First name
                                        </label>

                                        <input
                                             id="firstName"
                                             name="firstName"
                                             type="text"
                                             value={formData.firstName}
                                             onChange={handleChange}
                                             placeholder="First name"
                                             autoComplete="given-name"
                                             aria-invalid={!!errors.firstName}
                                             className={inputClass}
                                        />

                                        {errors.firstName && (
                                             <p className={errorClass}>
                                                  {errors.firstName}
                                             </p>
                                        )}
                                   </div>

                                   <div>
                                        <label htmlFor="lastName" className={labelClass}>
                                             Last name
                                        </label>

                                        <input
                                             id="lastName"
                                             name="lastName"
                                             type="text"
                                             value={formData.lastName}
                                             onChange={handleChange}
                                             placeholder="Last name"
                                             autoComplete="family-name"
                                             aria-invalid={!!errors.lastName}
                                             className={inputClass}
                                        />

                                        {errors.lastName && (
                                             <p className={errorClass}>
                                                  {errors.lastName}
                                             </p>
                                        )}
                                   </div>
                              </div>

                              {/* Username */}
                              <div className="mb-5">
                                   <label htmlFor="username" className={labelClass}>
                                        Username
                                   </label>

                                   <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Your PingMe username"
                                        autoComplete="username"
                                        aria-invalid={!!errors.username}
                                        className={inputClass}
                                   />

                                   {errors.username && (
                                        <p className={errorClass}>
                                             {errors.username}
                                        </p>
                                   )}
                              </div>

                              {/* Email */}
                              <div className="mb-5">
                                   <label htmlFor="email" className={labelClass}>
                                        Registered email address
                                   </label>

                                   <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        aria-invalid={!!errors.email}
                                        className={inputClass}
                                   />

                                   {errors.email && (
                                        <p className={errorClass}>
                                             {errors.email}
                                        </p>
                                   )}
                              </div>

                              {/* Password */}
                              <div className="mb-5">
                                   <label htmlFor="password" className={labelClass}>
                                        Account password
                                   </label>

                                   <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your account password"
                                        autoComplete="current-password"
                                        aria-invalid={!!errors.password}
                                        className={inputClass}
                                   />

                                   {errors.password && (
                                        <p className={errorClass}>
                                             {errors.password}
                                        </p>
                                   )}
                              </div>

                              {/* Reason */}
                              <div className="mb-5">
                                   <label htmlFor="reason" className={labelClass}>
                                        Reason for deletion{" "}
                                        <span className="font-normal text-slate-400">
                                             (optional)
                                        </span>
                                   </label>

                                   <textarea
                                        id="reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        placeholder="Share a reason if you'd like."
                                        rows={3}
                                        className={`${inputClass} min-h-[94px] resize-none`}
                                   />
                              </div>

                              {/* Confirmation */}
                              <div className="mb-5 mt-1">
                                   <div className="flex items-start gap-3 rounded-[11px] bg-slate-50 p-3.5">
                                        <input
                                             id="confirm"
                                             name="confirm"
                                             type="checkbox"
                                             checked={formData.confirm}
                                             onChange={handleChange}
                                             aria-invalid={!!errors.confirm}
                                             className="mt-1 size-4 shrink-0 accent-blue-600"
                                        />

                                        <label
                                             htmlFor="confirm"
                                             className="m-0 text-[14px] font-normal leading-[1.7] text-slate-500"
                                        >
                                             I confirm that I am requesting deletion of
                                             my PingMe account and associated data.
                                        </label>
                                   </div>

                                   {errors.confirm && (
                                        <p className={errorClass}>
                                             {errors.confirm}
                                        </p>
                                   )}
                              </div>

                              {/* Submit */}
                              <button
                                   type="submit"
                                   disabled={isLoading}
                                   className={`flex w-full items-center justify-center gap-2 rounded-[11px] bg-red-600 px-[18px] py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 ${isLoading
                                             ? "cursor-not-allowed animate-pulse opacity-50"
                                             : "cursor-pointer"
                                        }`}
                              >
                                   <SvgIcons.DeleteSvg size={20} sc="white" />

                                   {isLoading
                                        ? "Submitting request..."
                                        : "Request account deletion"}
                              </button>
                         </form>
                    </section>

                    {/* Data Information */}
                    <section className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-[22px] max-[560px]:p-[17px]">
                         <div className="min-w-0">
                              <h2 className="mt-0.5 text-base font-bold text-slate-900">
                                   What happens to your data?
                              </h2>

                              <p className="text-[13px] leading-[1.8] text-slate-500">
                                   After verifying your request, PingMe will process
                                   deletion of your account and eligible associated
                                   personal data. Some information may be retained
                                   when required by law or for legitimate security
                                   purposes.
                              </p>

                              <h3 className="mb-1 mt-[15px] text-[13px] font-semibold text-slate-700">
                                   Data that may be deleted
                              </h3>

                              <ul className="mt-1 list-disc pl-[18px] text-[13px] leading-[1.8] text-slate-500">
                                   <li>Account and profile information.</li>
                                   <li>Personal information associated with your account.</li>
                                   <li>Other associated data eligible for deletion.</li>
                              </ul>

                              <h3 className="mb-1 mt-[15px] text-[13px] font-semibold text-slate-700">
                                   Retention
                              </h3>

                              <p className="text-[13px] leading-[1.8] text-slate-500">
                                   Any retained data and the applicable retention
                                   period should be described in the PingMe Privacy
                                   Policy.
                              </p>
                         </div>
                    </section>
               </main>
               <PingMeFooter/>
          </div>
     );
};

export default PingMeRequestDeleteAccount;