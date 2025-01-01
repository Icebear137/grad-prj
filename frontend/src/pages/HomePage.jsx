import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/Rau", name: "Rau", imageUrl: "/rau.jpg" },
  { href: "/Củ", name: "Củ", imageUrl: "/củ.jpg" },
  { href: "/Quả", name: "Quả", imageUrl: "/táo.jpg" },
  { href: "/Thịt", name: "Thịt", imageUrl: "/thịt.jpg" },
  { href: "/Hải sản", name: "Hải sản", imageUrl: "/seafood.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-700 mb-4">
          Hãy khám phá các thức ăn tươi ngon
        </h1>
        <p className="text-center text-xl text-black mb-12">
          Tất cả sản phẩm đều được bảo quản một cách kĩ lưỡng để thực phẩm được
          tươi ngon nhất có thể.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[100px]">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
