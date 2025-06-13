import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Award",
      title: "Опыт работы 10+ лет",
      description: "Многолетний опыт в сфере автосервиса",
    },
    {
      icon: "Users",
      title: "Квалифицированные мастера",
      description: "Сертифицированные специалисты высокого класса",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Гарантия на все виды выполненных работ",
    },
    {
      icon: "Clock",
      title: "Быстрое обслуживание",
      description: "Минимальные сроки выполнения работ",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              О нашем автосервисе
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Наш автосервис работает в Алматы уже более 10 лет, предоставляя
              качественные услуги по ремонту и обслуживанию автомобилей. Мы
              специализируемся на замене шин, продаже качественных автотоваров и
              комплексном ремонте автомобилей.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Наши мастера имеют высокую квалификацию и используют современное
              оборудование для диагностики и ремонта. Мы работаем с автомобилями
              всех марок и моделей, предоставляя гарантию на все виды
              выполненных работ.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Icon
                      name={feature.icon as any}
                      className="text-orange-500"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1632823471565-1246afaa4108?w=600&h=400&fit=crop"
              alt="Автосервис изнутри"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
