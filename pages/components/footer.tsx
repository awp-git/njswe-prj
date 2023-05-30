import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const email = "awpdevmain@gmail.com";
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (title: string) => {
    setActiveTab((prevTab) => (prevTab === title ? null : title));
  };
  const faqData = [
    {
      question: "What is food insecurity?",
      answer:
        "Food insecurity refers to the lack of access to sufficient, safe, and nutritious food.",
    },
    {
      question: "What are the root causes of food insecurity?",
      answer:
        "The root causes of food insecurity include poverty, conflict, climate change, and lack of access to education and resources.",
    },
    {
      question: "What are the effects of food insecurity?",
      answer:
        "The effects of food insecurity include malnutrition, stunted growth, poor health, and decreased productivity.",
    },
    {
      question: "What can we do about food insecurity?",
      answer:
        "We can combat food insecurity by supporting organizations that provide food assistance, advocating for policies that address the root causes of food insecurity, and reducing food waste.",
    },
    {
      question: "What organizations are working to combat food insecurity?",
      answer:
        "Organizations working to combat food insecurity include the World Food Programme, Feeding America, and Action Against Hunger.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-zinc-200 to-zinc-500 rounded-2xl shadow-3xl">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>

            <div>
              <dt className="mt-4 text-base leading-7 text-gray-600">
                We-project made by a computer science student at Herbert Hoover
                High school reachable @{" "}
                <a
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.874076508596!2d-118.23610008420297!3d34.163316780583206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5cc180b6a75%3A0x676c603e2b6a759e!2s651%20Glenwood%20Rd%2C%20Glendale%2C%20CA%2091202%2C%20United%20States!5e0!3m2!1sen!2suk!4v1622270436035!5m2!1sen!2suk"
                  width="100%"
                  height="100"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </dd>
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <dt
                    className="text-base font-semibold leading-7 text-gray-900 cursor-pointer"
                    onClick={() => handleTabClick(faq.question)}
                  >
                    {faq.question}
                    <span className="ml-2">
                      {activeTab === faq.question ? "-" : "+"}
                    </span>
                  </dt>
                  {activeTab === faq.question && (
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
