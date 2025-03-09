import { AdminInfoDiv } from "../styled/Admin.styled";

const AllReservations = () => {
  let reservations = [];

  return (
    <>
      <h2>All Reservations</h2>
      {reservations.map((res) => (
        <AdminInfoDiv>
          <h5>Customer: {res.reservationName}</h5>
          <h5>Time: {res.reservationTime}</h5>
          <h5>Date: {res.reservationDate}</h5>
          <h5>People: {res.reservationNumber}</h5>
        </AdminInfoDiv>
      ))}
    </>
  );
};

export default AllReservations;
