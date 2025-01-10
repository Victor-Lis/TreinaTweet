import type { TweetType } from "../@types/Tweet";
import { useState } from "react";

export function useIndex() {
  const [text, setText] = useState("");
  const [tweetList, setTweetList] = useState<TweetType[]>([]);
  const maxLength = 125;

  function onTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e?.target?.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sendTweet() {
    setTweetList([
      {
        text,
        date: new Date().toISOString(),
        user: {
          name: "Victor Lis",
          username: "victorlis",
          picture: "https://github.com/Victor-Lis.png",
        },
      },
      ...tweetList,
    ]);
    setText(""); // Limpa o campo de texto após enviar o tweet
  }

  return { text, tweetList, maxLength, onTextChange, sendTweet };
}
