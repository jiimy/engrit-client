import Button from "@/components/button/Button";
import SupportList from "@/components/support/SupportList";
import Link from "next/link";

const Index = () => {
  const data = [
    {
      id: 0
    }
  ]

  return (
    <>
      {data?.length == 0 ?
        <></> :
        <>
          <Button full className="bg-black">
            <Link href="/inquiry" className="block w-full h-full">
              문의하기
            </Link>
          </Button>
          또는

          <SupportList />
        </>
      }
    </>
  );
};

export default Index;
