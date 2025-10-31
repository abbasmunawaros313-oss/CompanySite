
import { LinkedinIcon, TwitterIcon, GithubIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#0a0e27] border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#00d9ff]">Ignite</span> Solutions
            </div>
            <p className="text-gray-400 mb-6">
              Building exceptional digital products that drive innovation and
              transform businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#1a1f3a] rounded-full flex items-center justify-center hover:bg-[#00d9ff] hover:text-[#0a0e27] transition-all">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1f3a] rounded-full flex items-center justify-center hover:bg-[#00d9ff] hover:text-[#0a0e27] transition-all">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1f3a] rounded-full flex items-center justify-center hover:bg-[#00d9ff] hover:text-[#0a0e27] transition-all">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MailIcon size={20} className="text-[#00d9ff] mt-1" />
                <span>munawargolden3@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <PhoneIcon size={20} className="text-[#00d9ff] mt-1" />
                <span>03135506223</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPinIcon size={20} className="text-[#00d9ff] mt-1" />
                <span>Near Askiri Bank Alipur Islamabad Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ignite Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}