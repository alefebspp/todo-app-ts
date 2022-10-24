import '../../App.css';
import { Button, Input } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import useTodo from '../../hooks/useTodo';
const CreateTodoForm = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const { handleCreateTodo } = useTodo();
  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  return (
    <section className="todoInput">
      <form className="form">
        <Input
          variant="filled"
          w="20rem"
          size="md"
          type="text"
          id="inputTodo"
          name="inputTodo"
          value={todo}
          onChange={onChangeTodo}
          placeholder="Type your todo..."
        />
      </form>
      <Button
        onClick={() => handleCreateTodo(todo)}
        leftIcon={<CheckCircleIcon />}
        colorScheme="teal"
        variant="solid"
      >
        Save todo
      </Button>
    </section>
  );
};

export default CreateTodoForm;
