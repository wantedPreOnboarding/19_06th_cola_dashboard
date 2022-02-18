import React, { useState, useEffect } from 'react';
import SearchProps from './Search.prop';
import { filterSearch } from 'utils';
import { useDebounce } from 'hooks/useDebounce';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';

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

  return (
    <FormControl fullWidth>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: '3px' }}>
        <InputBase
          fullWidth
          type="search"
          id="SearchBar"
          aria-describedby="SearchBar"
          label="Search ..."
          size="medium"
          sx={{ bgcolor: 'primary.xlight', borderRadius: '6px', hegiht: '40px' }}
          onChange={searchAreaChange}
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{ bgcolor: 'primary' }}
                size="medium"
                aria-label="search"
                onSubmit={() => {
                  submitResult();
                }}
              >
                <SearchIcon sx={{ color: 'primary' }} />
              </IconButton>
            ),
          }}
        />
      </Box>
    </FormControl>
  );
};

export default Search;
