import PropTypes from 'prop-types';
import { FaTwitter, FaLinkedin, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = ({ companyName = "Makna Karya Tech Spark", email = "suratmaknakarya@gmail.com" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-gray-800 text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-300">Mulai
Ciptakan Karya
dan Beri Makna.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/news" className="hover:text-blue-400 transition-colors">News</a></li>
              {/* <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-blue-400" />
              <a href={`mailto:${email}`} className="hover:text-blue-400 transition-colors">
                {email}
              </a>
            </div>
            <p className="text-gray-300">Jl.Pahlawan No 70 Bdg PKJB</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/techspark"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/company/techspark"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/techspark"
                aria-label="Instagram"
                className="hover:text-blue-400 transition-colors text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/techspark"
                aria-label="YouTube"
                className="hover:text-blue-400 transition-colors text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} {companyName} V.1.2  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  companyName: PropTypes.string,
  email: PropTypes.string
};

export default Footer;