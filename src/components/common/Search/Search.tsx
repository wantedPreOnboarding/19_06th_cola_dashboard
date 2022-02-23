import React, { useState, useEffect } from 'react';
import SearchProps from './Search.type';
import { filterSearch } from 'utils';
import { useDebounce } from 'hooks/useDebounce';
import { Box, IconButton, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as M from './Search.style';

const Search = ({ data, updateResult }: SearchProps) => {
  const [searchAreaValue, setSearchAreaValue] = useState<string>('');
  const debounceValue = useDebounce<string>(searchAreaValue, 1000);

  const submitResult = () => {
    updateResult(filterSearch({ inputValue: searchAreaValue, data }));
  };

  useEffect(() => {
    submitResult();
  }, [debounceValue]);

  const searchAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchAreaValue(event.target.value);
  };

  const SubmitHandler = (event: any) => {
    event.preventDefault();
    submitResult();
  };

  return (
    <M.FormWrapper component="form" onSubmit={SubmitHandler}>
      <M.SearchBar autoFocus onChange={searchAreaChange}></M.SearchBar>
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color: '#1157C9' }} />
      </IconButton>
    </M.FormWrapper>
  );
};

export default Search;
