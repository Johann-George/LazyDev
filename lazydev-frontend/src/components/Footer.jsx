import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">LazyDev</h3>
            <p className="text-sm">
              Your complete platform for launching a successful career in tech. From coding to projects, we've got you covered.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Practice</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/practice" className="hover:text-emerald-400 transition-colors">Coding Problems</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Aptitude Tests</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">CS Fundamentals</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/roadmap" className="hover:text-emerald-400 transition-colors">Learning Roadmap</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Interview Tips</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Career Guidance</a></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 LazyDev. All rights reserved. Empowering the next generation of tech professionals.</p>
        </div>
      </div>
    </footer>
  )
  /*return (
    <footer className="flex justify-center items-center py-4 font-primary text-gray-700 dark:text-gray-300 dark:bg-darkbg">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-red-600 mx-1 animate-pulse"
        aria-hidden="true"
      />
      by
      <a
        href="https://johanngeorge.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="text-primary dark:text-light font-semibold px-1 transition-colors duration-300 hover:text-dark dark:hover:text-lighter"
      >
        Johann 
      </a>
    </footer>
  );*/
}