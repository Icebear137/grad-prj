import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    if (!user) {
      toast.error("Vui lòng đăng nhập trước", { id: "login" });
      return;
    } else {
      // add to cart
      addToCart(product);
    }
  };

  return (
    <div className="flex w-full relative flex-col overflow-hidden rounded-lg border border-white shadow-lg hover:shadow-xl">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={product.image}
          alt="product image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex-col items-center justify-between space-between-[10px]">
          <p>
            <span className="text-xs font-medium text-black">
              {product.unit} {product.category === "Rau" ? "mớ" :"kg"  }
            </span>
          </p>
          <p>
            <span className="text-xs font-medium text-black" title="Hạn sử dụng">
              {product.good_through}
            </span>
          </p>
          <p>
            <span className="text-xs font-medium text-black">
              {product.from}
            </span>
          </p>
          <p>
            <span className="text-[20px] font-bold text-emerald-700">
              {product.price.toLocaleString("en-US")} VND
            </span>
          </p>
        </div>
        <button
          className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
					 text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} className="mr-2" />
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
