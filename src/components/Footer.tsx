import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wrench" className="text-orange-500" size={28} />
              <h3 className="text-xl font-bold">АвтоСервис</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный автосервис в Алматы. Качественный ремонт и
              обслуживание автомобилей.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/87009110091"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="tel:87009110091"
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="mailto:700casper@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Наши услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Замена и балансировка шин</li>
              <li>Ремонт двигателя</li>
              <li>Техническое обслуживание</li>
              <li>Компьютерная диагностика</li>
              <li>Ремонт электрики</li>
              <li>Кузовной ремонт</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Гагарина 111б, Алматы, Казахстан</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <a
                  href="tel:87009110091"
                  className="hover:text-orange-400 transition-colors"
                >
                  8 700 911 00 91
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <a
                  href="mailto:700casper@gmail.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  700casper@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 9:00-19:00, Сб: 9:00-17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-2xl font-bold text-orange-400 uppercase tracking-wide">
            СОЗДАЛ САЙТ МУРТАЗИН ГАББАС УРАЛОВИЧ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
