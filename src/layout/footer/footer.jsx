import { Instagram, Facebook, Twitter, Pin } from "lucide-react";
import logo from '../../assets/header/logo.svg'

export function Footer() {
  return (
    <footer className="w-full bg-white border-t ">
      <div className="container">
        <div className=" flex  gap-[50px] pt-[117px] pb-[102px]">
          <ul className="text-right flex flex-col gap-8 w-[285px]">
            <li className="text-hero-h text-[30px] font-bold">
              Contact Us
            </li>
            <li>
              <p className="font-bold text-[18px] text-hero-h">Email</p>
              <p className="font-normal text-[18px]">needhelp@Organia.com</p>
            </li>

            <li>
              <p className="font-bold text-[18px] text-hero-h">Phone</p>
              <p className="font-normal text-[18px]">666 888 888</p>
            </li>

            <li><p className="font-bold text-[18px] text-hero-h">Address</p>
              <p className="font-normal text-[18px]">88 road, borklyn street, USA</p></li>
          </ul>

          <div className="flex flex-col w-[650px] items-center text-center border-x-2 border-gray-300 px-[70px]">
            <div className="flex items-center gap-2 mb-2">
              <div />
              <img src={logo} alt="" />
            </div>
            <p className="text-[18px] font-normal mt-[23px] mb-[50px]">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing
            </p>

            <div className="flex gap-4">
              <div className="p-3 rounded-full bg-[#eff6f1] cursor-pointer"><Instagram size={20} /></div>
              <div className="p-3 rounded-full bg-[#eff6f1] cursor-pointer"><Facebook size={20} /></div>
              <div className="p-3 rounded-full bg-[#eff6f1] cursor-pointer"><Twitter size={20} /></div>
              <div className="p-3 rounded-full bg-[#eff6f1] cursor-pointer"><Pin size={20} /></div>
            </div>
          </div>

            <ul className="flex flex-col gap-8 w-[285px]">
              <li className="text-hero-h text-[30px] font-bold">Utility Pages</li>
              <li className="text-[18px] font-normal">Style Guide</li>
              <li className="text-[18px] font-normal">404 Not Found</li>
              <li className="text-[18px] font-normal">Password Protected</li>
              <li className="text-[18px] font-normal">Licences</li>
              <li className="text-[18px] font-normal">Changelog</li>
            </ul>
        </div>

      </div>
        <div className="text-center py-4 border-t-2 border-gray-300">
          Copyright © <span className="font-semibold">Organick</span> | Designed by VictorFlow Templates - Powered by Webflow
        </div>
    </footer>
  );
}