import React, { useEffect } from "react";

const PingMetoast = ({ message, type = "success", onClose }) => {
     useEffect(() => {
          const timer = setTimeout(() => {
               onClose?.();
          }, 5000);

          return () => clearTimeout(timer);
     }, [onClose]);

     const isSuccess = type === "success";

     return (
          <div
               role="status"
               className={`fixed top-5 left-1/2 z-[9999] flex w-[95%] max-w-md -translate-x-1/2 items-center gap-3 overflow-hidden rounded-xl border border-white/20 px-4 py-3 text-white shadow-xl backdrop-blur-lg animate-in slide-in-from-top-3 ${
                    isSuccess
                         ? "bg-green-700/90"
                         : "bg-red-700/90"
               }`}
          >
               <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                         isSuccess ? "bg-green-500/30" : "bg-red-500/30"
                    }`}
               >
                    {isSuccess ? (
                         <svg
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                         >
                              <path
                                   d="m5 12 4 4L19 6"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              />
                         </svg>
                    ) : (
                         <svg
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                         >
                              <path
                                   d="M12 8v4m0 4h.01M10.3 3.86 1.82 18.5A2 2 0 0 0 3.55 21h16.9a2 2 0 0 0 1.73-2.5L13.7 3.86a2 2 0 0 0-3.4 0Z"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              />
                         </svg>
                    )}
               </div>

               <p className="flex-1 text-sm font-medium leading-5 tracking-wide">
                    {message}
               </p>

               <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close notification"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/15 hover:text-white"
               >
                    <svg
                         className="h-4 w-4"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                    >
                         <path
                              d="m18 6-12 12M6 6l12 12"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                         />
                    </svg>
               </button>
          </div>
     );
};

export default PingMetoast;

