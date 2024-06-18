"use client";
import Navbar from "@/components/homePage/navbar";
import TeamMember from "@/components/teams/team";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen">
      <div>
        <Navbar />
      </div>
      <h1 className="font-bold text-5xl md:text-7xl text-black text-center pt-32 md:pt-32">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {users.map((user, index) => (
          <TeamMember
            key={index}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            phone={user.phone}
            picture={user.picture.large}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
