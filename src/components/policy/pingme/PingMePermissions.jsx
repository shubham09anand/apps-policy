import React from 'react';
import { SvgIcons } from "../../../utils/SvgIcons";

function PermissionBlock({ title, icon: Icon, children }) {
     return (
          <div className="group mb-5 flex w-full break-inside-avoid flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-6">

               {/* Icon and title */}
               <div className="flex items-center gap-3">
                    {Icon && (
                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <Icon size={24} sw={1.7} sc="#2563eb" />
                         </div>
                    )}

                    <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                         {title}
                    </h3>
               </div>

               {/* Description */}
               <div className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {children}
               </div>
          </div>
     );
}

const Permissions = () => {
     return (
          <div className="w-full min-w-0">

               {/* Header */}
               <div className="mb-8 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-8">
                    <div className="flex items-start gap-4">
                         <div className="my-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 sm:h-14 sm:w-14">
                              <SvgIcons.Setting size={26} sw={1.7} sc="#ffffff" />
                         </div>

                         <div className="min-w-0">
                              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                   App permissions
                              </h2>
                         </div>
                    </div>
               </div>

               {/* Introduction */}
               <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                         What permissions does PingMe use?
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                         PingMe requests certain Android permissions to support
                         messaging, media sharing, notifications, and other app
                         features. Permissions are used when needed for the relevant
                         functionality. You can manage or revoke supported permissions
                         through your device settings.
                    </p>
               </div>

               {/* Permission cards */}
               <div className="columns-1 gap-5 sm:columns-2">

                    <PermissionBlock
                         title="Internet access"
                         icon={SvgIcons.Signal}
                    >
                         <p>
                              Allows PingMe to connect to its servers to send and
                              receive messages, synchronize conversations, and access
                              online features.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Network state"
                         icon={SvgIcons.Wifi}
                    >
                         <p>
                              Allows PingMe to check network connectivity so it can
                              determine whether an internet connection is available.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Microphone"
                         icon={SvgIcons.Mic}
                    >
                         <p>
                              Allows PingMe to record audio when you use voice messaging
                              or other audio-recording features. Audio is accessed for
                              these features rather than for continuous recording.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Camera"
                         icon={SvgIcons.Camera}
                    >
                         <p>
                              Allows PingMe to access your camera when you use features
                              that capture photos or videos. Camera access depends on
                              the relevant feature and your permission.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Storage and media access"
                         icon={SvgIcons.Folder}
                    >
                         <p>
                              These permissions support applicable file and media
                              features, such as selecting or sharing content. Android
                              handles access differently depending on the operating
                              system version.
                         </p>

                         <ul className="mt-4 space-y-3">
                              <li className="border-l-2 border-blue-200 pl-3">
                                   <strong className="block break-words text-xs font-semibold text-slate-800 sm:text-sm">
                                        READ_EXTERNAL_STORAGE
                                   </strong>
                                   <span className="mt-1 block">
                                        Allows access to eligible shared storage content
                                        on supported older Android versions.
                                   </span>
                              </li>

                              <li className="border-l-2 border-blue-200 pl-3">
                                   <strong className="block break-words text-xs font-semibold text-slate-800 sm:text-sm">
                                        WRITE_EXTERNAL_STORAGE
                                   </strong>
                                   <span className="mt-1 block">
                                        Declared for Android API 28 and below, allowing
                                        applicable older Android versions to write to
                                        shared external storage.
                                   </span>
                              </li>

                              <li className="border-l-2 border-blue-200 pl-3">
                                   <strong className="block break-words text-xs font-semibold text-slate-800 sm:text-sm">
                                        READ_MEDIA_IMAGES
                                   </strong>
                                   <span className="mt-1 block">
                                        Allows access to eligible images on Android
                                        versions that use this permission.
                                   </span>
                              </li>

                              <li className="border-l-2 border-blue-200 pl-3">
                                   <strong className="block break-words text-xs font-semibold text-slate-800 sm:text-sm">
                                        READ_MEDIA_VIDEO
                                   </strong>
                                   <span className="mt-1 block">
                                        Allows access to eligible videos on supported
                                        Android versions.
                                   </span>
                              </li>

                              <li className="border-l-2 border-blue-200 pl-3">
                                   <strong className="block break-words text-xs font-semibold text-slate-800 sm:text-sm">
                                        READ_MEDIA_AUDIO
                                   </strong>
                                   <span className="mt-1 block">
                                        Allows access to eligible audio files on
                                        supported Android versions.
                                   </span>
                              </li>
                         </ul>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Notifications"
                         icon={SvgIcons.Bell}
                    >
                         <p>
                              The POST_NOTIFICATIONS permission allows PingMe to request
                              permission to display notifications on Android versions
                              that require it. Notifications may be used to inform you
                              about incoming messages and other relevant app activity.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Vibration"
                         icon={SvgIcons.MusicalNotes}
                    >
                         <p>
                              Allows PingMe to use device vibration for supported
                              notification or interaction feedback.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Foreground services"
                         icon={SvgIcons.Clock}
                    >
                         <p>
                              Declares permission to run foreground services where
                              supported functionality requires them. Foreground
                              services can allow certain tasks to continue while the
                              app is not in the foreground.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Bluetooth"
                         icon={SvgIcons.ShareSvg}
                    >
                         <p>
                              The Bluetooth permissions declared by PingMe may allow
                              Bluetooth-related functionality where used. On supported
                              Android versions, BLUETOOTH_CONNECT is subject to Android's
                              permission controls. These declarations do not, by
                              themselves, mean PingMe collects Bluetooth data.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Location"
                         icon={SvgIcons.Location}
                    >
                         <p>
                              PingMe declares fine and coarse location permissions.
                              These can allow access to precise or approximate device
                              location, respectively, when the permissions are granted
                              and the app uses location-related functionality, such as
                              sharing your location in a conversation.
                         </p>

                         <p className="mt-3 rounded-lg bg-slate-50 p-3 text-xs leading-6 text-slate-600 sm:text-sm">
                              Location is not automatically shared with other users
                              merely because these permissions are declared. Sharing
                              should occur only through the relevant app functionality.
                         </p>
                    </PermissionBlock>

                    <PermissionBlock
                         title="Device sensors"
                         icon={SvgIcons.Setting}
                    >
                         <p>
                              PingMe declares the gyroscope and accelerometer as
                              optional hardware features. These declarations indicate
                              that the app can operate on devices without those sensors.
                              They do not themselves grant permission to access sensor
                              data.
                         </p>
                    </PermissionBlock>
               </div>

               {/* Manage permissions */}
               <div className="mt-8 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50/70 p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                              <SvgIcons.Info size={21} sw={1.7} sc="#1d4ed8" />
                         </div>

                         <div className="min-w-0">
                              <h3 className="font-semibold text-blue-950 sm:text-lg">
                                   Managing your permissions
                              </h3>

                              <p className="mt-2 text-sm leading-7 text-blue-900/80">
                                   You can review or change PingMe's permissions in
                                   your Android device settings. If you deny or revoke
                                   a permission, the corresponding feature may be
                                   unavailable or have limited functionality.
                              </p>

                              <div className="mt-4 flex items-start gap-2 rounded-xl border border-blue-100 bg-white/80 p-3">
                                   <span className="mt-0.5 shrink-0 text-blue-600">
                                        <SvgIcons.Lock size={17} sw={1.7} sc="#2563eb" />
                                   </span>

                                   <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                                        You remain in control of permissions that Android
                                        allows you to manage through device settings.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Permissions;

