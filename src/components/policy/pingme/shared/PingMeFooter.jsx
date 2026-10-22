import React from 'react'

const PingMeFooter = () => {
     return (
          <footer className="bg-white border border-black/30">
               <div className="mx-auto w-fit flex w-[calc(100%-32px)] max-w-[960px] items-center justify-between gap-3 py-[22px] text-[11px] text-slate-500 max-[560px]:flex-col">
                    © {new Date().getFullYear()} PingMe.
               </div>
          </footer>
     )
}

export default PingMeFooter
