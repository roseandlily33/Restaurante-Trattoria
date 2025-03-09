import { OverflowMapped,  CustomerMappedReviews} from "../styled/Customer.styled";

const CustomerReviews = () => {
    //For the GET_USER:
    const userData = [];

    const {reviews} = userData;

    return (
        <>
         {reviews ? (
            <OverflowMapped>
            {reviews.map(review => (
                <CustomerMappedReviews key={review._id}>
                <p>{review.reviewText}</p>
                {/* Delete button taken out */}
                </CustomerMappedReviews>
            ))}
            </OverflowMapped>
        ) : (<h6>You have no reviews</h6>)}
        </>
    )
};

export default CustomerReviews;