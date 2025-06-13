import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Wrench" className="text-orange-500" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">АвтоСервис</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Товары
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Контакты
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              О нас
            </a>
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center space-x-2">
            <Icon name="Phone" className="text-orange-500" size={20} />
            <a
              href="tel:87009110091"
              className="text-gray-800 font-semibold hover:text-orange-500 transition-colors"
            >
              8 700 911 00 91
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Услуги
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Товары
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Контакты
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                О нас
              </a>
              <div className="flex items-center space-x-2 pt-2">
                <Icon name="Phone" className="text-orange-500" size={20} />
                <a
                  href="tel:87009110091"
                  className="text-gray-800 font-semibold"
                >
                  8 700 911 00 91
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
