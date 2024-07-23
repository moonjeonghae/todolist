import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import { useCallback, useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '일정관리 앱 만들어 보기',
      checked: true
    },
    {
      id: 2,
      text: '포트폴리오 완성하기',
      checked: false
    },
    {
      id: 3,
      text: '자기소개서 작성하기',
      checked: false
    }
  ]);

  const nextid = useRef(4);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextid,
      text,
      checked: false
    };

    setTodos(todos.concat(todo));
    nextid.current += 1;
  }, [todos]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    );
  }, [todos]);

  return (
   <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
   </TodoTemplate>
  );
}

export default App;
