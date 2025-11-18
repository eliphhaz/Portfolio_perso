import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-white relative border-t border-gray-200 mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
