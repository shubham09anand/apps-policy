import React from 'react'

const PingMeFooter = () => {
     return (
          <footer className="border-t border-slate-200 bg-white">
               <div className="mx-auto flex w-[calc(100%-32px)] max-w-[960px] items-center justify-between gap-3 py-[22px] text-[11px] text-slate-500 max-[560px]:flex-col">
                    © {new Date().getFullYear()} PingMe. All rights reserved.
               </div>
          </footer>
     )
}

export default PingMeFooter
