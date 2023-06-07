import Link from "next/link";
import { useState } from "react";
import * as React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Impact() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const impactData = [
    {
      title: "Malnutrition and Health Issues",
      content:
        "Food insecurity often leads to malnutrition, which can result in various health issues such as stunted growth, weakened immune system, and increased susceptibility to diseases. Lack of access to nutritious food can lead to deficiencies in essential vitamins and minerals, causing long-term health problems.",
      links: [
        {
          label: "World Health Organization",
          href: "https://www.who.int/nutrition/en/",
        },
        {
          label: "UNICEF - Malnutrition",
          href: "https://www.unicef.org/malnutrition",
        },
      ],
    },
    {
      title: "Increased Poverty and Inequality",
      content:
        "Food insecurity contributes to increased poverty and inequality within communities. People who lack access to sufficient and nutritious food often struggle to meet their basic needs and are more likely to experience financial hardship. This can further widen the wealth gap and hinder social mobility.",
      links: [
        {
          label: "World Bank - Poverty",
          href: "https://www.worldbank.org/en/topic/poverty",
        },
        {
          label: "Oxfam - Inequality",
          href: "https://www.oxfam.org/en/what-we-do/issues/inequality",
        },
      ],
    },
    {
      title: "Negative Impact on Education",
      content:
        "Food insecurity can have a significant impact on education, especially among children. Hunger and malnutrition can hinder cognitive development, impair concentration, and reduce overall academic performance. Lack of access to nutritious meals can also lead to higher school dropout rates.",
      links: [
        {
          label: "UNESCO - Education",
          href: "https://en.unesco.org/themes/education",
        },
        {
          label: "World Food Programme - School Feeding",
          href: "https://www.wfp.org/school-meals",
        },
      ],
    },
    {
      title: "Social Unrest and Conflict",
      content:
        "Food insecurity has the potential to create social unrest and contribute to conflicts. When people struggle to meet their basic food needs, it can lead to social tensions and unrest within communities. In some cases, food scarcity can be a contributing factor to civil unrest and conflict.",
      links: [
        {
          label: "Food and Agriculture Organization - Conflict",
          href: "http://www.fao.org/conflict/en/",
        },
        {
          label: "United Nations - Peace and Security",
          href: "https://www.un.org/en/sections/issues-depth/peace-and-security/index.html",
        },
      ],
    },
    {
      title: "Environmental Impact",
      content:
        "Food insecurity can have a negative environmental impact. When people are unable to access sufficient food, it can lead to unsustainable farming practices, deforestation, and overexploitation of natural resources. Additionally, food waste and inefficient food distribution contribute to environmental degradation.",
      links: [
        {
          label: "United Nations Environment Programme",
          href: "https://www.unep.org/",
        },
        {
          label: "World Wildlife Fund - Food Waste",
          href: "https://www.worldwildlife.org/threats/food-waste",
        },
      ],
    },
    {
      title: "Mental Health Issues",
      content:
        "Food insecurity can have detrimental effects on mental health. The stress and anxiety associated with not having enough food or being uncertain about future access to food can contribute to poor mental well-being. Individuals experiencing food insecurity are more prone to depression and other mental health disorders.",
      links: [
        {
          label: "World Health Organization - Mental Health",
          href: "https://www.who.int/mental_health/en/",
        },
        {
          label: "Mental Health America",
          href: "https://www.mhanational.org/",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-5 md:p-10 font-sans">
      <Navbar />

      <div className="pt-20 md:pt-40 pb-40 md:pb-96">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Impact</h1>
          <div className="flex space-x-4 mb-8">
            <Link
              href="/causes"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Causes
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/solutions"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Solutions
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/donate"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            {impactData.map((impact, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl shadow-lg p-6 ${
                  activeIndex === index ? "border border-sky-300" : ""
                }`}
              >
                <button
                  className="flex justify-between items-center w-full focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-2xl font-bold">{impact.title}</h2>
                  <span className="text-white text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <>
                    <p className="text-base text-gray-300 mt-4">
                      {impact.content}
                    </p>
                    <div className="mt-4 space-x-4">
                      {impact.links.map((link, linkIndex) => (
                        <React.Fragment key={linkIndex}>
                          {linkIndex > 0 && (
                            <span className="text-gray-300">•</span>
                          )}
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 hover:text-indigo-400"
                          >
                            {link.label}
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
