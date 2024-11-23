'use client';

// import { Metadata } from 'next';
import React from 'react';
import GridInvitation from '@/components/create/invitation/GridInvitation';
import TextArea from '@/components/create/invitation/TextArea';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import styled from 'styled-components';

function CreateInvitationPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/create/');
  };

  const handleClickNext = () => {
    router.push('');
  };

  return (
    <div>
      <Header headerTitle={'초대장 작성'} onClick={handleClick} />
      <InvitationWrap>
        <h1 style={{ fontSize: '19px', fontWeight: 'bold', lineHeight: '140%', marginBottom: '24px' }}>
          초대장을 작성해주세요
        </h1>
        <GridInvitation />
        <TextArea />
      </InvitationWrap>
      <Button buttonContent={'다음으로'} onClick={handleClickNext} />
    </div>
  );
}

export default CreateInvitationPage;

const InvitationWrap = styled.div`
  padding: 16px 24px;
`;

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: `초대장 작성`,
//     description: `초대장을 작성해주세요`,
//     openGraph: {
//       title: `초대장 작성`,
//       description: `초대장을 작성해주세요`,
//       type: 'article',
//       images: [
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/hunmok-fe31e.appspot.com/o/preview%2Fdefault-preview.webp?alt=media&token=20632868-8263-4a80-a8dc-03f60d37942a',
//           width: 1700,
//           height: 1000,
//         },
//       ],
//     },
//   };
// }
