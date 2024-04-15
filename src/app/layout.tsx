import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import store from '@/redux/store'
import { Providers } from '@/redux/provider'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Academy Manager",
  description: 'Một ứng dụng quản lý trường cấp 3 THPT Nghi Xuân với tính năng chatbox AI tích hợp. Ứng dụng giúp quản lý thông tin sinh viên, lịch học, điểm số và cung cấp dịch vụ tư vấn trực tuyến thông qua chatbox AI. Chatbox AI hỗ trợ sinh viên trong việc đặt câu hỏi, nhận thông tin về khóa học, chương trình học, và cung cấp hỗ trợ tư vấn trong quá trình học tập.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        
        </body>
    </html>
  )
}
