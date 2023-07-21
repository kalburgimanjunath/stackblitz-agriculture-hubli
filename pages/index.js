import Link from 'next/link';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Menu from '../components/Menu';
import styles from '../styles/Home.module.css';

export default function Home() {
  const catergory = ['Fruits', 'Vegitables'];
  const menuitems = [
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
      <Category catergory={catergory} />
      <Banner />
      {/* <h1>Crop Guide</h1> */}
      <div className="bg-gray-100 flex flex-wrap">
        {menuitems &&
          menuitems.map((item) => {
            return (
              <div className="p-20 bg-pink-50 hover:bg-pink-100 cursor-pointer">
                <Link href={`/${item.link}`}>{item.name}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
