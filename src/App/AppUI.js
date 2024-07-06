
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completed,
    total,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    searchedTodos,
}){
    return (
        <>
            <TodoCounter completed={completed} total={total}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {searchedTodos.map(todo =>(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };