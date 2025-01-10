import { useIndex } from "../hooks/useIndex";

import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import styles from "./Index.module.css"; // Certifique-se de importar os estilos

export default function Index() {
  const { text, tweetList, maxLength, onTextChange, sendTweet } = useIndex()
  return (
    <div>
      <h1 className={styles.pageTitle}>TreinaTweet</h1>
      <div className={styles.tweetContainer}>
        <img
          src={"https://github.com/Victor-Lis.png"}
          alt={"Person"}
          className={styles.avatar}
        />
        <TextInput
          placeholder={"O que está acontecendo?"}
          // rows={3}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <div>
          {text.length} / {maxLength}
        </div>
        <button
          type="button"
          onClick={sendTweet}
          className={styles.postButton}
          disabled={text.length === 0}
        >
          Tweetar
        </button>
      </div>

      <ul className={styles.tweetList}>
        {tweetList.map((tweet, index) => (
          <li key={`${index}+${tweet}`} className={styles.tweetListItem}>
            <Tweet {...tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
}
