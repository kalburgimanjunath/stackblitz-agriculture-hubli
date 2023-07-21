export default function Category({ catergory }) {
  return (
    <div>
      {catergory &&
        catergory.map((item) => {
          return <div>{item}</div>;
        })}
    </div>
  );
}
