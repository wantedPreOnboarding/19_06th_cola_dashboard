import React from 'react';
import { result } from 'utils/filterSearch/filterSearch.type';
import Search from './Search';

const SearchTest = () => {
  const updateSearch = (updateResult: result[]): void => {
    console.log(updateResult);
  };
  return (
    <Search
      data={[
        '데이터 출처',
        '출고서 파일명',
        '이동 상태',
        '주문서 양식',
        '주문번호',
        '주문명',
        '물건상품코드',
        '물건상품ID',
      ]}
      updateResult={updateSearch}
    />
  );
};
export default SearchTest;
