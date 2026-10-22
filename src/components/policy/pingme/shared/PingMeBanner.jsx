import React from 'react'
import pingMe from '../../../../assets/pingme.png'

const PingMeBanner = ({
     appName,
     title,
     description,
     effectiveDate,
     logo = pingMe,
     homeUrl,
}) => {
     const name = (appName || '').trim()

     return (
          <header className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800/80">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />

               <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

               <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
                    <a
                         href={homeUrl}
                         aria-label={`${name} home`}
                         className="group inline-flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-4 focus:ring-offset-slate-950"
                    >
                         <div className="relative flex size-20 md:size-24 items-center justify-center">
                              {/* Moving glow behind the logo */}
                              <div className="absolute inset-[-8px] animate-[spin_5s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,#60a5fa_140deg,transparent_200deg,transparent_360deg)] opacity-70 blur-xl" />

                              {/* Pulsing outer glow */}
                              <div className="absolute inset-0 animate-pulse rounded-2xl bg-blue-500/30 blur-lg" />

                              {/* Logo container */}
                              <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-blue-500/20 transition-transform duration-200 group-hover:scale-105">
                                   <img
                                        src={logo}
                                        alt={`${name} Logo`}
                                        className="h-full w-full object-contain p-1"
                                   />
                              </div>
                         </div>

                         <span className="text-5xl font-bold tracking-tight text-white md:text-8xl">
                              {name}
                         </span>
                    </a>

                    <div className="mt-12 max-w-3xl">
                         <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                              {title}
                         </h1>

                         <p className="mt-6 text-lg leading-relaxed text-slate-300">
                              {description}
                         </p>

                         {effectiveDate && (
                              <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                                   <span className="inline-block h-1 w-1 rounded-full bg-slate-500" />
                                   <span>Effective date: {effectiveDate}</span>
                              </div>
                         )}
                    </div>
               </div>
          </header>
     )
}

export default PingMeBanner

