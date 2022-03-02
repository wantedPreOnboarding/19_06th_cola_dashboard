import filterSearchProps from './filterSearch.type';

const filterSearch = ({ inputValue = '', datas }: filterSearchProps) => {
  const result: filterSearchProps['result'] = [];
  datas.map((data, index) => {
    if (data[1].includes(inputValue)) {
      result.push({ id: index, key:data[0]});
    }
  });
  return result;
};

export default filterSearch;
