import { useAppSelector } from '@/app/redux';
import { useGetTasksQuery } from '@/state/api';
import { DisplayOption, ViewMode} from "gantt-task-react"
import React, { useMemo, useState } from 'react'

type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

type TaskTypeItems = "tasks" | "milestone" | "project";

const Timeline = ({id,setIsModalNewTaskOpen}: Props) => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const { data: tasks, isLoading, error } = useGetTasksQuery({projectId: Number(id)});

    const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
        viewMode: ViewMode.Month,
        locale:"en-US"
        
    })

    const ganttTasks = useMemo(() => {

        return(
            tasks?.map((task) => ({
                start:new Date(task.startDate as string),
                end: new Date(task.dueDate as string),
                name: task.title,
                id: `Task-${task.id}`,
                type: "task" as "TaskType",
                progress: task.points? (task.points /10) * 100 :0,
                isDisabled: false,

            })) || []
        );
    }, [tasks]);

    const handleViewModeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDisplayOptions((prev) =>({
           ...prev,
           viewMode: event.target.value as ViewMode, 
        }));
    };

    if (isLoading) return <div> Loading...</div>;
     if (error) return <div>An error occurred while fetching tasks</div>;

  return <div className='px-4 xl:px-6'>
    <div className='flex flex-wrap items-center justify-between gap-2 py-2'>
        <h1 className='me-2 text-lg font-bold dark:text-white'>
            Project Tasks Timeline
        </h1>
    </div>

  </div>
};

export default Timeline;