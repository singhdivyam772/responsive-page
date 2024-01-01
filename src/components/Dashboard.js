import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";
import { FaProductHunt } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { MdHelpOutline } from "react-icons/md";

const Dashboard = () => {
     const dashBoardData = [{
          icon: <AiOutlineDashboard />,
          name: 'Dashboard',
          arrow: <TbMathGreater />
     },{
          icon: <FaProductHunt />,
          name: 'Product',
          arrow: <TbMathGreater />
     },{
          icon: <RiCustomerServiceLine />,          
          name: 'Customers',
          arrow: <TbMathGreater />
     },{
          icon: <TbPigMoney />,
          name: 'Income',
          arrow: <TbMathGreater />
     },{
          icon: <FaDiagramSuccessor />,
          name: 'Promote',
          arrow:<TbMathGreater />
     },{
          icon: <MdHelpOutline />,
          name: 'Help',
          arrow: <TbMathGreater />
     }
]
return (
     <aside className='absolute top-0 left-0 bottom-0 right-0 
     w-[18vw] h-full flex flex-col bg-slate-900 text-white'>
          <div className="mt-[8%]">
               
               {dashBoardData.map((data, index) => (
                    <div key={index} className='flex flex-wrap mb-[5%] w-full h-[8vh]'>
                    <div className='flex justify-center gap-[2%] items-center w-full h-full'>
                    <p>{data.icon}</p>
                    <p className=' flex justify-between items-center w-[80%] h-full 
                                   cursor-pointer 
                    
                    '>
                         {data.name} {data.arrow}
                    </p>
                    </div>
                    
                    </div>
                    ))
               }
               

               {/* <div className=' flex flex-wrap w-full h-[5vh]  border-2 border-green-400'>
                    <p>Products</p>
               </div>

               <div className=' flex flex-wrap w-full h-[5vh]  border-2 border-green-400'>
                    <p>Customers</p>
               </div>

               <div className=' flex flex-wrap w-full h-[5vh]  border-2 border-green-400'>
                    <p>Incomes</p>
               </div>

               <div className=' flex flex-wrap w-full h-[5vh]  border-2 border-green-400'>
                    <p>Promotes</p>
               </div>

               <div className=' flex flex-wrap w-full h-[5vh]  border-2 border-green-400'>
                    <p>Help</p>
               </div> */}
          
          </div>
     </aside>    
     )
}

export default Dashboard