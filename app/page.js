"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Field, Label, Switch } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CheckIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  XMarkIcon,
  ChevronDownIcon,
  PresentationChartLineIcon,
  AdjustmentsVerticalIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/20/solid";

import logoSVG from "../public/logo.svg";
import iconSVG from "../public/icon.svg";
import screenshotImage from "../public/screenshot.png";
import studioImage from "../public/studio.jpg";
import Image from "next/image";

const navigation = [
  { name: "Who we are.", href: "#intro" },
  { name: "What we do.", href: "#work-with-us" },
//   { name: "Our work.", href: "/our-work" },
  { name: "Pricing tiers.", href: "#pricing-tiers" },
//   { name: "Blog.", href: "/blogs" },
//   { name: "Contact us.", href: "/contact-us" },
    { name: "Email us.", href: "mail:hello@wormstudio.co.uk" },
    { name: "Call us.", href: "tel:07593379619" },
];

const features = [
  {
    name: "Ecommerce Specialists.",
    description:
      "We transform online businesses with strategic design and technical expertise that drives measurable growth and exceptional customer experiences.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Custom Elements.",
    description:
      "We craft tailored Shopify section designs that seamlessly blend brand aesthetics with conversion-focused functionality, bringing your unique vision to life while maximizing sales potential.",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "Quality and Affordable Service.",
    description:
      "Our transparent and cost-effective approach eliminates hidden fees while delivering intuitive solutions that provide complete clarity on project scope, timeline, and ROI, ensuring you get exceptional ecommerce functionality without breaking your budget.",
    icon: CurrencyPoundIcon,
  },
];

const stats = [
  { name: "Office location", value: "England, UK 🇬🇧" },
  { name: "Unique pricing tiers", value: "3" },
  { name: "Official partner agency", value: "Shopify" },
  { name: "Transparent & honest", value: "Always" },
];

const tiers = [
  {
    name: "Signature",
    id: "tier-signature",
    href: "#",
    newWebsitePrice: "£4,500",
    priceMonthly: "£150",
    description:
      "Professional online ecommerce store for new and growing brands.",
    features: [
      "Brands looking to upgrade their current website or build a new online retail store.",
      "Shopify OS2.0",
      "Any premium Shopify template + 5 hours of customisation",
      "££",
      "Target: Local Markets",
      "8 hours dedicated SEO support (Technial SEO and Analysis)",
      "Unique keyword SEO optimised articles",
      "4 hours/month Technical support",
      "Project time: 4-5 weeks",
    ],
    featured: false,
  },
  {
    name: "Prestige",
    id: "tier-prestige",
    href: "#",
    newWebsitePrice: "£7,000",
    priceMonthly: "£300",
    description: "Brands looking to accelerate growth and drive online sales.",
    features: [
      "Luxury retailers with single or multiple stores looking to grow online.",
      "Shopify OS2.0",
      "Any premium Shopify template + 10 hours of customisation",
      "£££",
      "Target: National Markets",
      "12 hours/per month dedicated SEO support (Technial SEO and Analysis)",
      "Unique SEO keyword optimised articles",
      "6 hours/month Technical support",
      "Project time: 5-6 weeks",
    ],
    featured: true,
  },
  {
    name: "Elite",
    id: "tier-elite",
    href: "#",
    newWebsitePrice: "£12,000",
    priceMonthly: "£600",
    description:
      "Brands looking to disrupt the industry and bring high value turnover.",
    features: [
      "Luxury brands with multiple retail locations and prominent market position.",
      "Shopify OS2.0 & Shopify plus",
      "Any premium Shopify template + unlimitied pre-launch customisation",
      "££££",
      "Target: Global Markets",
      "18-20 hours/per month dedicated SEO support (Technial SEO and Analysis",
      "Unique SEO keyword optimised articles",
      "6 hours/month Technical support",
      "Project time: ~ 10 weeks"
    ],
    featured: false,
  },
];

const links = [
  { name: "Call us.", href: "tel:07593379619" },
  { name: "Email us.", href: "mail:hello@wormstudio.co.uk" },
  { name: "Contact us.", href: "/contact-us" },
];

const features2 = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

