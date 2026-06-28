import RatingStars from "./RatingStars";

function TestimonialCard({ review, author, product }) {
  return (
    <div className="testimonial-card">
      <RatingStars />

      <p>{review}</p>

      <div>
        <h4>{author}</h4>
        <span>{product}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;