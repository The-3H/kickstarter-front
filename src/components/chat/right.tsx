//@ts-ignore
export default function RightBubble({ content }) {
  return (
    <div className="flex w-full justify-end">
      <div className="bubble bubble-right min-h-fit">{content}</div>
    </div>
  );
}
