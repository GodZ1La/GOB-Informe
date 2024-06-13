import { cn } from '@/app/utils/utils';
import { ClassValue } from 'clsx';
import React from 'react';
type DialogType = {
  id: string;
  className: ClassValue;
  children: React.ReactNode;
};
export default function Dialog({ id, children, className }: DialogType) {
  return (
    <dialog id={id} className="modal">
      <div className={cn(className)}>
        <div className="modal-action m-0 cursor-pointer">
          <svg
            onClick={() =>
              (document.getElementById(id) as HTMLDialogElement).close()
            }
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M11.3312 21.4688L9.58124 19.7188L14.0812 15.2188L9.58124 10.75L11.3312 9L15.8312 13.5L20.3 9L22.05 10.75L17.55 15.2188L22.05 19.7188L20.3 21.4688L15.8312 16.9688L11.3312 21.4688Z"
              fill="#434843"
            />
          </svg>
        </div>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="bg-[#FBFEF2]/70">close</button>
      </form>
    </dialog>
  );
}
