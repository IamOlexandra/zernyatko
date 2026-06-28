export default function ComponentItem({ item }) {
  return (
    <div className="componentContent">
      <div className="image">
        <img src={item.image} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}
