import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PingMetoast from "./PingMetoast";
import { SvgIcons } from "../../../utils/SvgIcons";
import PingMeHeader from "./PingMeHeader";
import PingMeFooter from "./PingMeFooter";

const API_URL = "http://localhost:5000/api/v1/account-activity";

const PingMeProcessDeletion = () => {
     const [toast, setToast] = useState(null);
     const params = new URLSearchParams(window.location.search);

     const token = params.get("token");
     const request_id = params.get("request_id") || params.get("id");

     const [isLoading, setIsLoading] = useState(false);
     const [isFetching, setIsFetching] = useState(true);
     const [status, setStatus] = useState("pending");
     const [requestDetails, setRequestDetails] = useState(null);

     const fetchRequestDetails = useCallback(async () => {
          if (!token || !request_id) {
               setStatus("error");
               setRequestDetails(null);
               setToast({
                    message:
                         "This confirmation link is invalid. Please submit a new deletion request.",
                    type: "error",
               });
               setIsFetching(false);
               return false;
          }

          setIsFetching(true);

          try {
               const response = await axios.post(
                    `${API_URL}/get-deletion-request`,
                    {
                         token,
                         request_id,
                    }
               );

               const request = response.data?.data;

               if (!response.data?.success || !request) {
                    setRequestDetails(null);
                    setStatus("error");

                    setToast({
                         message:
                              response.data?.message ||
                              "We couldn't find your deletion request.",
                         type: "error",
                    });

                    return false;
               }

               setRequestDetails(request);

               // Always use the status returned by the backend.
               setStatus(
                    request.status?.toLowerCase() || "pending"
               );

               return true;
          } catch (error) {
               setRequestDetails(null);
               setStatus("error");

               setToast({
                    message:
                         error.response?.data?.message ||
                         "Unable to retrieve your deletion request. The link may have expired or become invalid.",
                    type: "error",
               });

               return false;
          } finally {
               setIsFetching(false);
          }
     }, [token, request_id]);

     useEffect(() => {
          fetchRequestDetails();
     }, [fetchRequestDetails]);

     const handleConfirmDeletion = async (isDelete) => {
          if (isLoading || isFetching || status !== "pending") {
               return;
          }

          if (!token || !request_id) {
               setStatus("error");

               setToast({
                    message:
                         "This confirmation link is invalid. Please submit a new deletion request.",
                    type: "error",
               });

               return;
          }

          setIsLoading(true);

          try {
               const response = await axios.post(
                    `${API_URL}/process-account-deletion`,
                    {
                         token,
                         request_id,
                         isDelete,
                    }
               );

               const result = response.data;

               if (!result?.success) {
                    setToast({
                         message:
                              result?.message ||
                              "We couldn't process your request.",
                         type: "error",
                    });

                    return;
               }

               // Update the UI using the processing API response.
               const returnedStatus =
                    result.data?.status?.toLowerCase();

               const nextStatus =
                    returnedStatus ||
                    (isDelete ? "confirmed" : "rejected");

               setStatus(nextStatus);

               setRequestDetails((previous) =>
                    previous
                         ? {
                              ...previous,
                              ...result.data,
                              status: nextStatus,
                         }
                         : previous
               );

               setToast({
                    message:
                         result.message ||
                         (isDelete
                              ? "Your deletion request has been confirmed."
                              : "Your deletion request has been cancelled."),
                    type: "success",
               });
          } catch (error) {
               setToast({
                    message:
                         error.response?.data?.message ||
                         "We couldn't process your request. The link may have expired or become invalid.",
                    type: "error",
               });
          } finally {
               setIsLoading(false);
          }
     };

     const formatDate = (date) => {
          if (!date) {
               return "Unavailable";
          }

          const parsedDate = new Date(date);

          if (Number.isNaN(parsedDate.getTime())) {
               return "Unavailable";
          }

          return parsedDate.toLocaleString();
     };

     const getStatusDetails = () => {
          switch (status) {
               case "confirmed":
                    return {
                         title: "Deletion scheduled",
                         label: "Confirmed",
                         message:
                              "Your deletion request has been confirmed. Your account and associated data are scheduled for deletion.",
                         color: "bg-amber-100 text-amber-700",
                    };

               case "completed":
                    return {
                         title: "Account deleted",
                         label: "Completed",
                         message:
                              "Your PingMe account deletion has been completed.",
                         color: "bg-green-100 text-green-700",
                    };

               case "rejected":
                    return {
                         title: "Request cancelled",
                         label: "Cancelled",
                         message:
                              "Your account deletion request has been cancelled. Your PingMe account remains active.",
                         color: "bg-slate-200 text-slate-700",
                    };

               case "pending":
                    return {
                         title: "Account deletion request",
                         label: "Pending",
                         message:
                              "Your deletion request has been submitted. Your account has not been deleted.",
                         color: "bg-amber-100 text-amber-700",
                    };

               default:
                    return {
                         title: "Unable to process request",
                         label: "Unavailable",
                         message:
                              "We couldn't determine the status of your deletion request.",
                         color: "bg-red-100 text-red-700",
                    };
          }
     };

     const isError = status === "error";
     const statusDetails = getStatusDetails();

     return (
          <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800">
               <PingMeHeader />
               {toast && (
                    <PingMetoast
                         message={toast.message}
                         type={toast.type}
                         onClose={() => setToast(null)}
                    />
               )}

               {/* Main */}
               <main className="flex flex-1 items-center justify-center px-4 py-12">
                    <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                         {/* Status Icon */}
                         <div
                              className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl ${status === "completed"
                                   ? "bg-green-50 text-green-600"
                                   : isError
                                        ? "bg-red-50 text-red-600"
                                        : "bg-blue-50 text-blue-600"
                                   }`}
                         >
                              {status === "completed" ? (
                                   <SvgIcons.CheckSvg size={32} sc="green" />
                              ) : status === "rejected" ? (
                                   <SvgIcons.CheckSvg size={32} sc="green" />
                              ) : (
                                   <SvgIcons.Clock size={32} sc="red" />
                              )}
                         </div>

                         {/* Heading */}
                         <div className="mt-6 text-center">
                              <p
                                   className={`text-xs font-bold uppercase tracking-[0.18em] ${status === "completed"
                                        ? "text-green-600"
                                        : isError
                                             ? "text-red-600"
                                             : "text-blue-600"
                                        }`}
                              >
                                   {isFetching
                                        ? "Loading request"
                                        : statusDetails.label}
                              </p>

                              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                   {isFetching
                                        ? "Retrieving your request..."
                                        : isError
                                             ? "Something went wrong"
                                             : statusDetails.title}
                              </h2>

                              {!isFetching && (
                                   <p className="mt-4 text-sm leading-6 text-slate-500">
                                        {isError
                                             ? "Please check your confirmation link or submit a new deletion request."
                                             : statusDetails.message}
                                   </p>
                              )}
                         </div>

                         {/* Loading */}
                         {isFetching && (
                              <div className="mt-7 flex items-center justify-center gap-3 rounded-xl bg-slate-50 py-6 text-sm text-slate-500">
                                   <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
                                   Loading your deletion request...
                              </div>
                         )}

                         {/* Request Details */}
                         {!isFetching &&
                              requestDetails &&
                              !isError && (
                                   <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="mb-5 flex items-center justify-between gap-3">
                                             <h3 className="text-sm font-bold text-slate-900">
                                                  Deletion request details
                                             </h3>

                                             <span
                                                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${statusDetails.color}`}
                                             >
                                                  {statusDetails.label}
                                             </span>
                                        </div>

                                        <div className="space-y-4">
                                             <div>
                                                  <p className="text-xs text-slate-500">
                                                       Full name
                                                  </p>
                                                  <p className="mt-1 text-sm font-semibold text-slate-800">
                                                       {requestDetails.firstName}{" "}
                                                       {requestDetails.lastName}
                                                  </p>
                                             </div>

                                             <div>
                                                  <p className="text-xs text-slate-500">
                                                       Username
                                                  </p>
                                                  <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                                                       @{requestDetails.username}
                                                  </p>
                                             </div>

                                             <div>
                                                  <p className="text-xs text-slate-500">
                                                       Registered email
                                                  </p>
                                                  <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                                                       {requestDetails.email}
                                                  </p>
                                             </div>

                                             {requestDetails.reason && (
                                                  <div>
                                                       <p className="text-xs text-slate-500">
                                                            Reason for deletion
                                                       </p>
                                                       <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
                                                            {requestDetails.reason}
                                                       </p>
                                                  </div>
                                             )}

                                             {(requestDetails.requestAt ||
                                                  requestDetails.createdAt) && (
                                                       <div>
                                                            <p className="text-xs text-slate-500">
                                                                 Request submitted
                                                            </p>
                                                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                                                 {formatDate(
                                                                      requestDetails.requestAt ||
                                                                      requestDetails.createdAt
                                                                 )}
                                                            </p>
                                                       </div>
                                                  )}

                                             {requestDetails.completedAt && (
                                                  <div>
                                                       <p className="text-xs text-slate-500">
                                                            Completed at
                                                       </p>
                                                       <p className="mt-1 text-sm font-semibold text-slate-800">
                                                            {formatDate(
                                                                 requestDetails.completedAt
                                                            )}
                                                       </p>
                                                  </div>
                                             )}

                                             {requestDetails.scheduledDeletionAt && (
                                                  <div>
                                                       <p className="text-xs text-slate-500">
                                                            Scheduled deletion
                                                       </p>
                                                       <p className="mt-1 text-sm font-semibold text-slate-800">
                                                            {formatDate(
                                                                 requestDetails.scheduledDeletionAt
                                                            )}
                                                       </p>
                                                  </div>
                                             )}
                                        </div>
                                   </div>
                              )}

                         {/* Pending Status Message */}
                         {!isFetching &&
                              status === "pending" &&
                              requestDetails && (
                                   <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">
                                        <p className="text-xs leading-5 text-amber-800">
                                             Your request is pending. You can
                                             confirm deletion or cancel the
                                             request using the options below.
                                        </p>
                                   </div>
                              )}

                         {/* Action Buttons: Only for pending requests */}
                         {!isFetching &&
                              status === "pending" &&
                              requestDetails && (
                                   <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                        <button
                                             type="button"
                                             onClick={() =>
                                                  handleConfirmDeletion(true)
                                             }
                                             disabled={isLoading}
                                             className="flex-1 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                             {isLoading
                                                  ? "Processing..."
                                                  : "Confirm Deletion"}
                                        </button>

                                        <button
                                             type="button"
                                             onClick={() =>
                                                  handleConfirmDeletion(false)
                                             }
                                             disabled={isLoading}
                                             className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                             Cancel Request
                                        </button>
                                   </div>
                              )}
                    </section>
               </main>
               <PingMeFooter/>
          </div>
     );
};

export default PingMeProcessDeletion;