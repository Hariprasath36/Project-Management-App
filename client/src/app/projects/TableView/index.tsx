import { useAppSelector } from '@/app/redux';
import Header from '@/components/Header';
import { useGetTasksQuery } from '@/state/api';
import {DataGrid, GridColDef } from "@mui/x-data-grid";
import React from 'react'

type Props = {
    id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};
const columns: GridColDef[] =[
    {
        field: "title",
        headerName:"Title",
        width: 200,
    },
    
    {
        field: "description",
        headerName:"Description",
        width: 200,
    },

]



const TableView = ({ id, setIsModalNewTaskOpen }: Props) => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const {
      data: tasks,
      error,
      isLoading,
    } = useGetTasksQuery({ projectId: Number(id) });


    if (isLoading) return <div>Loading...</div>;
    if (error || !tasks) return <div>An error occurred while fetching tasks</div>;
  return ( <div className='h-[540px] w-full px-4 pb-8 xl:px-6'>
    <div className='pt-5'>
        <Header name='Table' isSmallText />
    </div>
    <DataGrid 
    rows={tasks || []}
    columns={columns}
    />
    </div>
  );
};

export default TableView;
