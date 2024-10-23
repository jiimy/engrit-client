import Header from "@/components/header/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header isBack>로그인</Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}