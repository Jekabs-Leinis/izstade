import styles from '../../styles/Home.module.css';

export default function LangPickerWidget({ onLanguageChange }) {
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    onLanguageChange(lang);
  }
  
  return (
    <div className={styles.langWidgetContainer}>
      <img src="/images/flag_lv.png"
           onClick={() => setLanguage('lv')}
           className={styles.langWidgetFlag}
           alt={"Flag of Latvia for language selection"}
      />
      <img src="/images/flag_uk.png"
           onClick={() => setLanguage('en')}
           className={styles.langWidgetFlag}
           alt={"Flag of United Kingdom for language selection"}
      />
      <img src="/images/flag_jp.png"
           onClick={() => setLanguage('jp')}
           className={styles.langWidgetFlag}
           alt={"Flag of Japan for language selection"}
      />
    </div>
  )
}