import styles from "./TextInput.module.css";

type TextInputProps = { placeholder?: string; maxLength: number; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; value: string };

export default function TextInput({
  placeholder = "O que você está pensando?",
  maxLength,
  onChange,
  value,
}: TextInputProps) {
  return (
    <form className={styles.container}>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
