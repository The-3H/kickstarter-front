// export const metadata: Metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

'use client';

import Header from '@/components/header';
import NavBar from '@/components/navbar';
import { usePathname, useRouter } from 'next/navigation';

const url = ['chat'];

export default function TabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();

  return (
    <>
      {children}
      {/* {url.includes(router) && <NavBar />} */}
      <NavBar />
    </>
  );
}
