export default function Category({ catergory }) {
  return (
    <div className="flex justify-evenly bg-gray-100 w-full p-3">
      {catergory &&
        catergory.map((item) => {
          return (
            <div className="text-center">
              <div>
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  className="rounded rounded-full"
                />
              </div>
              <div>{item}</div>
            </div>
          );
        })}
    </div>
  );
}
