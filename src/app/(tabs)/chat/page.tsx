'use client';
import { useState, useEffect } from 'react';
import LeftBubble from '@/components/chat/left';
import RightBubble from '@/components/chat/right';
import Header from '@/components/header';
import { calculateAge, getWeeksSince } from '@/utils/local';

function splitResponseIntoBubbles(response: string) {
  // '**'로 분할하되, '**'도 결과에 포함시킵니다.
  const parts = response.split(/(\*\*)/).filter((part: string) => part !== '');
  const bubbles: string[] = [];
  let currentBubble = '';

  parts.forEach((part: string, index: number) => {
    if (part === '**') {
      if (currentBubble) {
        bubbles.push(currentBubble.trim());
        currentBubble = '';
      }
    } else {
      currentBubble += part;
      // 마지막 부분이거나 다음 부분이 '**'가 아닐 경우 버블 추가
      if (index === parts.length - 1 || parts[index + 1] !== '**') {
        bubbles.push(currentBubble.trim());
        currentBubble = '';
      }
    }
  });

  return bubbles;
}

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // localStorage에서 저장된 메시지 불러오기
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { type: 'right', content: input }];
    //@ts-ignore
    setMessages(newMessages);
    setInput('');

    console.log(messages);

    // localStorage에 메시지 저장
    localStorage.setItem('chatMessages', JSON.stringify(newMessages));

    try {
      const response = await fetch('http://147.46.62.42:58000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          age: calculateAge(localStorage.getItem('birth') || ''),
          pregnancy_week: getWeeksSince(
            localStorage.getItem('pregnancy') || ''
          ),
          input: input,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const responseBubbles = splitResponseIntoBubbles(data.response);

      const updatedMessages = [
        ...newMessages,
        ...responseBubbles.map((bubble) => ({
          type: 'left',
          content: bubble,
        })),
      ];
      //@ts-ignore
      setMessages(updatedMessages);

      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <Header title={'Dr. AI'} />
      <main className="overflow-scroll w-full h-full px-[40px] flex flex-col gap-[15px] pb-[300px] pt-[50px] scrollbar-hide">
        {messages.map((message, index) =>
          //@ts-ignore
          message.type === 'left' ? (
            //@ts-ignore
            <LeftBubble key={index} content={message.content} />
          ) : (
            //@ts-ignore
            <RightBubble key={index} content={message.content} />
          )
        )}
      </main>
      <section className="w-full h-[190px] -pt-[30px] px-[40px] border-[#DCDDE1CC] border-t-2 absolute bottom-[50px] flex flex-col gap-[12px] justify-center items-center bg-white">
        <div className="flex gap-[12px] items-center">
          <input
            type="text"
            placeholder="Message"
            className="w-[300px] h-[45px] rounded-2xl py-[12px] px-[22px] border-2 border-[#DCDDE1CC]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="size-[30px] bg-gray-200 rounded-full flex items-center justify-center"
          >
            →
          </button>
        </div>
        <p className="text-[#DCDDE1] text-[11px] w-[260px]">
          DISCLAIMER: ChatGPT may produce inaccurate information about people,
          places, or facts
        </p>
      </section>
    </>
  );
}
