import "./Testimonials.css";
import TestimonialsTitle from "./TestimonialsTitle";
import TestimonialCard from "./TestimonialCard";
import SliderDots from "./SliderDots";
import SliderButtons from "./SliderButtons";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      review:
        "Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й ароматом шоколаду.",
      author: "Олена Коваль",
      product: "Еспресо Класік",
    },
    {
      id: 2,
      review:
        "Френч-прес якісний і зручний у використанні. Скло міцне, фільтр добре працює.",
      author: "Ігор Петров",
      product: "Френч-прес Classic 600 мл",
    },
    {
      id: 3,
      review:
        "Купив для роботи — тримає тепло кілька годин, дизайн мінімалістичний.",
      author: "Ігор Шевченко",
      product: "Термокружка Зернятко 350 мл",
    },
  ];

  return (
    <section className="testimonials">
      <TestimonialsTitle />

      <div className="testimonials__cards">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            review={item.review}
            author={item.author}
            product={item.product}
          />
        ))}
      </div>

      <div className="testimonials__bottom">
        <SliderDots />
        <SliderButtons />
      </div>
    </section>
  );
}

export default Testimonials;