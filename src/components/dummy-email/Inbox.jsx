"use client";
import React, { useState } from 'react';


function Inbox({dummyMails}) {
   const [selected, setSelected] = useState(dummyMails[0]);

  return (
    <div className="h-screen bg-white-100 flex w-[75%] mx-auto">
      
      <div className="w-1/3 bg-white overflow-y-auto">
        <div className="p-4 font-bold text-lg bg-black text-white">
          📥 Inbox
        </div>

        {dummyMails.map((mail) => (
          <div
            key={mail.id}
            onClick={() => setSelected(mail)}
            className={`p-4 cursor-pointer border-b hover:bg-gray-50 ${
              selected.id === mail.id ? "bg-gray-200" : ""
            }`}
          >
            <div className="flex justify-between">
              <span className={`font-medium ${!mail.read && "font-bold"}`}>
                {mail.from}
              </span>
              <span className="text-xs text-gray-500">{mail.time}</span>
            </div>

            <p className="text-sm text-gray-600 truncate">
              {mail.subject}
            </p>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-gray-100 p-6">
        {selected ? (
          <>
            <h2 className="text-xl font-semibold mb-2">
              {selected.subject}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              From: {selected.from}
            </p>

            <div className="border-t pt-4 text-gray-700">
              <p>
               {selected.message}
              </p>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Select an email</p>
        )}
      </div>
    </div>
  );
}

export default Inbox