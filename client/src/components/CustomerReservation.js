import { OverflowMapped } from "../styled/Customer.styled";
import { CustomerMappedReservations } from "../styled/CustomerReservations.styled";
import Auth from "../utils/auth";

const CustomerReservations = () => {
  //Getting the reservations:
  let data = [];
  //Deleting the reservations:
  const deleteAReservation = async (reservationId) => {
    console.log("Deleting a res", reservationId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>Your Reservations:</h3>(
      <OverflowMapped>
        {data.userReservations.map((res) => (
          <CustomerMappedReservations key={res._id}>
            <p>Date: {res.reservationDate}</p>
            <p>Time: {res.reservationTime}</p>
            <p>For {res.reservationNumber} People</p>
            <button
              className="button"
              onClick={() => deleteAReservation(res._id)}
            >
              Cancel
            </button>
          </CustomerMappedReservations>
        ))}
      </OverflowMapped>
    </>
  );
};

export default CustomerReservations;