import Script from 'next/script'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      {/* Infobar header */}
      <div className="relative isolate items-center gap-x-6 overflow-hidden bg-fuchsia-200 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-gray-900">
            <strong className="font-semibold">WORM Studio</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            Official Shopify Partner Agency
          </p>
        </div>
      </div>

      {/* Navigation, header & hero */}
      <div className="bg-white">
        <header className="inset-x-0 z-50 border-b border-solid border-gray-200">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">WORM</span>
                <Image alt="" src={iconSVG} className="h-14 w-auto" />
              </a>
            </div>
            {navigation.length > 0 &&
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            }
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>

      {/* Intro */}
      <div id="intro" className="overflow-hidden bg-white py-10 pb-20 sm:pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 flex items-center">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-slate-500">
                    More than just an agency.
                  </h2>
                  <p className="mt-3 sm:mt-2 text-pretty md:text-4xl font-semibold tracking-tight text-gray-900 text-3xl">
                    At Worm we offer personalised Shopify website design, SEO
                    services and specialised ecommerce business solutions.
                  </p>
                  <p className="mt-6 sm:mt-8 text-lg/8 text-gray-600">
                    Based in the UK, our friendly team are always on hand to
                    help your business with all things digital. We are a
                    passionate and talented team, with a wide-range of skills to
                    help your business flourish within the digital landscape.
                  </p>
                  <dl className="mt-8 sm:mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 size-5 text-sky-400"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                alt=""
                src={screenshotImage}
                width={2432}
                height={1442}
                className="sm:mt-8 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>

      {/* Work with us section */}
      <div id="work-with-us" className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-32">
        <Image
          alt=""
          src={studioImage}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center filter:hue-rotate(270deg)"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white">
              Work with us
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
              At Worm, we know that you like to speak to real people who
              understand your business, as well as your business needs. We bring
              industry experience, and design services to help your company
              achieve it's goals.
            </p>
          </div>
          <div className="mx-auto mt-5 sm:mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 sm:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1 sm:text-center">
                  <dt className="text-base/7 text-white">{stat.name}</dt>
                  <dd className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="relative isolate bg-white px-6 py-16 sm:py-32 lg:px-8 max-w-7xl mx-auto">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div id="pricing-tiers" className="mx-auto max-w-7xl">
          <h2 className="text-base/7 font-semibold text-slate-500">Pricing</h2>
          <p className="mt-3 sm:mt-2 text-balance text-4xl md:text-7xl font-semibold tracking-tight">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 sm:mt-8 max-w-7xl text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="lg:mx-auto mt-10 sm:mt-16 grid grid-cols-1 gap-y-6 sm:mt-20 lg:gap-y-0 lg:max-w-7xl lg:grid-cols-3 lg:gap-x-4">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-sky-400 lg:shadow-2xl"
                  : "bg-white/60",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-3xl ring-1 ring-sky-400 rounded-3xl"
                  : "sm:rounded-3xl ring-1 ring-sky-400 lg:rounded-3xl",
                "rounded-3xl p-8  sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-fuchsia-200" : "text-sky-400",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-sky-400",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.newWebsitePrice}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-500",
                    "text-base"
                  )}
                >
                  {tierIdx === 2 ? '' : '(includes Tax)'}
                </span>
              </p>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-sky-400",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-500",
                    "text-base"
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-600",
                  "mt-4 md:mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-600",
                  "mt-6 md:mt-8 space-y-2 md:space-y-3 text-sm/6"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-white" : "text-sky-400",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-sky-400 border border-solid border-white text-white shadow-sm hover:bg-white hover:text-sky-400"
                    : "text-sky-400 ring-1 ring-inset ring-sky-400 hover:bg-sky-400 hover:text-white",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-8 lg:mt-10"
                )}
              >
                Get started today.
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Features section */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-slate-500">
              Deploy faster
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features2.map((feature2) => (
                <div key={feature2.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-sky-400">
                      <feature2.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature2.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature2.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div> */}

      {/*  Blog section */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              From the blog
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div> */}

      <footer className="bg-fuchsia-200 p-6">
        <p>Copyright Worm Studio 2025</p>
      </footer>
      
    </div>
  );
}
