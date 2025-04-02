import React, { useEffect, useState } from "react";
import { collection, getDocs , query, orderBy,updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function ANotifications() {
  const contactsRef = collection(db, "contacts");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q=query(contactsRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const contactsData = querySnapshot.docs.map((doc) => {
          const docData = doc.data(); // Correctly get Firestore document data

          return {
            id: doc.id,
            name: docData.name || "N/A", // Ensure safe extraction
            email: docData.email || "N/A",
            message: docData.message || "N/A",
            country: docData.country || "N/A",
            timestamp:  docData.timestamp && docData.timestamp.toDate 
            ? docData.timestamp.toDate().toLocaleString() 
            : "N/A",  // Handle invalid timestamps
          };
        });

        setData(contactsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
   // Function to mark a message as read
   const markAsRead = async (id) => {
    try {
      const docRef = doc(db, "contacts", id);
      await updateDoc(docRef, { read: true });

      // Update state to reflect the change
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, read: true } : item
        )
      );
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  };


  console.log(data);

  return (
    <main className="border md:m-5 m-2 rounded-xl h-full bg-white border-slate-950 p-4">
      <p className="text-center font-bold text-4xl">Received Requests</p>
      <hr className="h-1 bg-[#ED7D3B] w-[50%] m-auto" />
      <table className="bg-white border my-10 md:w-full overflow-auto border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="border border-slate-950 text-left p-3">Name</th>
            <th className="border border-slate-950 text-left p-3">Email</th>
            <th className="border border-slate-950 text-left p-3">Message</th>
            <th className="border border-slate-950 text-left p-3">Country</th>
            <th className="border border-slate-950 text-left p-3">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="border border-slate-950 text-left p-3">
                {item.name}
              </td>
              <td className="border border-slate-950 text-left p-3">
                {item.email}
              </td>
              <td className="border border-slate-950 text-left p-3">
                {item.message}
              </td>
              <td className="border border-slate-950 text-left p-3">
                {item.country}
              </td>
              <td className="border border-slate-950 text-left p-3">
                {item.timestamp}
              </td>
              <td className="border border-slate-950 text-left p-3">
                {!item.read && (
                  <button
                    onClick={() => markAsRead(item.id)}
                    className="bg-[#ED7D3B] text-white px-3 py-1 rounded"
                  >
                    Mark as Read
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default ANotifications;
