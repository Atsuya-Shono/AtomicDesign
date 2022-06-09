import { memo } from "react";
import styled from "styled-components";

import { Input } from "../atoms/button/Input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
// import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
