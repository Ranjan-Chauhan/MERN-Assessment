import React, { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
// import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  // Fetch Users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  // Delete User from API and Update State
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.status}`);
      }

      // Remove the user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Get current page data
  const currentData = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="overflow-x-auto p-8">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">DOB</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user, index) => (
            <tr
              key={user._id}
              className="hover:bg-gray-50 transition duration-200"
            >
              <td className="border border-gray-300 px-4 py-2">
                {(currentPage - 1) * rowsPerPage + index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(user.dateOfBirth).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 flex space-x-4">
                <button className="text-blue-500 hover:text-blue-700">
                  <SettingsIcon />
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center space-x-6 mt-4 text-sm">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;

// import React, { useState } from "react";
// import SettingsIcon from "@mui/icons-material/Settings";
// import DeleteIcon from "@mui/icons-material/Delete";
// import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

// const Table = () => {
//   const users = [
//     {
//       id: 1,
//       name: "Michael Holz",
//       dateCreated: "04/10/2013",
//       role: "Admin",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       id: 2,
//       name: "Paula Wilson",
//       dateCreated: "05/08/2014",
//       role: "Publisher",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/women/1.jpg",
//     },
//     {
//       id: 3,
//       name: "Antonio Moreno",
//       dateCreated: "11/05/2015",
//       role: "Publisher",
//       status: "Suspended",
//       avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//     {
//       id: 4,
//       name: "Mary Saveley",
//       dateCreated: "06/09/2016",
//       role: "Reviewer",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//     },
//     {
//       id: 5,
//       name: "Martin Sommer",
//       dateCreated: "12/08/2017",
//       role: "Moderator",
//       status: "Inactive",
//       avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//     },
//     {
//       id: 6,
//       name: "John Doe",
//       dateCreated: "01/10/2019",
//       role: "User",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/men/4.jpg",
//     },
//     {
//       id: 7,
//       name: "Jane Smith",
//       dateCreated: "03/12/2020",
//       role: "Publisher",
//       status: "Inactive",
//       avatar: "https://randomuser.me/api/portraits/women/3.jpg",
//     },
//     {
//       id: 8,
//       name: "David Parker",
//       dateCreated: "05/15/2021",
//       role: "Admin",
//       status: "Suspended",
//       avatar: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//       id: 9,
//       name: "Lucy Graham",
//       dateCreated: "07/23/2022",
//       role: "Reviewer",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       id: 10,
//       name: "Tom Walker",
//       dateCreated: "09/10/2023",
//       role: "Moderator",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/men/6.jpg",
//     },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;
//   const totalPages = Math.ceil(users.length / rowsPerPage);

//   // Get current page data
//   const currentData = users.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active":
//         return "text-green-500";
//       case "Suspended":
//         return "text-red-500";
//       case "Inactive":
//         return "text-orange-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   return (
//     <div className="">
//       {/* <div className="w-full py-6 font-bold px-10 bg-cyan-700 text-white">
//         Dashboard
//       </div> */}
//       <div className="overflow-x-auto p-8">
//         <table className="table-auto w-full border-collapse border border-gray-200">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">#</th>
//               <th className="border-t border-gray-300 px-4 py-2 text-left">
//                 Name
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Date Created
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Role
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Status
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((user) => (
//               <tr
//                 key={user.id}
//                 className="hover:bg-gray-50 transition duration-200"
//               >
//                 <td className="border border-gray-300 px-4 py-2">{user.id}</td>
//                 <td className="border-t border-gray-300 px-4 py-2 flex items-center space-x-4">
//                   <img
//                     src={user.avatar}
//                     alt={user.name}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <span>{user.name}</span>
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {user.dateCreated}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {user.role}
//                 </td>
//                 <td
//                   className={`border border-gray-300 px-4 py-2 font-semibold ${getStatusColor(
//                     user.status
//                   )}`}
//                 >
//                   ● {user.status}
//                 </td>
//                 <td className="border-b border-gray-300 px-4 py-2 flex justify-evenly items-center space-x-4">
//                   <button className="text-blue-500 hover:text-blue-700">
//                     <SettingsIcon />
//                   </button>
//                   <button className="text-red-500 hover:text-red-700">
//                     <HighlightOffRoundedIcon />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex justify-end items-center space-x-6 mt-4 text-sm">
//           {/* Pagination Controls */}
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className={`px-3 py-1 rounded ${
//               currentPage === 1
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-blue-500 text-white hover:bg-blue-600"
//             }`}
//           >
//             Previous
//           </button>
//           <div>
//             Page {currentPage} of {totalPages}
//           </div>
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className={`px-3 py-1 rounded ${
//               currentPage === totalPages
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-blue-500 text-white hover:bg-blue-600"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;
