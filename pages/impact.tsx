import Link from "next/link";
import { useState } from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Impact() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const impactData = [
    {
      title: "Improved Nutrition",
      content:
        "Access to sufficient and nutritious food improves overall health and well-being, contributing to better physical and cognitive development. Adequate nutrition supports a strong immune system, reduces the risk of chronic diseases, and enhances cognitive functions such as learning and memory.",
      links: [
        {
          label: "World Health Organization",
          href: "https://www.who.int/nutrition/en/",
        },
        {
          label: "UNICEF - Nutrition",
          href: "https://www.unicef.org/nutrition",
        },
      ],
    },
    {
      title: "Healthier Communities",
      content:
        "Addressing food insecurity leads to healthier communities by reducing the risk of malnutrition-related diseases and improving the overall quality of life. When individuals and communities have access to nutritious food, they experience improved health outcomes, increased energy levels, and better overall well-being.",
      links: [
        {
          label: "CDC - Healthy Communities",
          href: "https://www.cdc.gov/features/healthycommunities/index.html",
        },
        {
          label: "WHO - Food Security",
          href: "https://www.who.int/publications/i/item/9789240010529",
        },
      ],
    },
    {
      title: "Education and Productivity",
      content:
        "Proper nutrition positively impacts educational outcomes and productivity, as individuals have the energy and focus to learn, work, and contribute to society. When children have access to nutritious meals, it improves their ability to concentrate in school, enhances cognitive development, and boosts academic performance. Similarly, adults who have access to healthy food are better able to focus on their work and contribute to the economy.",
      links: [
        {
          label: "UNESCO - Education for Sustainable Development",
          href: "https://en.unesco.org/themes/education-sustainable-development",
        },
        {
          label: "World Bank - Education",
          href: "https://www.worldbank.org/en/topic/education",
        },
      ],
    },
    {
      title: "Economic Development",
      content:
        "Food security plays a crucial role in economic development. When communities have access to nutritious food, it promotes economic growth and stability. Adequate nutrition helps individuals thrive, leading to increased productivity, reduced healthcare costs, and improved labor force participation. It also enables communities to invest in other areas of development, such as education and infrastructure.",
      links: [
        {
          label: "FAO - Food Security and Economic Development",
          href: "http://www.fao.org/economic/esa/",
        },
        {
          label: "World Economic Forum - Food Systems and Economic Growth",
          href: "https://www.weforum.org/agenda/2021/10/why-we-must-invest-more-in-the-farms-of-the-future-small-farmers-agriculture-food-systems-international-fund-for-agricultural-development-idris-elba/",
        },
      ],
    },
    {
      title: "Environmental Sustainability",
      content:
        "Promoting food security is closely linked to environmental sustainability. Sustainable agricultural practices, such as organic farming, agroforestry, and water conservation, contribute to preserving natural resources and reducing the negative environmental impact of food production. By adopting sustainable food systems, we can protect biodiversity, conserve soil and water resources, and mitigate climate change.",
      links: [
        {
          label: "UN Environment - Sustainable Food Systems",
          href: "https://www.unep.org/news-and-stories/story/rethinking-food-systems",
        },
        {
          label: "CGIAR - Sustainable Agriculture",
          href: "https://a4nh.cgiar.org/our-research/research-flagships/",
        },
      ],
    },
    {
      title: "Social Equality",
      content:
        "Addressing food insecurity is essential for achieving social equality. By ensuring that everyone has access to nutritious food, we can reduce disparities in health outcomes and create a more equitable society. Food security helps to alleviate poverty, reduce social inequalities, and promote social cohesion by providing equal opportunities for individuals and communities to thrive.",
      links: [
        {
          label: "UNDP - Sustainable Development Goals",
          href: "https://www.undp.org/sustainable-development-goals",
        },
        {
          label: "Oxfam - Food Inequality",
          href: "https://www.oxfam.org/en/what-we-do/issues/food-climate-and-natural-resources",
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
            <Link
              href="/solutions"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Solutions
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
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-300 hover:text-sky-100"
                        >
                          {link.label}
                        </a>
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
