import Header from "@/components/header/Header";

export const generateMetadata = () => {
  return {
    title: "Subpage Title", // 페이지마다 다른 타이틀 설정
  };
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header title='로그인' type="board" />
      <div className="content">
        {children}
      </div>
    </>
  )
}