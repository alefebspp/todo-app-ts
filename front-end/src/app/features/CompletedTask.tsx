import { CheckIcon, RepeatIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { Todo } from './types';

export type CompletedTaskProps = {
  todo: Todo;
  onClickFunction: (onClickParam: Todo) => void;
  onClickParam: Todo;
};

const CompletedTask = ({
  todo,
  onClickFunction,
  onClickParam
}: CompletedTaskProps) => {
  return (
    <div className="task-group">
      <div className="task-div-done">
        <CheckIcon color="white" />
        <h1 className="task-done">{todo.task}</h1>
      </div>
      <IconButton
        colorScheme="teal"
        aria-label="Search database"
        icon={<RepeatIcon />}
        onClick={() => onClickFunction(onClickParam)}
      />
    </div>
  );
};

export default CompletedTask;
