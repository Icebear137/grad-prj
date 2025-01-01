import { useState, useEffect } from "react";
import axios from "../lib/axios";
import toast from "react-hot-toast";

const UserPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    address: "",
  });

 useEffect(() => {
   const fetchUserProfile = async () => {
     try {
       const response = await axios.get("/users/profile"); // Replace with your actual API endpoint
       setUserInfo({
         name: response.data.name || "",
         password: "", // Leave password empty for security reasons
         address: response.data.address || "",
       });
     } catch (error) {
       console.error("Error fetching user profile:", error);
     }
   };

   fetchUserProfile();
 }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put("/users/profile", userInfo); // Use PUT method for updates
        console.log("Profile updated successfully:", response.data);
        toast.success("Cập nhật thông tin thành công");
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error("Cập nhật thông tin thất bại");
      }
    };

  return (
    <div className="user-page min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Thông tin cá nhân
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
                Mật khẩu:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Địa chỉ:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
