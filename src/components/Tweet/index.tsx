import type { TweetType } from "../../@types/Tweet";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import styles from "./Tweet.module.css";

export default function Tweet({ date, text, user }: TweetType) {
  const publishedToNew = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    includeSeconds: true,
    // addSuffix: true,
  });
  return (
    <div className={styles.tweetContainer}>
      <img
        className={styles.avatar}
        alt="Perfil"
        src={"https://github.com/Victor-Lis.png"}
      />
      <header className={styles.user}>
        <span className={styles.userName}>{user.name}</span>
        <span className={styles.userUserName}>@{user.username}</span>
        <span className={styles.date}>- Há {publishedToNew}</span>
      </header>
      <main className={styles.tweetText}>{text}</main>
    </div>
  );
}
