import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      category: "Летние шины",
      items: [
        {
          name: "Michelin Primacy 4",
          size: "205/55 R16",
          price: "45,000 ₸",
          image:
            "https://images.unsplash.com/photo-1574204705991-1ad6dc6c30c4?w=300&h=300&fit=crop&q=80",
        },
        {
          name: "Continental Premium Contact",
          size: "225/45 R17",
          price: "52,000 ₸",
          image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop&q=80",
        },
      ],
    },
    {
      category: "Зимние шины",
      items: [
        {
          name: "Nokian Hakkapeliitta",
          size: "195/65 R15",
          price: "38,000 ₸",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80",
        },
        {
          name: "Bridgestone Blizzak",
          size: "215/60 R16",
          price: "42,000 ₸",
          image:
            "https://images.unsplash.com/photo-1574204705991-1ad6dc6c30c4?w=300&h=300&fit=crop&q=80",
        },
      ],
    },
    {
      category: "Диски",
      items: [
        {
          name: "Литые диски R16",
          size: "5x114.3",
          price: "25,000 ₸",
          image:
            "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=300&h=300&fit=crop&q=80",
        },
        {
          name: "Кованые диски R17",
          size: "5x120",
          price: "35,000 ₸",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&q=80",
        },
      ],
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Товары и запчасти
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент качественных шин, дисков и автозапчастей
          </p>
        </div>

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Icon name="Package" className="mr-3 text-orange-500" size={28} />
              {category.category}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">{product.size}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-orange-500">
                        {product.price}
                      </span>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm transition-colors">
                        Купить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
