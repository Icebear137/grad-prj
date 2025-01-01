import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCartStore } from "../stores/useCartStore";

const GiftCouponCard = () => {
  const [userInputCode, setUserInputCode] = useState("");
  const { coupon, isCouponApplied, applyCoupon, getMyCoupon, removeCoupon } =
    useCartStore();

  useEffect(() => {
    getMyCoupon();
  }, [getMyCoupon]);

  useEffect(() => {
    if (coupon) setUserInputCode(coupon.code);
  }, [coupon]);

  const handleApplyCoupon = () => {
    if (!userInputCode) return;
    applyCoupon(userInputCode);
  };

  const handleRemoveCoupon = async () => {
    await removeCoupon();
    setUserInputCode("");
  };

  return (
    <motion.div
      className="space-y-4 rounded-lg border border-gray-100 bg-gray-100 p-4 shadow-sm sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="voucher"
            className="mb-2 block text-sm font-medium text-black"
          >
            Bạn có thẻ giảm giá không?
          </label>
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-200 bg-gray-200 
            p-2.5 text-sm text-black placeholder-gray-400 focus:border-emerald-500 
            focus:ring-emerald-500"
            placeholder="Nhập vào đây"
            value={userInputCode}
            onChange={(e) => setUserInputCode(e.target.value)}
            required
          />
        </div>

        <motion.button
          type="button"
          className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleApplyCoupon}
        >
          Nhập mã
        </motion.button>
      </div>
      {isCouponApplied && coupon && (
        <div className="mt-4">
          <h3 className="text-lg font-medium text-black">
            Thẻ giảm giá đã nhập
          </h3>

          <p className="mt-2 text-sm text-gray-700">
            Giảm {coupon.code} - {coupon.discountPercentage}%
          </p>

          <motion.button
            type="button"
            className="mt-2 flex w-full items-center justify-center rounded-lg bg-red-600 
            px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none
             focus:ring-4 focus:ring-red-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRemoveCoupon}
          >
            Bỏ thẻ
          </motion.button>
        </div>
      )}

      {coupon && (
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">
            Thẻ giảm giá của bạn:
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            {coupon.code} - {coupon.discountPercentage}% off
          </p>
        </div>
      )}
    </motion.div>
  );
};
export default GiftCouponCard;