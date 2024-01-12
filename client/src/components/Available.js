import Book from "./Book";

const curDate = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
});
const Available = ({ category }) => {
  return (
    <div>
      <div className="font-bold p-3 text-lg text-[#4F6C92] border-b-2 border-[#A4B8D3] bg-[#cbd2e1]">
        {curDate === category.date ? (
          <h3 className="ml-4">Today</h3>
        ) : (
          <h3 className="ml-4">{category.date}</h3>
        )}
      </div>
      {category.count.map((shift) => (
        <Book key={shift.id} shift={shift} />
      ))}
    </div>
  );
};
export default Available;
