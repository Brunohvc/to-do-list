import './style.scss';

function ItemList({ name, checked, onChange }) {
  return (
    <div className="ItemList">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className='span-text'>
        {name}
      </span>
    </div>
  );
}

export default ItemList;
