export default function Practices() {
  const practices = [
    'Tea',
    'Areconut',
    'Cocoa',
    'Oil Palm',
    'Coffee',
    'Cardamom',
  ];
  return (
    <div className="m-3">
      <h1 className="font-bold">Package of Practices</h1>
      <div className="flex flex-wrap w-full justify-between">
        {practices &&
          practices.map((item) => {
            return (
              <div className="m-1">
                <img
                  className="rounded rounded-lg"
                  src="https://picsum.photos/seed/picsum/200/300"
                />
                <div className="font-normal">{item}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
