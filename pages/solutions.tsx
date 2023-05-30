import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Solutions() {
  const solutions = [
    {
      title: "Education and Awareness",
      content:
        "Promoting education and awareness about food insecurity is crucial in addressing the issue. By increasing knowledge about the causes and consequences of food insecurity, we can empower individuals and communities to take action. Educational programs, workshops, and awareness campaigns play a significant role in fostering understanding and encouraging engagement.",
    },
    {
      title: "Community Gardens",
      content:
        "Community gardens provide an opportunity for local communities to grow their own food. These gardens can be established in urban areas, schools, or vacant lots, allowing community members to cultivate fresh produce and improve food access. Community gardens not only contribute to food security but also promote community engagement, skill-building, and environmental sustainability.",
    },
    {
      title: "Policy and Advocacy",
      content:
        "Advocating for policies that address the root causes of food insecurity is essential. Policy changes can include measures to reduce poverty, improve access to nutritious food, support sustainable agriculture, and strengthen social safety nets. Engaging in advocacy efforts, such as contacting policymakers and supporting organizations working on food security, can drive meaningful change.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-5 md:p-10 font-sans">
      <Navbar />

      <div className="pt-20 md:pt-40 pb-40 md:pb-96">
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
            <Link
              href="/impact"
              passHref
              className="text-sky-300 hover:text-sky-100"
            >
              Impact
            </Link>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex-1 bg-gray-800 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-base text-gray-300">{solution.content}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Support Food Banks</h2>
              <p className="text-base text-gray-300 mb-4">
                Food banks play a vital role in providing food assistance to
                individuals and families facing food insecurity. You can make a
                difference by donating to your local food bank or participating
                in volunteer activities. Together, we can help ensure that
                everyone has access to nutritious food.
              </p>
              <Link
                href="/donate"
                passHref
                className="text-sky-300 hover:text-sky-100"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
