import { useGetTasksQuery, useUpdateTaskStatusMutation } from '@/state/api';
import React from 'react'
import  { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
type BoardProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};
const taskStatus = ["To Do", "Work In Progress","Under Review","Completed"];

const BoardView = ({id, setIsModalNewTaskOpen}: BoardProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({projectId: Number(id)});
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: number, toStatus:string) => {
    updateTaskStatus({taskId,status:toStatus});
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching data</div>;

  return <DndProvider backend={HTML5Backend}>
    
  </DndProvider>;

  return <div>BoardView</div>;
};

export default BoardView;