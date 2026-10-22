import React, { useState } from 'react';
import { SvgIcons } from '../../../utils/SvgIcons';
import Home from '../../../assets/pingme/Home.jpeg';
import Profile from '../../../assets/pingme/Profile.jpeg';
import BlockedContacts from '../../../assets/pingme/Blocked Contacts.jpeg';
import Downloads from '../../../assets/pingme/Downloads.jpeg';
import Font from '../../../assets/pingme/Font.jpeg';
import UpdateAddress from '../../../assets/pingme/Update Address.jpeg';
import UpdateContact from '../../../assets/pingme/Update Contact.jpeg';
import UpdateDetails from '../../../assets/pingme/Update Details.jpeg';
import AudioPLayer from '../../../assets/pingme/Audio PLayer.jpeg';
import SendAttachement from '../../../assets/pingme/Send Attachement.jpeg';
import UpdatePassword from '../../../assets/pingme/Update Password.jpeg';
import ConatactList from '../../../assets/pingme/Conatact List.jpeg';
import ChatList from '../../../assets/pingme/Chat List.jpeg';
import AttachmentOption from '../../../assets/pingme/Attachment Option.jpeg';

const screenshots = [
     { id: '1', title: 'Home', image: Home },
     { id: '2', title: 'Profile', image: Profile },
     { id: '10', title: 'Contact List', image: ConatactList },
     { id: '11', title: 'Chat List', image: ChatList },
     { id: '14', title: 'Send Files', image: SendAttachement },
     { id: '13', title: 'Music Player', image: AudioPLayer },
     { id: '12', title: 'Attachment Option', image: AttachmentOption },
     { id: '3', title: 'Blocked Contacts', image: BlockedContacts },
     { id: '4', title: 'Downloads', image: Downloads },
     { id: '5', title: 'Font', image: Font },
     { id: '6', title: 'Update Address', image: UpdateAddress },
     { id: '7', title: 'Update Contact', image: UpdateContact },
     { id: '8', title: 'Update Details', image: UpdateDetails },
     { id: '9', title: 'Update Password', image: UpdatePassword },
];


const Pingmescreenshot = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const currentScreenshot = screenshots[currentIndex];

     const handlePrevious = () => {
          setCurrentIndex((prevIndex) =>
               prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
          );
     };

     const handleNext = () => {
          setCurrentIndex((prevIndex) =>
               prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
          );
     };

     return (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-10 sm:px-8">
               <div className="mb-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                         PingMe Preview
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                         {currentScreenshot.title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                         {currentIndex + 1} of {screenshots.length}
                    </p>
               </div>

               {/* Phone and navigation */}
               <div className="flex items-center justify-center gap-3 sm:gap-8">

                    {/* Previous */}
                    <button
                         type="button"
                         onClick={handlePrevious}
                         aria-label="Previous screenshot"
                         className="flex h-10 w-10 shrink-0 cursor-pointer active:opacity-50 items-center justify-center rounded-full border border-slate-300 bg-white shadow-md transition hover:scale-105 hover:bg-slate-50 sm:h-12 sm:w-12"
                    >
                         <SvgIcons.ChevronLeft size={22} sc="black" />
                    </button>

                    {/* Mobile phone frame */}
                    <div className="relative w-[260px] shrink-0 rounded-[2.8rem] border-[7px] border-slate-900 bg-slate-900 p-[5px] shadow-2xl sm:w-[290px]">

                         {/* Side buttons */}
                         <div className="absolute -left-[10px] top-24 h-12 w-[3px] rounded-l-md bg-slate-700" />
                         <div className="absolute -left-[10px] top-40 h-8 w-[3px] rounded-l-md bg-slate-700" />
                         <div className="absolute -right-[10px] top-32 h-14 w-[3px] rounded-r-md bg-slate-700" />

                         {/* Phone screen */}
                         <div className="relative overflow-hidden rounded-[2.2rem] bg-white">

                              {/* Status bar */}
                              <div className="relative z-10 flex h-8 items-center justify-between bg-white px-5 text-[10px] font-semibold text-black">
                                   <span>9:41</span>

                                   {/* Dynamic island */}
                                   <div className="absolute left-1/2 top-1/2 h-[18px] w-[75px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

                                   <div className="flex items-center gap-1">
                                        <span>●</span>
                                        <span>WiFi</span>
                                        <span className="ml-1 inline-block h-2.5 w-4 rounded-sm border border-black p-[1px]">
                                             <span className="block h-full w-2/3 rounded-[1px] bg-black" />
                                        </span>
                                   </div>
                              </div>

                              {/* Screenshot */}
                              <img
                                   key={currentScreenshot.id}
                                   src={currentScreenshot.image}
                                   alt={`${currentScreenshot.title} screen in PingMe`}
                                   className="block aspect-[9/19] pb-5 select-none w-full bg-white object-cover object-top"
                              />

                              {/* Bottom navigation indicator */}
                              <div className="absolute bottom-0 left-0 right-0 flex h-5 items-center justify-center bg-black/5">
                                   <div className="h-1 w-24 rounded-full bg-black/80" />
                              </div>
                         </div>
                    </div>

                    {/* Next */}
                    <button
                         type="button"
                         onClick={handleNext}
                         aria-label="Next screenshot"
                         className="flex h-10 w-10 shrink-0 cursor-pointer active:opacity-50 items-center justify-center rounded-full border border-slate-300 bg-white shadow-md transition hover:scale-105 hover:bg-slate-50 sm:h-12 sm:w-12"
                    >
                         <SvgIcons.ChevronRight size={22} sc="black" />
                    </button>
               </div>

               {/* Screenshot indicators */}
               <div className="mt-8 flex justify-center gap-2">
                    {screenshots.map((screenshot, index) => (
                         <button
                              key={screenshot.id}
                              type="button"
                              aria-label={`Show ${screenshot.title} screenshot`}
                              onClick={() => setCurrentIndex(index)}
                              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-6 bg-blue-600'
                                        : 'w-2 bg-slate-400 hover:bg-slate-500'
                                   }`}
                         />
                    ))}
               </div>
          </div>
     );
};

export default Pingmescreenshot;

