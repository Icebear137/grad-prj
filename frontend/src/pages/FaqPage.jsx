

const FaqPage = () => {
  const faqs = [
    {
      question:
        "Các sản phẩm rau củ quả được bảo quản như thế nào để đảm bảo độ tươi ngon?",
      answer:
        "Đối với các rau củ quả sẽ được nhập hàng mới hàng ngày và bảo quản trong tủ lạnh để đảm bảo độ tươi ngon.",
    },
    {
      question:
        "Các sản phẩm thịt thì được bảo quản như thế nào để đảm bảo độ tươi ngon?",
      answer:
        "Đối với các sản phẩm thịt sẽ được nhập hàng mới hàng ngày và không để trong cửa hàng quá 2 ngày để đảm bảo độ tươi ngon.",
    },
    {
      question:
        "Các sản phẩm hải sản thì được bảo quản như thế nào để đảm bảo độ tươi ngon?",
      answer:
        "Đối với các sản phẩm hải sản thì cửa hàng sẽ có các bể nước để bảo quản sản phẩm. Các sản phẩm hải sản sẽ còn sống và được chế biến ngay sau khi khách hàng đặt mua.",
    },
    {
      question: "Hạn sử dụng của các sản phẩm là bao lâu?",
      answer:
        "Hạn sử dụng của các sản phẩm sẽ được ghi ở ngay dưới tên của sản phẩm. Số ngày sử dụng được ghi sẽ là số ngày mà thực phẩm còn tươi sau khi khách hàng nhận hàng.",
    },
    {
      question: "Các sản phẩm có trong phần đang đến mùa có nghĩa là gì?",
      answer:
        "Các sản phẩm đang đến mùa là các sản phẩm mà cửa hàng đang bán với giá ưu đãi vì đây là thời điểm mà sản phẩm đó đang mùa và giá cả rẻ nhất trong năm.",
    },
    {
      question: "Chính sách đổi trả như thế nào?",
      answer:
        "Do kinh doanh mặt hàng tươi ngon nên nếu bạn không hài lòng với sản phẩm, chúng tôi sẽ hoàn tiền hoặc đổi trả cho bạn trong ngày để đảm bảo chất lượng sản phẩm.",
    },
    {
      question: "Hình thức thanh toán nào bạn chấp nhận?",
      answer:
        "Chúng tôi hiện đang chấp nhận thanh toán bằng thẻ ngân hàng.",
    },
  ];

  return (
    <div className=" min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Câu hỏi thường gặp
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h2>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
