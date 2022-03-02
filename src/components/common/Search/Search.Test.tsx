import React from 'react';
import { result } from 'utils/filterSearch/filterSearch.type';
import Search from './Search';

const SearchTest = () => {
  const updateSearch = (updateResult: result[]): void => {
    console.log(updateResult);
  };

  const data=[['source', '데이터 출처'],['outgoingFileName', '출고서 파일명'],['id', '엑셀 행 순번'],['movementType', '이동 상태'],['orderSheetType', '주문서 양식'],['orderId', '주문서 번호']]
  return (
    <Search
      datas={data}
      updateResult={updateSearch}
    />
  );
};
export default SearchTest;
