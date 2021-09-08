import Link from 'next/link';
import Image from 'next/image';

export default function Card({ scheme }) {
  return (
    <li className="card">
      <Link href={`${scheme.link}`}>
        <a className="card__link">
          <h2 className="card__text">{scheme.title}</h2>

          <div className="card__image">
            <Image src={scheme.icon} alt="" placeholder="blur" />
          </div>
        </a>
      </Link>
    </li>
  );
}
