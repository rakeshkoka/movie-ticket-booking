import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {

    const [userData, setUserData] = useState({
        fullname: '',
        phone: '',
        email: '',
        password: ''
    });

    const [originalUserData, setOriginalUserData] = useState({
        fullname: '',
        phone: '',
        email: '',
        password: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {};

        // Check for changes and add only modified fields
        if (userData.fullname !== originalUserData.fullname) {
            updatedData.fullname = userData.fullname;
        }
        if (userData.email !== originalUserData.email) {
            updatedData.email = userData.email;
        }
        if (userData.phone !== originalUserData.phone) {
            updatedData.phone = userData.phone;
        }
        if (userData.password !== originalUserData.password) {
            updatedData.password = userData.password;
        }

        // If there are any modified fields, send them to the backend
        if (Object.keys(updatedData).length > 0) {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.put('http://localhost:5000/profile', updatedData, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Set token in Authorization header
                    },
                });

                if (response.data.success) {
                    alert('Profile updated successfully!');
                    setIsEditing(false); // Exit edit mode after successful update

                    // Update user data with the response data from the backend
                    setUserData({
                        ...userData,
                        ...updatedData
                    });

                    // Update original user data to reflect changes
                    setOriginalUserData({
                        ...userData,
                        ...updatedData
                    });
                }
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        } else {
            alert("No changes detected!");
        }
    };

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            try {
                const response = await axios.get('http://localhost:5000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Set token in Authorization header
                    },
                });
                setUserData(response.data); // Store profile data in state
                setOriginalUserData(response.data); // Store the original user data
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="text-text-light mx-auto mt-14" style={{ width: '500px', height: 'auto' }} >

            <h2>User Profile</h2>

            <form onSubmit={handleSubmit}>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow"
                        placeholder="Username"
                        name="fullname"
                        value={userData.fullname}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                        type="email"
                        className="grow"
                        placeholder="Email"
                        value={userData.email}
                        name="email"
                        onChange={handleChange}
                        disabled={!isEditing}

                    />
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-5 opacity-70 sm:h-4 sm:w-4">
                        <path
                            d="M11.742 8.688a1.75 1.75 0 0 1-.23-.62 10.04 10.04 0 0 0-.705-2.173c-.35-.716-.653-1.265-.884-1.757a1.75 1.75 0 0 0-2.228-.702l-2.53 1.58a1.75 1.75 0 0 0-.374 2.346l.937 1.5a1.75 1.75 0 0 1 .03 1.903c.11.047.229.085.349.129.124.045.25.091.375.14 1.345.479 2.79 1.03 4.247 1.58 2.467 1.001 4.59 2.285 6.238 3.955.712.801.96 1.92.708 2.967-.108.413-.394.741-.784.866l-1.507.524c-.429.15-.913.11-1.335-.107a13.28 13.28 0 0 1-3.48-2.063l-2.102-1.56a1.75 1.75 0 0 0-2.244.392l-1.05 2.027a1.75 1.75 0 0 1-2.326.75l-2.68-.8c-.493-.149-.88-.572-1.025-1.082a9.98 9.98 0 0 1-.349-3.336c.36-1.658.992-3.217 1.926-4.675l2.075-1.487a1.75 1.75 0 0 1 2.414.256l1.6 2.778a1.75 1.75 0 0 1-.177 2.253l-.99 1.347a1.75 1.75 0 0 0-.425 2.314c1.01.517 1.995 1.059 2.95 1.562l.743-.535c.438-.315.552-.848.397-1.307-.192-.446-.544-.752-.985-.86l-1.17-.344z" />
                    </svg>
                    <input
                        type="tel" // For mobile number input (you could also use type="number")
                        className="grow py-2 sm:py-1 sm:px-2 text-base sm:text-sm"
                        placeholder="Mobile Number"
                        pattern="[0-9]{10}" // Optional: restrict to a 10-digit number
                        maxLength="10" // Optional: limit to 10 digits
                        value={userData.phone}
                        name="phone"
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-5 opacity-70">
                        <path
                            d="M11 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6Zm0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                    </svg>
                    <input
                        type="password"
                        className="grow"
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                {!isEditing ? (
                    <button
                        type="button"
                        className="btn mt-4 bg-accent text-white"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Profile
                    </button>
                ) : (
                    <>
                        <button type="submit" className="btn mt-4 bg-accent text-white">
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="btn mt-4 ml-4 bg-gray-500 text-white"
                            onClick={() => {
                                setUserData(originalUserData);
                                setIsEditing(false);
                            }}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}

export default Profile;
