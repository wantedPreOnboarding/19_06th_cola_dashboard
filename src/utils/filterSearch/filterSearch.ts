import filterSearchProps from './filterSearch.type';

const filterSearch = ({ inputValue = '', datas }: filterSearchProps) => {
  const result: filterSearchProps['result'] = [];
  datas.map(([key,value], index) => {
    if (value.includes(inputValue)) {
      result.push({ id: index, key:key});
    }
  });
  return result;
};

export default filterSearch;
