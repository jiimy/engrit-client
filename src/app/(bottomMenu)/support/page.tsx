import Button from "@/components/button/Button";
import SupportList from "@/components/support/SupportList";

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
            문의하기
          </Button>
          또는 
          
          <SupportList />
        </>
      }
    </>
  );
};

export default Index;
