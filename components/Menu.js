import Link from 'next/link';
export default function Menu() {
  const menus = [
    { name: 'Home', link: '' },
    { name: 'Shop', link: 'shop' },
    { name: 'Practices', link: 'practices' },
    { name: 'community', link: 'community' },
    { name: 'Videos', link: 'videos' },
    { name: 'News', link: 'news' },
    { name: 'Blogs', link: 'blogs' },
    { name: 'Contact Us', link: 'contactus' },
  ];
  return (
    <div className="flex bg-gray-200">
      {menus &&
        menus.map((item) => {
          return (
            <div className="p-4 cursor-pointer justify-evenly hover:bg-pink-100 font-medium">
              <Link href={`/${item.link}`}>{item.name}</Link>
            </div>
          );
        })}
    </div>
  );
}
