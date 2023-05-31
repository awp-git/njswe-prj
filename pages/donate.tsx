import Link from "next/link";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const donationOrganizations = [
  {
    name: "World Food Programme",
    description:
      "The World Food Programme is the leading humanitarian organization fighting hunger worldwide. They deliver food assistance in emergencies and work with communities to improve nutrition and build resilience.",
    url: "https://www.wfp.org/",
  },
  {
    name: "Feeding America",
    description:
      "Feeding America is a nationwide network of food banks that provides food and support to people facing hunger in the United States. They distribute meals to individuals, families, and children in need.",
    url: "https://www.feedingamerica.org/",
  },
  {
    name: "Action Against Hunger",
    description:
      "Action Against Hunger is a global humanitarian organization that takes decisive action against the causes and effects of hunger. They save the lives of malnourished children and provide communities with access to safe water and sustainable solutions to hunger.",
    url: "https://www.actionagainsthunger.org/",
  },
  {
    name: "Oxfam",
    description:
      "Oxfam is a global organization working to end the injustice of poverty. They tackle the root causes of hunger and inequality, supporting communities to build sustainable livelihoods and advocate for lasting change.",
    url: "https://www.oxfam.org/",
  },
  {
    name: "No Kid Hungry",
    description:
      "No Kid Hungry is a campaign working to end childhood hunger in the United States. They connect kids in need with nutritious food and teach families how to cook healthy, affordable meals.",
    url: "https://www.nokidhungry.org/",
  },
  {
    name: "The Hunger Project",
    description:
      "The Hunger Project is a global non-profit organization committed to ending world hunger. They empower communities to achieve sustainable progress in health, education, and self-reliance, enabling them to break the cycle of hunger and poverty.",
    url: "https://thp.org/",
  },
  {
    name: "ShareTheMeal",
    description:
      "ShareTheMeal is an app developed by the United Nations World Food Programme (WFP) that allows users to donate and support food assistance projects worldwide. Every donation goes directly to those in need.",
    url: "https://sharethemeal.org/",
  },
  {
    name: "Feeding Children Everywhere",
    description:
      "Feeding Children Everywhere is a non-profit organization dedicated to creating a hunger-free world. They provide nutritious meals to children and families in need through their meal packing events and community outreach programs.",
    url: "https://www.feedingchildreneverywhere.com/",
  },
  {
    name: "Bread for the World",
    description:
      "Bread for the World is a collective Christian voice urging policymakers to end hunger both in the United States and around the world. They advocate for policies that address the root causes of hunger and poverty.",
    url: "https://www.bread.org/",
  },
  {
    name: "The Global FoodBanking Network",
    description:
      "The Global FoodBanking Network is an international non-profit organization dedicated to supporting food banks in their mission to alleviate hunger, reduce food waste, and improve food security. They provide expertise and resources to food banks globally.",
    url: "https://www.foodbanking.org/",
  },
  {
    name: "Heifer International",
    description:
      "Heifer International is a global development organization working to end hunger and poverty while caring for the Earth. They empower communities by providing livestock, training, and support to help families build sustainable livelihoods.",
    url: "https://www.heifer.org/",
  },
  {
    name: "Meals on Wheels",
    description:
      "Meals on Wheels is a program that delivers nutritious meals to seniors in need, particularly those who are homebound or have limited mobility. They also provide social interaction and check-ins to combat social isolation.",
    url: "https://www.mealsonwheelsamerica.org/",
  },
  {
    name: "Rise Against Hunger",
    description:
      "Rise Against Hunger is an international hunger relief organization that provides food and aid to vulnerable communities around the world. They also engage volunteers in meal packaging events and advocacy efforts.",
    url: "https://www.riseagainsthunger.org/",
  },
  {
    name: "ActionAid",
    description:
      "ActionAid is a global organization working to end poverty and injustice. They address the root causes of poverty and hunger by empowering communities, advocating for policy changes, and supporting sustainable development.",
    url: "https://www.actionaid.org/",
  },
  {
    name: "Food for the Hungry",
    description:
      "Food for the Hungry is a Christian humanitarian organization dedicated to ending poverty and hunger. They work with communities to implement sustainable solutions, provide emergency relief, and promote holistic development.",
    url: "https://www.fh.org/",
  },

  {
    name: "CARE",
    description:
      "CARE is a leading humanitarian organization working to fight global poverty. They provide emergency relief and long-term solutions to address the underlying causes of poverty, including food insecurity.",
    url: "https://www.care.org/",
  },
  {
    name: "Food Forward",
    description:
      "Food Forward combats hunger and food waste by rescuing surplus produce and providing it to those in need. They collect fresh, local produce from various sources, including backyard fruit donors and farmer's markets, and distribute it to hunger relief agencies across Southern California.",
    url: "https://foodforward.org/",
  },
];

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-5 md:p-10 font-sans">
      <Navbar />

      <div className="pt-20 md:pt-40 pb-40 md:pb-96">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Donate</h1>
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
          </div>

          <p className="text-xl leading-7 text-gray-300 mb-8">
            Your contribution can make a difference in the fight against food
            insecurity. Consider supporting these organizations working to
            alleviate hunger and improve food access around the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationOrganizations.map((organization) => (
              <div
                key={organization.name}
                className="bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-4">{organization.name}</h2>
                <p className="text-gray-400 mb-6">{organization.description}</p>
                <a
                  href={organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sky-300 hover:text-sky-100"
                >
                  Donate now <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
