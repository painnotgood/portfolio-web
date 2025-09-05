import type { ReactNode } from "react";

type InfoProps = {
  icon: ReactNode;
};

export const Info = ({ icon }: InfoProps) => {
    return (
        <div className="flex flex-col w-12 aspect-square text-white h-full border-1 border-white flex justify-center items-center rounded-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
            <a href="#" className="text-red-500 h-full w-full">
                {icon}
            </a>
        </div>
    );
}