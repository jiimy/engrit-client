import Header from "@/components/header/Header";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header isBack>콘텐츠 수정하기</Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}
