import { useEffect, useState } from 'react';
import './App.scss';
import ItemList from './components/ItemList'
import ComponentExample from './components/ComponentExample'

function App() {
  const [newItemName, setNewItemName] = useState('');
  const [items, setItems] = useState([
    { name: 'Learn React', checked: false },
    { name: 'Learn React2', checked: true },
    { name: 'Learn React3', checked: false },
  ]);


  useEffect(
    () => { console.log('useEffect'); },
    []
  );

  useEffect(
    () => { console.log('MUDOU A LISTA:', items) },
    [
      items,
      newItemName
    ]
  )


  const checkItem = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  }

  const addItem = () => {
    const newItems = [...items];
    newItems.push({ name: newItemName, checked: false });
    setItems(newItems);
    setNewItemName('');
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <ComponentExample />

      <input type="text" placeholder="Name new item"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      {
        items.map((item, index) => {
          return <ItemList key={`${item.name}_${index}`} name={item.name} checked={item.checked} onChange={() => checkItem(index)} />
        }
        )
      }
    </div>
  );
}

export default App;
