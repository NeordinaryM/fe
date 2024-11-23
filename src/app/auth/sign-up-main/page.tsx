'use client';
import Header from '@/components/common/Header';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/constants/schema';
// 회원가입
const SignUp = () => {

  const [isId, setIsId] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCheck = async (data: any) => {
    console.log(data.nickname);
    console.log('요청');
    await fetch('http://dev.inyro.site/api/v1/admins/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data.nickname,
    })
      .then(() => setIsId(false))
      .catch(() => setIsId(true));
  };

  return (
    <Container>
      <Header headerTitle="회원가입"></Header>
      <TitleBox>
        <h4>닉네임을 작성해주세요</h4>
        <SubTitle>한번 정한 이름은 수정할 수 없어요</SubTitle>
      </TitleBox>
      <ContentBox>
        <LabelPTag>닉네임을 설정해주세요</LabelPTag>
        <form onSubmit={handleSubmit(onCheck)}>
          <div>
            <Input placeholder={`닉네임을 입력해주세요!`} type={'nickname'} {...register('nickname')} />
            <CheackButton>중복확인</CheackButton>
          </div>
        </form>
        { isId ? (<AlertPTag $State={true}>사용가능한 닉네임입니다.</AlertPTag>) : (
          <AlertPTag $State={false}>닉네임을 다시 입력해주세요.</AlertPTag>
        )}
      </ContentBox>
      <Button buttonContent={`가입하기`} ></Button>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  h4 {
    font-feature-settings: 'liga' off, 'clig' off;
    /* Title/Bold-lg */
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 26.6px */
    letter-spacing: -0.23px;
  }
`;
const SubTitle = styled.p`
  color: var(--GreyScale-Grey-400, #bdbdbd);
  /* Onboarding/SubTitle-Regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    width: 100%;
    display: flex;
    gap: 8px;
  }
`;
const Input = styled.input`
  width: 75%;
  height: 40px;
  box-sizing: border-box;
  padding: 10px 16px;
  border-radius: var(--sds-size-radius-200);
  border: 1px solid lightgray;
  border-radius: 10px;
`;
const CheackButton = styled.button`
  width: 25%;
  height: 40px;
  color: var(--M3-sys-light-on-primary, var(--Schemes-On-Primary, #fff));
  text-align: center;
  background-color: #222f40;
  border-radius: 10px;
  /* Text/Semibold-md */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const LabelPTag = styled.p`
  color: #424242;

  /* Text/Regular-lg */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AlertPTag = styled.p<{ $State: boolean }>`
  color: ${(props) => (props.$State ? '#788CA7' : '#d9621f')};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.1px;
`;