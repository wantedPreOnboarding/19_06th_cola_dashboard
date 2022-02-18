import filterSearchProps from './filterSearch.type';

const filterSearch = ({ inputValue = '', data }: filterSearchProps) => {
  const result: filterSearchProps['result'] = [];
  data.map((value, index) => {
    if (value.includes(inputValue)) {
      result.push({ id: index, value });
    }
  });
  return result;
};

export default filterSearch;
