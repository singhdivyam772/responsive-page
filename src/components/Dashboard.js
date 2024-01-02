import React, { useState } from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";
import { FaProductHunt } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { MdHelpOutline } from "react-icons/md";

const dashBoardData = [{
     icon: <AiOutlineDashboard />,
     name: 'Dashboard',
     arrow: <TbMathGreater />,
     submenu:[ {
          id: 1,
          name1: 'dashboard1',
          name2: 'dashboard2',
          name3: 'dashboard3',
          name4: 'dashboard4',
     }]
},{
     icon: <FaProductHunt />,
     name: 'Product',
     arrow: <TbMathGreater />,
     submenu: [{
          id: 2,
          name1: 'Product1',
          name2: 'Product2',
          name3: 'Product3',
          name4: 'Product4',
     }]
},{
     icon: <RiCustomerServiceLine />,          
     name: 'Customers',
     arrow: <TbMathGreater />,
     submenu: [{
          id: 3,
          name1: 'Customers1',
          name2: 'Customers2',
          name3: 'Customers3',
          name4: 'Customers4',
     }]
},{
     icon: <TbPigMoney />,
     name: 'Income',
     arrow: <TbMathGreater />,
     submenu: [{
          id: 4,
          name1: 'Income1',
          name2: 'Income2',
          name3: 'Income3',
          name4: 'Income4',
     }]
},{
     icon: <FaDiagramSuccessor />,
     name: 'Promote',
     arrow:<TbMathGreater />,
     submenu:[ {
          id: 5,
          name1: 'promote1',
          name2: 'promote2',
          name3: 'promote3',
          name4: 'promote4',
     }]
},{
     icon: <MdHelpOutline />,
     name: 'Help',
     arrow: <TbMathGreater />,
     submenu: [{
          id: 6,
          name1: 'help1',
          name2: 'help2',
          name3: 'help3',
          name4: 'help4',
     }]
}
]

const Dashboard = () => {
     const [showSubMenu, setShowMenuBar] = useState(false);
     const showSubMenuHandler = (index)=>{
          setShowMenuBar(!showSubMenu);
          console.log(index)
     }
     
return (
     <aside className='absolute top-0 left-0 bottom-0 right-0 
     w-[18vw] h-[auto] flex flex-col bg-red-500 overflow-y-auto text-white'>
     <div className="mt-[8%]">
          
          {dashBoardData.map((data, index) => (
               <div key={index} className='flex flex-wrap w-full h-[auto] mb-[0.5%]'>

                    <div className=' w-full h-full flex flex-col justify-center items-center '>
                         <div onClick={()=>showSubMenuHandler(index)} 
                              className=' w-full h-[auto]  flex justify-center items-center bg-blue-400 
                              hover:bg-blue-600 border-[1px] border-slate-200 gap-[3%] cursor-pointer '>
                              <p className='text-[black] font-bold'>{data.icon}</p>
                              <div className=' flex justify-between items-center w-[78%] text-[black] font-bold '>
                                   <p className=' text-[black] font-bold'>{data.name} </p>
                                   <p className=' text-[black] font-bold'>{data.arrow}</p>
                                   
                              </div>
                         </div>
                         
                         {showSubMenu && (
                              <div className='w-full h-[25%]'>
                              {data?.submenu?.map((subData, subIndex) => (
                                   <div key={subIndex} className='w-full h-[25%]'>
                                   {/* You can use a single div with dynamic content */}
                                   <p className='flex flex-col justify-center items-center w-full h-[25%] hover:bg-slate-800 hover:scale-100 transition-all border-[1px] border-slate-200 gap-[3%]'>
                                        {subData?.name1}
                                   </p>
                                   <p className='flex flex-col justify-center items-center w-full h-[25%] hover:bg-slate-800 hover:scale-100 transition-all border-[1px] border-slate-200 gap-[3%]'>
                                        {subData?.name2}
                                   </p>
                                   <p className='flex flex-col justify-center items-center w-full h-[25%] hover:bg-slate-800 hover:scale-100 transition-all border-[1px] border-slate-200 gap-[3%]'>
                                        {subData?.name3}
                                   </p>
                                   <p className='flex flex-col justify-center items-center w-full h-[25%] hover:bg-slate-800 hover:scale-100 transition-all border-[1px] border-slate-200 gap-[3%]'>
                                        {subData?.name4}
                                   </p>
                                   </div>
                              ))}
                              </div>
                              )} 

                    
                    </div>
               
               </div>
               ))
          }          
     </div>
     </aside>    
     )
}

export default Dashboard