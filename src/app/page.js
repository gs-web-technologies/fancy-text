"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="banner-section py-24">
            <h1 className="banner-text text-black text-2xl md:text-4xl lg:text-6xl text-center mb-4 font-semibold">
              Smarter DNS & Network Tools
            </h1>
            <p className="text-gray-700 text-lg font-semibold text-center">
              Everything you need to analyze, monitor, and debug DNS records
              with precision and speed.
            </p>
          </div>
          <div className="popular-tools pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/text-generator" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Text Generator
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Generate high-quality fancy text.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/email-signature?type=1" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Email Signature
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Build professional email signatures for Gmail,
                          Outlook, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/email-signature?type=2" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Visiting Card
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Design beautiful visiting cards and download them in
                          high quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/email-signature?type=2" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Visiting Card
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Design beautiful visiting cards and download them in
                          high quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-24 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="heading-block text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-xl lg:text-4xl text-gray-900 font-bold mb-4">
              Popular Tools
            </h2>
            <p className="text-lg text-gray-700 font-medium mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
          <div className="popular-tools">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/text-generator" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Text Generator
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Generate high-quality fancy text.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/email-signature?type=1" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Email Signature
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Build professional email signatures for Gmail,
                          Outlook, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/email-signature?type=2" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          Visiting Card
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Design beautiful visiting cards and download them in
                          high quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="glass-card rounded-xl overflow-hidden relative">
                <Link href="/text-generator" className="p-4 block">
                  <div className="icon-box">
                    <div className="icon-dns">
                      <div className="w-14 h-14 bg-linear-to-r from-(--primary-1) to-(--secondary-1) rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-body">
                      <div className="icon-heading">
                        <h4 className="icon-heading text-lg mb-2 font-bold">
                          DNS Lookup
                        </h4>
                      </div>
                      <div className="icon-des">
                        <p className="icon-paragraph text-sm font-semibold mb-2 text-gray-700">
                          Check all DNS records instantly
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="lg:py-24 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-gray-900">21+</span>
              <h3 className="font-bold text-gray-800 mt-2">Website launched</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Helping brands elevate their online presence confidently.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-gray-900">2M+</span>
              <h3 className="font-bold text-gray-800 mt-2">Users engaged</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our designs connect and inspire millions worldwide.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-gray-900">99%</span>
              <h3 className="font-bold text-gray-800 mt-2">
                Client satisfaction rate
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We build relationships that thrive on trust and creativity.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold text-gray-900">12+</span>
              <h3 className="font-bold text-gray-800 mt-2">
                Years of experience
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Decades of crafting innovative solutions for leading brands.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-linear-to-r from-(--primary-1)/20 to-(--secondary-1)/20">
        <div className="max-w-7xl mx-auto lg:py-24 py-16 px-8">
          <div className="items-center lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:px-6">
            <div className="col-span-2 mb-8">
              <p className="text-lg font-medium text-(--primary-1)">
                Trusted Worldwide
              </p>
              <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                Trusted by over 600 million users and 10,000 teams
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Our rigorous security and compliance standards are at the heart
                of all we do. We work tirelessly to protect you and your
                customers.
              </p>
              <div className="pt-6 mt-6 space-y-4 border-t border-gray-300">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-(--primary-1)"
                  >
                    Explore Legality Guide
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-(--primary-1)"
                  >
                    Visit the Trust Center
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg
                  className="w-10 h-10 mb-2 md:w-12 md:h-12 text-(--primary-1)"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  99.99% uptime
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  For Landwind, with zero maintenance downtime
                </p>
              </div>
              <div>
                <svg
                  className="w-10 h-10 mb-2 md:w-12 md:h-12 text-(--primary-1)"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  600M+ Users
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Trusted by over 600 milion users around the world
                </p>
              </div>
              <div>
                <svg
                  className="w-10 h-10 mb-2 md:w-12 md:h-12 text-(--primary-1)"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  100+ countries
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Have used Landwind to create functional websites
                </p>
              </div>
              <div>
                <svg
                  className="w-10 h-10 mb-2 md:w-12 md:h-12 text-(--primary-1)"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  5+ Million
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Transactions per day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
