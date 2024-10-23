import Header from "@/components/header/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header>저장</Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}