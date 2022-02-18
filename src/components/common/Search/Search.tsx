import React, { useState, useEffect } from 'react';
import SearchProps from './Search.prop';
import { filterSearch } from 'utils';
import { useDebounce } from 'hooks/useDebounce';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';

//data (데이터 값을 Array로 받음)
//updataResult(결과 값 함수와 array인자로 전송)
const Search = ({ data, updateResult }: SearchProps) => {
  const [searchAreaValue, setSearchAreaValue] = useState<string>('');
  const debounceValue = useDebounce<string>(searchAreaValue, 1000);

  useEffect(() => {
    updateResult(filterSearch({ inputValue: searchAreaValue, data }));
  }, [debounceValue]);

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
                <IconButton
                  sx={{ bgcolor: 'primary' }}
                  size="large"
                  aria-label="search"
                  onSubmit={() => {
                    console.log('클릭');
                  }}
                >
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
