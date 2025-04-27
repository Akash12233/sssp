// import { Moon, Brain, Clock, Heart } from "lucide-react";

// export default function Landing() {
//   return (
//     <div className="max-w-7xl mx-auto">
//       {/* Hero Section */}
//       <section className="py-20 text-center">
//         <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
//           Unlock the Secrets of Your Sleep
//         </h1>
//         <p className="text-lg text-gray-600 text-white mb-8 max-w-2xl mx-auto">
//           Advanced AI-powered sleep tracking and analysis for optimal rest and wellness
//         </p>
//         <button className="px-6 py-3 text-lg font-semibold text-white bg-grey-600 rounded-lg hover:bg-violet-700 transition">
//           Track My Sleep Now
//         </button>
//       </section>

//       {/* Features */}
//       <section className="py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <FeatureCard
//             icon={Moon}
//             title="Sleep Tracking"
//             description="Real-time monitoring of your sleep stages and patterns"
//           />
//           <FeatureCard
//             icon={Brain}
//             title="AI Analysis"
//             description="Advanced insights into your sleep quality and habits"
//           />
//           <FeatureCard
//             icon={Clock}
//             title="Sleep Optimization"
//             description="Personalized recommendations for better sleep"
//           />
//           <FeatureCard
//             icon={Heart}
//             title="Health Integration"
//             description="Connect your sleep data with your overall health"
//           />
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Trusted by Sleep Experts
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <TestimonialCard
//             quote="SomniSense has revolutionized how I track and improve my sleep quality."
//             author="Dr. Sarah Chen"
//             role="Sleep Researcher"
//           />
//           <TestimonialCard
//             quote="The most comprehensive sleep tracking platform I've ever used."
//             author="Michael Brown"
//             role="Health Coach"
//           />
//           <TestimonialCard
//             quote="Finally, a sleep tracker that provides actionable insights."
//             author="Emma Wilson"
//             role="Wellness Expert"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// function FeatureCard({ icon: Icon, title, description }) {
//   return (
//     <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
//       <Icon className="h-12 w-12 text-blue-500 mb-4" />
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// function TestimonialCard({ quote, author, role }) {
//   return (
//     <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
//       <p className="text-lg mb-4">{quote}</p>
//       <div>
//         <p className="font-semibold">{author}</p>
//         <p className="text-sm text-gray-600">{role}</p>
//       </div>
//     </div>
//   );
// }


// ************************************************************

import { Moon, Brain, Clock, Heart } from "lucide-react";

export default function Landing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 text-center">
        <div className="relative overflow-hidden rounded-xl md:rounded-3xl bg-gradient-to-br from-slate-800  px-4 sm:px-8 py-12 md:py-16 shadow-2xl">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Unlock the Secrets of Your Sleep
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
            Advanced AI-powered sleep tracking and analysis for optimal rest and wellness
          </p>
          <button className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-indigo-500 rounded-lg md:rounded-xl hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30" onClick={() => window.location.href = '/realtime'}>
            Track My Sleep Now
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FeatureCard
            icon={Moon}
            title="Sleep Tracking"
            description="Real-time monitoring of your sleep stages and patterns"
            color="indigo"
          />
          <FeatureCard
            icon={Brain}
            title="AI Analysis"
            description="Advanced insights into your sleep quality and habits"
            color="cyan"
          />
          <FeatureCard
            icon={Clock}
            title="Sleep Optimization"
            description="Personalized recommendations for better sleep"
            color="purple"
          />
          <FeatureCard
            icon={Heart}
            title="Health Integration"
            description="Connect your sleep data with your overall health"
            color="pink"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-300">
          Trusted by Sleep Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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

function FeatureCard({ icon: Icon, title, description, color }) {
  const colors = {
    indigo: 'from-indigo-500 to-indigo-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-slate-800 p-4 sm:p-6 transition-all hover:transform hover:-translate-y-2 shadow-lg sm:shadow-xl">
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors[color]} opacity-20 blur`}></div>
      <div className="relative z-10">
        <div className={`mb-4 sm:mb-6 inline-flex rounded-lg md:rounded-xl bg-gradient-to-br ${colors[color]} p-2 sm:p-3`}>
          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-200">{title}</h3>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-slate-800 p-6 sm:p-8 shadow-lg sm:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10"></div>
      <div className="relative z-10">
        <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6 italic">"{quote}"</p>
        <div className="border-t border-slate-700 pt-3 sm:pt-4">
          <p className="font-semibold text-slate-200 text-sm sm:text-base">{author}</p>
          <p className="text-xs sm:text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}