'use client'

import {
  Sparkles,
  Rocket,
  BookOpenText,
  ShieldCheck,
} from 'lucide-react'

const perks = [
  {
    title: 'AI-Curated Picks',
    description: 'Let our AI recommend books tailored to your taste. The more you read, the smarter it gets.',
    icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'HyperFast Delivery',
    description: 'Our logistic network slaps — same-day delivery in major cities, next-day everywhere else.',
    icon: <Rocket className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Senior Verified Reads',
    description: 'Books vetted by our in-house senior readers and industry experts, so you only get the real gems.',
    icon: <BookOpenText className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Secure & Smart Checkout',
    description: 'End-to-end encryption + seamless UX = safe, fast, and frustration-free purchases.',
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-4 font-serif tracking-tight">
          Why Bookium is Built Different
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          This ain’t your average book store. We blend human curation with AI magic to give you a next-gen reading experience.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="mb-4">{perk.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{perk.title}</h3>
              <p className="text-gray-600 text-sm">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
