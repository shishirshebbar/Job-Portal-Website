import React from 'react'
import { Table, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableBody } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

function Appliedjobs() {
    const {allappliedjobs}= useSelector(store=>store.job);
  return (
    <div>
        <Table>
            <TableCaption>
                List of Applied Jobs
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        Applied Date
                    </TableHead>
                    <TableHead>
                        Role
                    </TableHead>
                    <TableHead>
                        Company
                    </TableHead>
                    <TableHead className="text-right">
                        Application Status
                    </TableHead>
                    
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allappliedjobs.length<=0?<span>You havent applied to any job</span>:allappliedjobs.map((appliedjob)=>(
                        <TableRow key={appliedjob._id}>
                            <TableCell>
                        {appliedjob?.createdAt && (() => {
                            const date = appliedjob.createdAt.split("T")[0];
                            const [year, month, day] = date.split("-");
                            return `${day}-${month}-${year}`;
                        })()}
                    </TableCell>

                            <TableCell>{appliedjob.job?.title}</TableCell>
                            <TableCell>{appliedjob.job?.company?.name}</TableCell>
                            
                            <TableCell className="text-right">
                                <Badge className={`${appliedjob?.status === "rejected" ? 'bg-red-500' : 
                                    appliedjob.status === 'pending' ? 'bg-gray-500' : 'bg-green-500'}`}>
                                    {appliedjob.status.toUpperCase()}</Badge></TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    </div>
  )
}

export default Appliedjobs