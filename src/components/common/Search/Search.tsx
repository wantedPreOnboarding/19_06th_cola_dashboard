import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SearchProps from './Search.prop';
import { filterSearch } from 'utils';

//data (데이터 값을 Array로 받음)
//updataResult(결과 값 함수와 array인자로 전송)
const Search = ({ data, updateResult }: SearchProps) => {
  const [searchAreaValue, setSearchAreaValue] = useState<string>();

  useEffect(() => {
    updateResult(filterSearch({ inputValue: searchAreaValue, data }));
  }, [searchAreaValue]);

  const searchAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchAreaValue(event.target.value);
  };
  return (
    <>
      <FormControl fullWidth>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <InputBase
            fullWidth
            type="search"
            id="SearchBar"
            aria-describedby="SearchBar"
            label="Search ..."
            sx={{ bgcolor: 'primary.xlight', borderRadius: '6px' }}
            onChange={searchAreaChange}
            InputProps={{
              endAdornment: (
                <IconButton sx={{ bgcolor: 'primary' }} size="large" aria-label="search">
                  <SearchIcon sx={{ color: 'primary' }} />
                </IconButton>
              ),
            }}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default Search;
