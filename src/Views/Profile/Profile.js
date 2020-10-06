import React from "react";
import ProfileCard from "../../Components/Profile/ProfileCard/ProfileCard";
import AccessDataCard from "../../Components/Profile/AccessDataCard/AccessDataCard";
import YourRoomCard from "../../Components/Profile/YourRoomCard/YourRoomCard";

export default function Profile() {
  return (
    <div>
      <div className="user">
        <ProfileCard />
      </div>
      <div className="Room">
        <YourRoomCard />
      </div>
      <div className="Access">
        <AccessDataCard />
      </div>
    </div>
  );
}
