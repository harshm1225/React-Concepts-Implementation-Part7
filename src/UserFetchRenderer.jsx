import UserDetails from "./UserDetails";
import { useState, useEffect } from "react";

const UserFetchRenderer = () => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return <div>{user && <UserDetails user={user} />}</div>;
};

export default UserFetchRenderer;
