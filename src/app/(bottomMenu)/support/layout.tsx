import Header from "@/components/header/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header isBack>고객센터</Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}