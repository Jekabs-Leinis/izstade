﻿import styles from '../../styles/Home.module.css';

export default function BackToInfo() {
  return (
    <div className={styles.backToInfo}>
      <a href="/info/japan">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="black"
             className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </a>
    </div>
  )
}