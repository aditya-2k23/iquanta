// components/Footer.tsx
import React from "react";

const Article = ({
  href,
  title,
  date,
  category,
}: {
  href: string;
  title: string;
  date: string;
  category: string;
}) => (
  <div className="flex flex-col">
    <h4 className="text-xl mb-2 font-semibold leading-6">
      <a className="hover:text-blue-500" href={href}>
        {title}
      </a>
    </h4>
    <p className="text-xs font-semibold">
      <a className="mr-1 uppercase cursor-pointer hover:text-red-500 text-gray-800">
        {category}
      </a>{" "}
      <span className="text-gray-600">{date}</span>
    </p>
  </div>
);

const SocialLink = ({
  href,
  title,
  icon,
  color,
}: {
  href: string;
  title: string;
  icon: string;
  color: string;
}) => (
  <a
    href={href}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    className={`hover:text-${color} bg-red-500 text-center text-lg mt-4 px-[14px] transition-all py-[10px] hover:bg-[#f87171ad] hover:rounded-full text-white`}
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const Footer = () => {
  return (
    <footer className="border-t mt-10 border-black pt-10 pb-5 px-16">
      <div className="w-full">
        <div className="space-y-6 pb-2 lg:flex lg:justify-between lg:gap-12 flex-shrink-0 lg:space-y-1">
          {/* About Us Section */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl uppercase font-semibold">About us</h3>
            <p className="font-serif">
              Get your questions answered about learning with iQuanta. Call: +91
              76830 43155
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.facebook.com/iquanta.in/"
                title="Facebook"
                icon="facebook"
                color="blue-500"
              />
              <SocialLink
                href="https://www.instagram.com/iquanta/"
                title="Instagram"
                icon="instagram"
                color="pink-500"
              />
              <SocialLink
                href="https://www.youtube.com/c/iquanta"
                title="Youtube"
                icon="youtube"
                color="red-500"
              />
            </div>
          </div>

          {/* Latest Articles */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl uppercase font-semibold">
              Latest Articles
            </h3>
            <div className="space-y-4">
              <Article
                href="https://www.iquanta.in/blog/cat-99-96iler-iim-ahmedabad-convert-kislay/"
                title="CAT 99.96%iler, IIM Ahmedabad Convert Kislay Shares his Secret Strategy"
                date="November 14, 2024"
                category="CAT & Non-CAT"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta: 14th November 2024"
                date="November 14, 2024"
                category="CLAT Mini Mock Series"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta: 13th November 2024"
                date="November 14, 2024"
                category="CLAT Mini Mock Series"
              />
            </div>
          </div>

          {/* Most Popular Section */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl uppercase font-semibold">Most Popular</h3>
            <div className="space-y-4">
              <Article
                href="https://www.iquanta.in/blog/cat-99-96iler-iim-ahmedabad-convert-kislay/"
                title="CAT 99.96%iler, IIM Ahmedabad Convert Kislay Shares his Secret Strategy"
                date="November 14, 2024"
                category="CAT & Non-CAT"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta: 14th November 2024"
                date="November 14, 2024"
                category="CLAT Mini Mock Series"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta: 13th November 2024"
                date="November 14, 2024"
                category="CLAT Mini Mock Series"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="uppercase font-bold text-2xl">Subscribe</h3>

            <div className="mt-4 flex flex-col">
              <input
                type="text"
                placeholder="Email address"
                className="w-full mb-2 px-2 py-3 border border-black placeholder:font-serif placeholder:text-sm placeholder:text-black"
              />
              <button className="uppercase font-semibold w-full text-white py-3 bg-red-500 hover:bg-red-700">
                I want in {"->"}
              </button>
            </div>
            <label className="flex items-center space-x-2" htmlFor="check">
              <input
                type="checkbox"
                id="check"
                className="form-checkbox cursor-pointer h-3 w-3 text-red-500"
              />
              <span className="text-sm cursor-pointer font-serif">
                I&apos;ve read and accept the{" "}
                <a className="hover:underline text-red-500 hover:text-red-700">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="font-serif">
            © 2024 Indrajeet&apos;s Iquanta EDU Services Pvt Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
