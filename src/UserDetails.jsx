import "./UserDetails.css";
const UserDetails = (props) => {
  return (
    <>
      <div className="wrapper">
        <h1>User Details</h1>
        <div>
          <h2>Name</h2>
          <span>{props.user.first_name}</span>
          <span>{props.user.last_name}</span>
        </div>
        <div>
          <h2>Email</h2>
          <span>{props.user.email}</span>
        </div>
        <div>
          <h2>Gender</h2>
          <span>{props.user.gender}</span>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
