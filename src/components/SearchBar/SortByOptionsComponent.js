
export const SortByOptionsComponent = ({ sortByOptions , classNameGet, onClickGet }) => {
    return (
      <ul>

        {Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li onClick={() => onClickGet(sortByOptionValue)} className={classNameGet(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        })}
      </ul>
    );
  };