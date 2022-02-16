import Link from 'next/link';
import Image from 'next/image';

export default function Card({ scheme }) {
  return (
    <li className="card">
      <Link href={`${scheme.link}`}>
        <a href={`${scheme.link}`} className="card__link">
          <h2 className="card__text">{scheme.title}</h2>

          <div className="card__image">
            <Image
              src={scheme.icon}
              alt=""
              placeholder="blur"
              quality={95}
              width={100}
              height={100}
            />
          </div>
        </a>
      </Link>
    </li>
  );
}
