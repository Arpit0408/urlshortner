import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../apis/userApi";
import UpdateProfile from "../components/UpdateProfile";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (err) {
        setError("Failed to fetch user", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

   const handleClose = () => {
    setShowModal(false);
  };

  if (loading) return <p className="text-center mt-10">Loading user info...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          {/* User info */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="uppercase tracking-wide text-lg text-indigo-600 font-semibold mb-4">
               User Info
            </h2>
            <p className="text-gray-700 text-base mb-2">
              <strong>Name:</strong> {user.user.name}
            </p>
            <p className="text-gray-700 text-base mb-6">
              <strong>Email:</strong> {user.user.email}
            </p>

            {/* Update Button */}
            <button
              className="self-start bg-indigo-600 text-white px-5 py-2 rounded-sm hover:bg-indigo-700 transition"
              onClick={handleClick}
            >
              Update Info
            </button>
          </div>
        </div>
      </div>
       {/* Modal */}
      {showModal && <UpdateProfile onClose={handleClose} />}
    </div>
  );
};

export default Profile;
