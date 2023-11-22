import styles from '../../styles/styles.css'
import WordBank from '../../pages/wordBank'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div>
      <WordBank />
    </div>
  )
}
