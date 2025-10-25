import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Trophy, TrendingUp, Users, BookOpen, Zap, Target, CheckCircle, Brain, Hammer, GraduationCap, Briefcase } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Code2,
      title: 'Coding Practice',
      description: 'Master data structures and algorithms with curated problems from NeetCode 150',
      gradient: 'from-emerald-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Aptitude Training',
      description: 'Sharpen your logical reasoning, quantitative ability, and verbal skills',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'CS Fundamentals',
      description: 'Build strong foundations in OS, DBMS, Networks, OOP, and more',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Hammer,
      title: 'Project Tutorials',
      description: 'Gain hands-on experience by building real-world projects from scratch',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Visualize your learning journey with detailed analytics and progress tracking',
      gradient: 'from-rose-500 to-red-500',
    },
    {
      icon: Target,
      title: 'Interview Prep',
      description: 'Comprehensive preparation for technical and HR interviews at top companies',
      gradient: 'from-teal-500 to-green-500',
    },
  ];

  const stats = [
    { label: 'Coding Problems', value: '150+', icon: Code2 },
    { label: 'Aptitude Questions', value: '500+', icon: Brain },
    { label: 'Project Tutorials', value: '50+', icon: Hammer },
    { label: 'Success Stories', value: '1000+', icon: Trophy },
  ];

  const learningPaths = [
    {
      title: 'Fresh Graduates',
      icon: GraduationCap,
      description: 'Perfect for recent graduates starting their tech career journey',
      features: ['Basic to Advanced Coding', 'Aptitude Fundamentals', 'Resume Building', 'Interview Skills'],
      color: 'emerald',
    },
    {
      title: 'Career Shifters',
      icon: Briefcase,
      description: 'Designed for professionals transitioning into the IT industry',
      features: ['Industry Essentials', 'Quick CS Fundamentals', 'Portfolio Projects', 'Job Search Strategy'],
      color: 'blue',
    },
  ];

  const topics = [
    { category: 'Coding', items: ['Arrays & Hashing', 'Two Pointers', 'Trees', 'Dynamic Programming', 'Graphs', 'System Design'] },
    { category: 'Aptitude', items: ['Logical Reasoning', 'Quantitative Ability', 'Verbal Reasoning', 'Data Interpretation', 'Puzzles', 'Mental Math'] },
    { category: 'CS Fundamentals', items: ['Operating Systems', 'DBMS', 'Computer Networks', 'OOP', 'Software Engineering', 'System Design'] },
    { category: 'Projects', items: ['Web Development', 'Mobile Apps', 'Backend APIs', 'DevOps', 'Machine Learning', 'Full Stack'] },
  ];

  return (
    <div className="min-h-screen bg-normalbg dark:bg-darkbg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 dark:from-emerald-500/5 dark:to-cyan-500/5" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Launch Your Tech Career
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary dark:text-light">
              From Graduate to{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Tech Professional
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Your all-in-one platform for coding, aptitude, CS fundamentals, and hands-on projects. 
              Perfect for freshers and career shifters breaking into IT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/practice"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/roadmap"
                className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-primary dark:text-light rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-500 hover:scale-105 transition-all duration-300"
              >
                View Roadmap
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-emerald-500 mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-primary dark:text-light mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-light mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tailored learning experiences for different career stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex p-4 rounded-xl bg-${path.color}-500/10 dark:bg-${path.color}-500/20 mb-6`}>
                  <path.icon className={`w-8 h-8 text-${path.color}-500`} />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-light mb-3">
                  {path.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {path.description}
                </p>
                <ul className="space-y-3">
                  {path.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-light mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive platform covering all aspects of your tech career preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-light mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-light mb-4">
              What You'll Master
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage across all essential domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-primary dark:text-light mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  {topic.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {topic.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-cyan-500">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of freshers and career shifters who are successfully breaking into the IT industry with LazyDev
          </p>
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}