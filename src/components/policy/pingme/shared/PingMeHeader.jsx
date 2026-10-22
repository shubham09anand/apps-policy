import React from 'react'
import pingMe from '../../../../assets/pingme.png';

const PingMeHeader = () => {
     return (
          <header className="border-b border-slate-200 bg-white">
               <div className="mx-auto w-[calc(100%-32px)] max-w-[960px]">
                    <div className="flex items-center gap-2 py-0">
                         <img
                              src={pingMe}
                              alt="PingMe Logo"
                              className="h-16 w-16 object-contain p-1"
                         />

                         <div>
                              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                   Ping<span className="text-blue-600">Me</span>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default PingMeHeader
