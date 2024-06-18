import React from "react";

interface TeamMemberProps {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  email,
  phone,
  picture,
}) => {
  return (
    <section className="py-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      <div className="max-w-sm rounded shadow-lg m-4">
        <img className="w-2/5 h-2/5" src={picture} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-black mb-2">{name}</div>
          <p className="text-black text-base">{email}</p>
          <p className="text-black text-base">{phone}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
