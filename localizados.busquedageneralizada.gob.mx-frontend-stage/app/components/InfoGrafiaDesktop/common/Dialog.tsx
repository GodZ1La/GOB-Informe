import React from "react";
type DialogType = {
  id: string;
  children: React.ReactNode;
};
export default function Dialog({ id, children }: DialogType) {
  return (
    <dialog id={id} className="modal">
      <div className="absolute top-1/3 flex h-[350px] w-[711px] items-center justify-center rounded-lg bg-black">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="bg-[#FBFEF2]/70">close</button>
      </form>
    </dialog>
  );
}
