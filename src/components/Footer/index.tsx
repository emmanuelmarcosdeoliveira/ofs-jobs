import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="font-display flex flex-col items-center justify-between bg-black py-10 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          Logo
          <p className="max-w-md">
            O OFS-Vagas Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus, nemo.
          </p>
        </div>
        <div className="flex space-x-4">
          <Instagram
            size={24}
            className="cursor-pointer transition-colors hover:text-blue-400"
          />
          <Youtube
            size={24}
            className="cursor-pointer transition-colors hover:text-blue-400"
          />
          <Linkedin
            size={24}
            className="cursor-pointer transition-colors hover:text-blue-400"
          />
        </div>
      </div>
      <div className="container mt-6 h-0.5 bg-white/10"> </div>
    </footer>
  );
};

export default Footer;
