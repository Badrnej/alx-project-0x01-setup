const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">React Architect</h3>
            <p className="text-gray-400">Mastering Advanced Structures in Next.js</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              À propos
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 React Architect. Créé avec Next.js et Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
