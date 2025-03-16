import { Moon, Brain, Clock, Heart } from "lucide-react";

export default function Landing() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
          Unlock the Secrets of Your Sleep
        </h1>
        <p className="text-lg text-gray-600 text-white mb-8 max-w-2xl mx-auto">
          Advanced AI-powered sleep tracking and analysis for optimal rest and wellness
        </p>
        <button className="px-6 py-3 text-lg font-semibold text-white bg-grey-600 rounded-lg hover:bg-violet-700 transition">
          Track My Sleep Now
        </button>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Moon}
            title="Sleep Tracking"
            description="Real-time monitoring of your sleep stages and patterns"
          />
          <FeatureCard
            icon={Brain}
            title="AI Analysis"
            description="Advanced insights into your sleep quality and habits"
          />
          <FeatureCard
            icon={Clock}
            title="Sleep Optimization"
            description="Personalized recommendations for better sleep"
          />
          <FeatureCard
            icon={Heart}
            title="Health Integration"
            description="Connect your sleep data with your overall health"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Sleep Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="SomniSense has revolutionized how I track and improve my sleep quality."
            author="Dr. Sarah Chen"
            role="Sleep Researcher"
          />
          <TestimonialCard
            quote="The most comprehensive sleep tracking platform I've ever used."
            author="Michael Brown"
            role="Health Coach"
          />
          <TestimonialCard
            quote="Finally, a sleep tracker that provides actionable insights."
            author="Emma Wilson"
            role="Wellness Expert"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <Icon className="h-12 w-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <p className="text-lg mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
