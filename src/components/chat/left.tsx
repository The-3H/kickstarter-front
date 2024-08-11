//@ts-ignore
export default function LeftBubble({ content }) {
  return (
    <div className="flex w-full justify-start">
      <div className="bubble bubble-left">{content}</div>
    </div>
  );
}
