import Link from "next/link";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Causes() {
  const causes = [
    {
      title: "Poverty",
      description:
        "Poverty is a significant cause of food insecurity, as low-income individuals and families often struggle to afford nutritious food options and may rely on cheaper, processed, and low-nutrient foods. This perpetuates a cycle of inadequate nutrition and health issues.",
      links: [
        {
          label: "World Bank - Poverty Overview",
          url: "https://www.worldbank.org/en/topic/poverty/overview",
        },
        {
          label: "United Nations - Poverty",
          url: "https://unglobalcompact.org/what-is-gc/our-work/social/poverty",
        },
      ],
    },
    {
      title: "Unemployment",
      description:
        "Unemployment and underemployment can also lead to food insecurity when families have insufficient income to buy enough food, making it challenging to access an adequate and nutritious diet.",
      links: [
        {
          label: "International Labour Organization - Employment Promotion",
          url: "https://www.ilo.org/global/topics/employment-promotion/lang--en/index.htm",
        },
        {
          label: "U.S. Bureau of Labor Statistics",
          url: "https://www.bls.gov/",
        },
      ],
    },
    {
      title: "Climate Change",
      description:
        "Climate change is another significant factor contributing to food insecurity. Changing weather patterns, extreme weather events, and ecosystem shifts can disrupt agricultural production, reduce crop yields, and impact food availability and accessibility.",
      links: [
        {
          label: "United Nations Framework Convention on Climate Change",
          url: "https://www.un.org/en/climatechange/",
        },
        {
          label: "Intergovernmental Panel on Climate Change",
          url: "https://www.ipcc.ch/",
        },
      ],
    },
    {
      title: "Natural Disasters",
      description:
        "Natural disasters like hurricanes, floods, earthquakes, and droughts can severely impact food security. These disasters can destroy crops, infrastructure, and food storage facilities, leading to food shortages and loss of livelihoods.",
      links: [
        {
          label: "United Nations - Article on Natural Disasters",
          url: "https://www.un.org/en/chronicle/article/economic-recovery-after-natural-disasters",
        },
        {
          label:
            "International Federation of Red Cross and Red Crescent Societies - Types of Disasters",
          url: "https://www.ifrc.org/our-work/disasters-climate-and-crises/what-disaster",
        },
      ],
    },
    {
      title: "Limited Resources",
      description:
        "Limited resources, including land, water, and energy, can pose challenges to food production and distribution. Inefficient use of resources, unsustainable agricultural practices, and competition for resources can limit the availability of food and contribute to food insecurity.",
      links: [
        {
          label: "Food and Agriculture Organization of the United Nations",
          url: "https://www.fao.org/home/en/",
        },
        {
          label: "World Resources Institute - Food Security",
          url: "https://www.wri.org/our-work/topics/food",
        },
      ],
    },
    {
      title: "Conflict & Instability",
      description:
        "Conflict and political instability are significant drivers of food insecurity. In regions affected by conflict, access to food becomes challenging due to disrupted agricultural activities, limited market access, and displacement of populations.",
      links: [
        {
          label: "World Food Programme - Conflict and Hunger",
          url: "https://www.wfp.org/global-hunger-crisis",
        },
        {
          label: "UNICEF - Causes and Consequences of Conflict on Children",
          url: "https://data.unicef.org/resources/sofi-2022/",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-5 md:p-10 font-sans">
      <Navbar />

      <div className="pt-20 md:pt-40 pb-40 md:pb-96">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Causes</h1>

          <div className="flex space-x-4 mb-8">
            <Link
              href="/impact"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Impact
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {cause.title}
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-300">
                  {cause.description}
                </p>
                <div className="mt-4">
                  <ul className="list-disc pl-4 text-gray-500">
                    {cause.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-indigo-500 hover:text-indigo-400"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
