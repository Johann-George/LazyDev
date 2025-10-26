import React, { useState } from 'react';
import { Code2, Brain, BookOpen, Hammer, CheckCircle, Lock, Clock, Trophy, ChevronDown, ChevronUp, Zap, Target } from 'lucide-react';

export default function Roadmap() {
  const [selectedPath, setSelectedPath] = useState('fresher');
  const [expandedPhase, setExpandedPhase] = useState(0);

  const roadmaps = {
    fresher: {
      title: 'Fresh Graduate Path',
      duration: '6-8 Months',
      description: 'Comprehensive roadmap for recent graduates to become job-ready',
      phases: [
        {
          title: 'Foundation Phase',
          duration: '2 Months',
          status: 'active',
          modules: [
            {
              icon: BookOpen,
              name: 'CS Fundamentals',
              topics: ['Operating Systems', 'DBMS', 'Computer Networks', 'OOP Concepts'],
              progress: 65,
              color: 'emerald',
            },
            {
              icon: Brain,
              name: 'Aptitude Basics',
              topics: ['Logical Reasoning', 'Quantitative Ability', 'Verbal Reasoning'],
              progress: 45,
              color: 'purple',
            },
            {
              icon: Code2,
              name: 'Programming Basics',
              topics: ['Python/Java Syntax', 'Basic Data Structures', 'Problem Solving'],
              progress: 80,
              color: 'blue',
            },
          ],
        },
        {
          title: 'Intermediate Phase',
          duration: '2-3 Months',
          status: 'in-progress',
          modules: [
            {
              icon: Code2,
              name: 'Data Structures & Algorithms',
              topics: ['Arrays & Hashing', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming'],
              progress: 30,
              color: 'cyan',
            },
            {
              icon: Hammer,
              name: 'Mini Projects',
              topics: ['Todo App', 'Weather App', 'Portfolio Website', 'Calculator'],
              progress: 20,
              color: 'amber',
            },
            {
              icon: Brain,
              name: 'Advanced Aptitude',
              topics: ['Data Interpretation', 'Puzzles', 'Advanced Quant', 'Mock Tests'],
              progress: 15,
              color: 'rose',
            },
          ],
        },
        {
          title: 'Advanced Phase',
          duration: '2 Months',
          status: 'locked',
          modules: [
            {
              icon: Code2,
              name: 'Advanced DSA',
              topics: ['Advanced Graphs', 'Complex DP', 'System Design Basics', 'Optimization'],
              progress: 0,
              color: 'indigo',
            },
            {
              icon: Hammer,
              name: 'Major Projects',
              topics: ['Full Stack App', 'REST API', 'Database Design', 'Deployment'],
              progress: 0,
              color: 'orange',
            },
            {
              icon: BookOpen,
              name: 'System Design',
              topics: ['Scalability', 'Load Balancing', 'Caching', 'Microservices'],
              progress: 0,
              color: 'teal',
            },
          ],
        },
        {
          title: 'Job Ready Phase',
          duration: '1 Month',
          status: 'locked',
          modules: [
            {
              icon: Trophy,
              name: 'Interview Preparation',
              topics: ['Mock Interviews', 'HR Round Prep', 'Resume Building', 'Behavioral Questions'],
              progress: 0,
              color: 'green',
            },
            {
              icon: Target,
              name: 'Company Specific Prep',
              topics: ['Company Tagged Problems', 'Past Interview Questions', 'Company Culture'],
              progress: 0,
              color: 'violet',
            },
          ],
        },
      ],
    },
    shifter: {
      title: 'Career Shifter Path',
      duration: '4-6 Months',
      description: 'Accelerated roadmap for professionals transitioning to IT',
      phases: [
        {
          title: 'Quick Start Phase',
          duration: '1 Month',
          status: 'active',
          modules: [
            {
              icon: Code2,
              name: 'Programming Fundamentals',
              topics: ['Choose Your Language', 'Syntax & Basics', 'Basic Problem Solving'],
              progress: 70,
              color: 'emerald',
            },
            {
              icon: BookOpen,
              name: 'Essential CS Concepts',
              topics: ['OOP', 'Basic Data Structures', 'Algorithms Intro'],
              progress: 55,
              color: 'blue',
            },
            {
              icon: Brain,
              name: 'Aptitude Crash Course',
              topics: ['Quick Quant', 'Logical Reasoning', 'Pattern Recognition'],
              progress: 60,
              color: 'purple',
            },
          ],
        },
        {
          title: 'Skill Building Phase',
          duration: '2 Months',
          status: 'in-progress',
          modules: [
            {
              icon: Code2,
              name: 'Core DSA',
              topics: ['Important Data Structures', 'Common Algorithms', 'Practice Problems'],
              progress: 35,
              color: 'cyan',
            },
            {
              icon: Hammer,
              name: 'Hands-on Projects',
              topics: ['Web Development', 'Backend Basics', 'Database Integration', 'Version Control'],
              progress: 25,
              color: 'amber',
            },
            {
              icon: BookOpen,
              name: 'Industry Essentials',
              topics: ['DBMS', 'Networks', 'Web Technologies', 'Cloud Basics'],
              progress: 20,
              color: 'rose',
            },
          ],
        },
        {
          title: 'Portfolio Phase',
          duration: '1.5 Months',
          status: 'locked',
          modules: [
            {
              icon: Hammer,
              name: 'Capstone Projects',
              topics: ['Full Stack Project', 'API Development', 'Real-world Problem', 'Best Practices'],
              progress: 0,
              color: 'orange',
            },
            {
              icon: Code2,
              name: 'Interview DSA',
              topics: ['Top 100 Problems', 'Pattern Recognition', 'Optimization Techniques'],
              progress: 0,
              color: 'indigo',
            },
          ],
        },
        {
          title: 'Job Hunt Phase',
          duration: '1 Month',
          status: 'locked',
          modules: [
            {
              icon: Trophy,
              name: 'Interview Mastery',
              topics: ['Technical Rounds', 'Behavioral Prep', 'Resume for Career Shifters', 'LinkedIn'],
              progress: 0,
              color: 'green',
            },
            {
              icon: Target,
              name: 'Job Applications',
              topics: ['Targeted Applications', 'Networking', 'Follow-ups', 'Offer Negotiation'],
              progress: 0,
              color: 'violet',
            },
          ],
        },
      ],
    },
  };

  const currentRoadmap = roadmaps[selectedPath];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'border-emerald-500 bg-emerald-500/10';
      case 'in-progress':
        return 'border-amber-500 bg-amber-500/10';
      case 'locked':
        return 'border-gray-500 bg-gray-500/10';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Zap className="w-5 h-5 text-emerald-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-amber-500" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-normalbg dark:bg-darkbg">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary dark:text-light">
            Your Learning{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Follow a structured path tailored to your goals. Track your progress and unlock new modules as you advance.
          </p>
        </div>

        {/* Path Selection */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedPath('fresher')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              selectedPath === 'fresher'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105'
            }`}
          >
            Fresh Graduate
          </button>
          <button
            onClick={() => setSelectedPath('shifter')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              selectedPath === 'shifter'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105'
            }`}
          >
            Career Shifter
          </button>
        </div>

        {/* Roadmap Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold text-primary dark:text-light mb-2">
                {currentRoadmap.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {currentRoadmap.description}
              </p>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-500/30">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {currentRoadmap.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-gray-300 dark:to-gray-700" />

          {/* Phases */}
          <div className="space-y-12">
            {currentRoadmap.phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="relative">
                {/* Phase Node */}
                <div className="absolute left-4 top-8 w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-4 border-emerald-500 flex items-center justify-center z-10">
                  {getStatusIcon(phase.status)}
                </div>

                {/* Phase Content */}
                <div className="ml-20">
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-2xl border-2 ${getStatusColor(
                      phase.status
                    )} overflow-hidden transition-all duration-300 hover:shadow-xl`}
                  >
                    {/* Phase Header */}
                    <button
                      onClick={() => setExpandedPhase(expandedPhase === phaseIndex ? -1 : phaseIndex)}
                      className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-primary dark:text-light mb-1">
                            {phase.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {phase.duration}
                            </span>
                            <span className="capitalize font-semibold">
                              {phase.status === 'active' ? '🔥 Active' : phase.status === 'in-progress' ? '⏳ In Progress' : '🔒 Locked'}
                            </span>
                          </div>
                        </div>
                      </div>
                      {expandedPhase === phaseIndex ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </button>

                    {/* Phase Modules */}
                    {expandedPhase === phaseIndex && (
                      <div className="px-6 pb-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                        {phase.modules.map((module, moduleIndex) => (
                          <div
                            key={moduleIndex}
                            className={`bg-${module.color}-500/5 dark:bg-${module.color}-500/10 rounded-xl p-5 border border-${module.color}-500/20 hover:border-${module.color}-500/40 transition-all duration-300 hover:scale-105 cursor-pointer`}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`p-2 rounded-lg bg-${module.color}-500/20`}>
                                <module.icon className={`w-5 h-5 text-${module.color}-500`} />
                              </div>
                              <h4 className="font-bold text-primary dark:text-light">
                                {module.name}
                              </h4>
                            </div>

                            <ul className="space-y-2 mb-4">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Progress Bar */}
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                  {module.progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r from-${module.color}-500 to-${module.color}-400 rounded-full transition-all duration-500`}
                                  style={{ width: `${module.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Begin with the foundation phase and work your way up to becoming job-ready!
          </p>
          <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}