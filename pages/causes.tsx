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
        "Climate change is another significant factor contributing to food insecurity. Changing weather patterns, extreme weather events, and shifts in ecosystems can disrupt agricultural production, reduce crop yields, and impact food availability and accessibility.",
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
        "Natural disasters, such as hurricanes, floods, earthquakes, and droughts, can have severe impacts on food security. These disasters can destroy crops, infrastructure, and food storage facilities, leading to food shortages and loss of livelihoods.",
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

      <div className="relative isolate pt-20 md:pt-40 pb-40 md:pb-96 mb-14 lg:px-8 lg:pb-96">
        <div className="mx-auto max-w-2xl lg:text-center pb-12">
          <p className="mt-2 text-xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <Link href="/causes" className="text-white hover:text-gray-300">
              Learn
            </Link>
            {", "}
            <Link href="/impact" className="text-white hover:text-gray-300">
              Understand
            </Link>
            {", "}
            <Link href="/solutions" className="text-white hover:text-gray-300">
              Act
            </Link>
          </p>

          <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-300">
            Exploring the issue of food insecurity is crucial as it helps us
            understand why so many people face challenges in accessing enough
            healthy and nourishing food. By recognizing the underlying causes,
            such as poverty, unemployment, climate change, and limited
            resources, we can develop effective solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-around">
          {causes.map((cause, index) => (
            <div className="p-5 md:p-10 mb-8 md:mb-0" key={index}>
              <div className="max-w-screen-lg h-80 md:h-96 rounded-3xl shadow-lg hover:shadow-slate-500 ease-in-out duration-500">
                <div className="px-6 py-4">
                  <div className="font-bold text-lg md:text-xl mb-2">
                    {cause.title}
                  </div>
                  <p className="text-white text-sm md:text-base">
                    {cause.description}
                  </p>
                  <div className="mt-4">
                    {cause.links.map((link, index) => (
                      <a
                        key={index}
                        className="text-indigo-600 hover:text-indigo-500 text-sm md:text-base"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
