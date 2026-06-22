import ComponentItem from "./ComponentyItem";
import componentyData from "./componenty.json";

export default function PopulyarniComponenty() {
  return (
    <section className="populyarniComponenty">
      <div className="componentyHeader">
        <h2>Популярні категорії</h2>
        <button className="allComponentyBtn">Всі категорії</button>
      </div>

      <div className="componentyGrid">
        {componentyData.map((component) => (
          <ComponentItem key={component.id} item={component} />
        ))}
      </div>
    </section>
  );
}
