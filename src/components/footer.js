import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-8 border-t border-zinc-800 text-zinc-400 font-sans selection:bg-amber-200 selection:text-amber-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        {/* --- Copyright Info --- */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-medium text-zinc-300">RFC Coaching Classes</p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>

        {/* --- Links or Socials (Optional placeholder) --- */}
        <div className="flex gap-6 text-zinc-500">
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">Terms of Service</a>
        </div>

        {/* --- Author Credit --- */}
        <div className="text-center md:text-right">
          <p>
            Designed & Developed by{' '}
            <span className="text-amber-500 font-semibold tracking-wide">
              Mohd Anas
            </span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;