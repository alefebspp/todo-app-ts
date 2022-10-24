import { TimeIcon, CheckIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { CompletedTaskProps } from './CompletedTask';
const TodoTask = ({
  todo,
  onClickFunction,
  onClickParam
}: CompletedTaskProps) => {
  return (
    <div className="task-group">
      <div className="task-div">
        <TimeIcon />
        <h1 className="task">{todo.task}</h1>
      </div>
      <IconButton
        colorScheme="teal"
        aria-label="Search database"
        icon={<CheckIcon />}
        onClick={() => onClickFunction(onClickParam)}
      />
    </div>
  );
};

export default TodoTask;
