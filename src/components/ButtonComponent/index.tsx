type ButtonComponentProps = {onSubmit: () => void; value: string; maxLength: number;};

export default function ButtonComponent({onSubmit, value, maxLength}: ButtonComponentProps) {
  return (
    <div>      
      <button type="button" onClick={onSubmit} disabled={!value.length}>Tweetar!</button>
      <div>
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
