import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или приезжайте к нам в сервис
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <Icon name="MapPin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-300">
                  Гагарина 111б
                  <br />
                  Алматы, Казахстан
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <Icon name="Phone" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <a
                  href="tel:87009110091"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  8 700 911 00 91
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <Icon name="Mail" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:700casper@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  700casper@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <Icon name="MessageCircle" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/87009110091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  <span>Написать в WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <Icon name="Clock" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Пн-Пт: 9:00 - 19:00</p>
                  <p>Сб: 9:00 - 17:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6">Обратная связь</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Номер телефона"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 outline-none h-32"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
