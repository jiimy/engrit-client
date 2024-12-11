'use client';
import { editInquiry } from '@/api/inquiries';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';

const Bottom = () => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const { menuState, text } = useLayoutContext();

  const id = Number(pathname?.split('/')[3]);

  const inquiryEditMutation = useMutation({
    mutationFn: (text: string) => editInquiry(text, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
      router.back();
    }
  })

  const handleClick = () => {
    inquiryEditMutation.mutate(text);
  };

  return (
    <>
      <BottomMenu>
        <button onClick={handleClick} disabled={menuState}>수정완료</button>
      </BottomMenu>
    </>
  );
};

export default Bottom;