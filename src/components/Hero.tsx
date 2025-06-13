import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Профессиональный
              <span className="text-orange-400 block">АвтоСервис</span>в Алматы
            </h1>
            <p className="text-xl text-gray-300">
              Качественный ремонт, замена шин и продажа автотоваров. Опыт работы
              более 10 лет. Гарантия на все виды услуг.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/87009110091"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:87009110091"
                className="inline-flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Icon name="Phone" size={20} />
                <span>Позвонить</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600&h=400&fit=crop"
              alt="Автосервис"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
