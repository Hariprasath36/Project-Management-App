import React, { useState } from 'react'

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void

};

const ProjectHeader = ({activeTab, setActiveTab}:Props) => {
  const [isModelNewProjectOpen, setIsModelNewProjectOpen] = useState(false);

  return <div className='px-4 xl:px-6'>
    {/* MODEL NEW PROJECT */}
  <div className='px-4 pt-6 lg:pb-4 lg:pt-8'>
<Header />
</div>
  </div>;
};

export default ProjectHeader;