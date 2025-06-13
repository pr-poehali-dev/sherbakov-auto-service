import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Замена шин",
      description:
        "Профессиональная замена и балансировка колес. Работаем с любыми размерами шин.",
      price: "от 2,000 ₸",
    },
    {
      icon: "Settings",
      title: "Ремонт автомобилей",
      description:
        "Диагностика и ремонт двигателя, тормозной системы, подвески и других узлов.",
      price: "от 5,000 ₸",
    },
    {
      icon: "Car",
      title: "Техническое обслуживание",
      description:
        "Полное ТО вашего автомобиля. Замена масла, фильтров, свечей зажигания.",
      price: "от 8,000 ₸",
    },
    {
      icon: "Gauge",
      title: "Диагностика",
      description:
        "Компьютерная диагностика всех систем автомобиля. Выявление скрытых неисправностей.",
      price: "от 3,000 ₸",
    },
    {
      icon: "Zap",
      title: "Электрика",
      description:
        "Ремонт электрооборудования, стартеров, генераторов, проводки.",
      price: "от 4,000 ₸",
    },
    {
      icon: "Shield",
      title: "Кузовной ремонт",
      description:
        "Рихтовка, покраска, антикоррозийная обработка кузова автомобиля.",
      price: "от 15,000 ₸",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по обслуживанию и ремонту
            автомобилей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop&q=80" // Замена шин
                      : index === 1
                        ? "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400&h=300&fit=crop&q=80" // Ремонт автомобилей
                        : index === 2
                          ? "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&h=300&fit=crop&q=80" // ТО
                          : index === 3
                            ? "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop&q=80" // Диагностика
                            : index === 4
                              ? "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop&q=80" // Электрика
                              : "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop&q=80" // Кузовной ремонт
                  }
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Icon
                      name={service.icon as any}
                      className="text-orange-500"
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-500">
                    {service.price}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
