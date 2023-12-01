import React from 'react'
import styles from '../../styles/styles.css'
import WordBank from '../../pages/wordBank'

export default function Home() {
  return (
    <html lang="en">
      <body>
        <WordBank />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  )
}
