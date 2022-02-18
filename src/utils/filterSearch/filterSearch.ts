import filterSearchProps from './filterSearch.type';

const filterSearch = ({ inputValue = '', data }: filterSearchProps) => {
  const result: filterSearchProps['data'] = [];
  data.map(value => {
    if (value.includes(inputValue)) {
      result.push(value);
    }
  });
  return result;
};

export default filterSearch;
