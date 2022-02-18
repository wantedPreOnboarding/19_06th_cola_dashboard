import React from 'react';
import { Header } from 'components/common';
import Search from './Search';

const SearchTest = () => {
  const updateSearch = (updateResult: string[]): void => {
    console.log(updateResult);
  };
  return <Search data={['a', 'ab', 'bbc']} updateResult={updateSearch} />;
};
export default SearchTest;
