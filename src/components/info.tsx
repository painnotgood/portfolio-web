import type { ReactNode } from "react";

type InfoProps = {
  icon: ReactNode;
  link?: string;
};

export const Info = ({ icon, link }: InfoProps) => {
    return (
        <div className="flex flex-col w-12 aspect-square text-white h-full border-1 border-white flex justify-center items-center rounded-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
            <a target="_blank" href={link} className="text-red-500 h-full w-full">
                {icon}
            </a>
        </div>
    );
}