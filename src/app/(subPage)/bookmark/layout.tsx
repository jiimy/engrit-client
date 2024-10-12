import Header from "@/components/header/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header title='저장' type="board" />
      <div className="content">
        {children}
      </div>
    </>
  )
}