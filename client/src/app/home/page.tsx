"use client";
import { useGetProjectsQuery, useGetTasksQuery } from '@/state/api';
import React from 'react';
import { useAppSelector } from '../redux';


const HomePage = () => {

    const { data: tasks,isLoading:tasksLoading, isError: tasksError } = useGetTasksQuery({projectId: parseInt("1") });
    const { data: projects, isLoading: isProjectsLoading } =
    useGetProjectsQuery();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    if (tasksLoading ||isProjectsLoading) return <div>Loading...</div>;
    if (tasksError || !tasks || !projects) return <div>An error occurred while fetching tasks</div>;

    const priorityCount = tasks.reduce(
        (acc: Record<string, number>, task: Task) => {
          const { priority } = task;
          acc[priority as Priority] = (acc[priority as Priority] || 0) + 1;
          return acc;
        },
        {},
      );
    
  return (
    <div>HomePage</div>
  )
}
export default HomePage; 