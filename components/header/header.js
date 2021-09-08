import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from 'pages/_app';
import Image from 'next/image';
import OBI from 'public/assets/obi_header.png';

console.log(OBI);
const Header = () => (
  // const { title } = useContext(GlobalContext);

  <header className="header">
    <div className="header__container wrapper">
      <section className="branding">
        <Link href="/">
          <a>
            <h1 className="branding__logo">Schemes Dashboard</h1>
          </a>
        </Link>

        <span className="branding__seperator" />

        <a
          className="branding__obi"
          rel="noopener noreferrer"
          href="https://openbudgetsindia.org/"
        >
          <Image
            src={OBI}
            alt="Open Budgets India"
            layout="intrinsic"
            width={177}
            height={24}
            placeholder="blur"
          />
        </a>
      </section>
      {/* {!searchPage && (
        <Link href="/search">
          <a className="header__search">
            Search <span className="screen-reader-text">Page</span>
          </a>
        </Link>
      )} */}
      {/* {desc && <section className="header__desc">{desc}</section>} */}
    </div>
  </header>
);
export default Header;
