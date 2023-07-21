export default function Menu() {
  const menus = [
    { name: 'Home', link: 'home' },
    { name: 'Shop', link: 'shop' },
    { name: 'Practices', link: 'practices' },
    { name: 'community', link: 'community' },
    { name: 'Videos', link: 'videos' },
    { name: 'News', link: 'news' },
    { name: 'Blogs', link: 'blogs' },
    { name: 'Contact Us', link: 'contactus' },
  ];
  return (
    <div>
      {menus &&
        menus.map((item) => {
          return <div>{item.name}</div>;
        })}
    </div>
  );
}
