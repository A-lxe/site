import Link from 'next/link';
import styles from './Header.module.css';
import Card from './Card';

export default function Header() {
  return (
    <div className={styles.container}>
      <Card>
        Alex Aubuchon
        <br />
        <Link href="/">index</Link>
        <br />
        <Link href="/">what's with the background?</Link>
      </Card>
    </div>
  );
}
