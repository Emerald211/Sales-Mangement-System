import React from "react";
import { useState, useEffect } from "react";
import { getUserCollectionandDocuments } from "../../utils/firebase/firebase";
import TableColumn from "../../components/table-column/table-column.component";

const Users = () => {
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userListData = await getUserCollectionandDocuments();

        setuserList(userListData);
      } catch (error) {
        console.log(error, "Unable to Add user document");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className=" text-3xl text-main">
      <div className="p-4 sm:ml-64">
        <div className="flex mb-4">
          <h1 className=" text-green-800 text-xl font-bold "> Users</h1>
        </div>

        <div>
                 <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                
                className="text-xs text-white uppercase  dark:bg-green-800 dark:text-white"
              >
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>
                {userList.map((eachuser) => {
                  const { name, email, age, id } = eachuser;
                  return (
                    <tr key={id} className="bg-white border-b ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                      >
                        {name}
                      </th>
                      <td className="px-6 py-4">{email}</td>
                      <td className="px-6 py-4">{age}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Users;
