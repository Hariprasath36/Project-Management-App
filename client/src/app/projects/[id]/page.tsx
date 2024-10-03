"use client";
import React ,{useState}from 'react';
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from '../BoardView';
type Props = {
    params: { id: string };
};

const Project = ({params}: Props) => {
const { id } = params;
const [activeTab, setActiveTab] = React.useState("Board");
const [IsModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);


  return (<div>
    {/* MODEL NEW TASK */}
   <ProjectHeader activeTab ={activeTab} setActiveTab={setActiveTab} />
    { activeTab === "Board" && (
    <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
    )}
  </div>
  );
};

export default Project;