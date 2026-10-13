import Link from 'next/link';
import LanguageButton from '@/components/input/LanguageButton';
import ThemeButton from '@/components/input/ThemeButton';
import SettingsButton from '@/components/input/SettingsButton';
import wordmark from '@/assets/tera-logo.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="https://tera.coop.ar" target="_blank" className={styles.title}>
          <img src={wordmark.src} height={26} alt="Tera" style={{ width: 'auto' }} />
        </Link>
      </div>
      <div className={styles.buttons}>
        <ThemeButton />
        <LanguageButton />
        <SettingsButton />
      </div>
    </header>
  );
}

export default Header;
