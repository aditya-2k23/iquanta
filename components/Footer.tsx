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
  <div className="flex flex-col space-x-4">
    <h4 className="text-xl font-semibold">
      <a className="hover:text-blue-400" href={href}>
        {title}
      </a>
    </h4>
    <p className="text-sm text-gray-400">
      {date} - {category}
    </p>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t mt-10 border-black p-6">
      <div className="w-full">
        <div className="space-y-6 lg:flex lg:justify-between lg:gap-12 flex-shrink-0 lg:space-y-0">
          {/* About Us Section */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl uppercase font-semibold">About us</h3>
            <p className="font-serif">
              Get your questions answered about learning with iQuanta. Call: +91
              76830 43155
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/iquanta.in"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/iquanta.in/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCJcXnTkWeIrXavsa_DUzq5w"
                title="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Latest Articles */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold">Latest Articles</h3>
            <div className="space-y-4">
              <Article
                href="https://www.iquanta.in/blog/cat-99-96iler-iim-ahmedabad-convert-kislay/"
                title="CAT 99.96%iler, IIM Ahmedabad Convert Kislay Shares his Secret Strategy"
                date="November 14, 2024"
                category="CAT & Non-CAT"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta"
                date="November 14, 2024"
                category="CLAT Mini Mock"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta: 13th November 2024"
                date="November 14, 2024"
                category="CLAT Mini Mock"
              />
            </div>
          </div>

          {/* Most Popular Section */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold">Most Popular</h3>
            <div className="space-y-4">
              <Article
                href="https://www.iquanta.in/blog/cat-99-96iler-iim-ahmedabad-convert-kislay/"
                title="CAT 99.96%iler, IIM Ahmedabad Convert Kislay Shares his Secret Strategy"
                date="November 14, 2024"
                category="CAT & Non-CAT"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta"
                date="November 14, 2024"
                category="CLAT Mini Mock"
              />
              <Article
                href="https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024/"
                title="CLAT Mini Mock Series by iQuanta: 13th November 2024"
                date="November 14, 2024"
                category="CLAT Mini Mock"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3>Subscribe</h3>

            <div className="mt-4 flex flex-col">
              <input
                type="text"
                placeholder="Email address"
                className="w-full mb-2 p-1"
              />
              <button className="uppercase font-semibold text-sm w-full text-white py-2 px-5 bg-red-500">
                I want in {"->"}
              </button>
            </div>
            <label className="flex items-center space-x-2" htmlFor="check">
              <input
                type="checkbox"
                id="check"
                className="form-checkbox h-4 w-4 text-red-500"
              />
              <span className="text-sm">
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
