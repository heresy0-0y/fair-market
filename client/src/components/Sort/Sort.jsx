import "./Sort.css";

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={handleChange}>
        <option className="option" value="most-recent">
          &nbsp; most recent&nbsp;
        </option>
        <option value="from-longest-ago">&nbsp; from longest ago &nbsp;</option>
        <option value="lonely-posts-first">
          &nbsp; lonely posts first ! &nbsp;
        </option>
        <option value="socially-engaged">&nbsp; socially engaged &nbsp;</option>
      </select>
    </form>
  );
};

export default Sort;
