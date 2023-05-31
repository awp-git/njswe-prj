import Link from "next/link";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Solutions() {
  const solutions = [
    {
      title: "Education and Awareness",
      content:
        "To address the problem, promoting food insecurity education and awareness is essential. We can encourage people and communities to take action by educating people on the causes and effects of food insecurity. Education-related initiatives, including workshops, educational programs, and engagement-boosting campaigns, are crucial in promoting comprehension and engagement.",
    },
    {
      title: "Empowering Local Food Systems",
      content:
        "We can lessen our reliance on long-distance food transportation and help local economies by assisting farm-to-table initiatives, boosting farmers' markets, and helping small farmers. By strengthening local food systems, communities become more resilient, have better access to wholesome food, and are less susceptible to global food supply chain interruptions.",
    },
    {
      title: "Policy and Advocacy",
      content:
        "Promoting policies that deal with the underlying causes of food insecurity is crucial. Policies can be changed to enhance sustainable agriculture, lessen poverty, increase access to wholesome food, and bolster social safety nets. In addition, participating in advocacy activities, such as reaching out to legislators and supporting groups fighting to improve food security, can result in significant change.",
    },
    {
      title: "Waste Reduction and Resource Efficiency",
      content:
        "One of the most critical aspects of addressing food insecurity is reducing food waste and improving resource efficiency. The massive worldwide food waste problem exacerbates food insecurity. Food security can be significantly aided by implementing more effective mechanisms for producing and distributing food, educating people about food waste, and supporting waste-reduction techniques like composting.",
    },
    {
      title: "Technological Innovation and Research",
      content:
        "Fighting food insecurity requires a strong partnership between technology and research. To meet the rising worldwide demand for food, innovations in agricultural technology can improve the sustainability and efficiency of the food production process. For example, research on crop genetics, soil health, and sustainable farming methods can all help boost food production and build environmental resilience.",
    },
    {
      title: "Climate Action",
      content:
        "Extreme weather can destroy crop output, making climate change a significant contributor to food insecurity. Food security depends on reducing climate change's effects, such as lowering greenhouse gas emissions and adopting sustainable farming methods. It can also lessen the severity of food insecurity to support projects that aim to alleviate the environmental effects of food production.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-5 md:p-10 font-sans">
      <Navbar />

      <div className="pt-20 md:pt-40 pb-40 md:pb-96 flex-grow">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Solutions</h1>

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
              href="/donate"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {solution.title}
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-300">
                  {solution.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Addressing Food Insecurity
            </h2>
            <p className="text-base text-gray-300 mb-4">
              Food insecurity is a significant challenge that affects
              individuals and families in our communities. You can make a
              difference by supporting charitable organizations combating food
              insecurity or participating in volunteer activities. Together, we
              can work towards ensuring that everyone has access to nutritious
              food and alleviate the burden of food insecurity.
            </p>
            <Link
              href="/donate"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
