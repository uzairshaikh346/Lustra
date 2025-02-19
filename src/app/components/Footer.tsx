const Footer: React.FC = () => {
    return (
      <footer className="bg-black/90 text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="text-center">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  