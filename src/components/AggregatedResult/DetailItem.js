import { compact, get, isEmpty, map } from '../../utils/lodash';
import React, { PropTypes } from 'react';
import moment from 'moment';

const isValidArray = (value) => (value && Array.isArray(value) && value.length);
const isValidChildren = (value) => {
  if (typeof value === 'undefined' || value === null || isEmpty(value)) return false;

  if (typeof value.type === 'function' &&
      typeof get(value, ['props', 'value']) === 'undefined') return false;

  return true;
};

const Link = ({ value }) => <a href={value}>{value}</a>;
Link.propTypes = { value: PropTypes.string.isRequired };

const ListItem = ({ value }) => (value ? <li>{value}</li> : null);
ListItem.propTypes = { value: PropTypes.string };

const UnorderedList = ({ value }) => {
  if (!isValidArray(value)) return null;

  const items = compact(map(value, (item, i) => !isEmpty(value) && (
    <ListItem key={i} value={item} />
  )));
  if (isEmpty(items)) return null;
  return <ul>{items}</ul>;
};
UnorderedList.propTypes = { value: PropTypes.array };

const Row = ({ label, children }) => {
  if (!isValidChildren(children)) return null;

  return (
    <tr>
      <td>{label}</td>
      <td>{children}</td>
    </tr>
  );
};
Row.propTypes = { label: PropTypes.string.isRequired, children: PropTypes.any };

const MonthlyAmountsList = ({ value }) => {

  const items = compact(map(value, (v, k) => {
    return(
    <li key={k}>
      {moment(k).format('MMM YYYY')}  -  {v.toLocaleString()}
    </li>
    );
  }));
  if (isEmpty(items)) return null;

  return <ul className="explorer__result-monthly_amounts">{items}</ul>;
};
MonthlyAmountsList.propTypes = { value: PropTypes.object };

export {
  Link,
  ListItem,
  Row,
  UnorderedList,
  MonthlyAmountsList
};