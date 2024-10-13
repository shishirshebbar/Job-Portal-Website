import React from 'react'
import { Table, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableBody } from './ui/table'
import { Badge } from './ui/badge'

function Appliedjobs() {
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
                    [1,2].map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell>10/10/2024</TableCell>
                            <TableCell>Backend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            
                            <TableCell className="text-right"><Badge>
                                Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    </div>
  )
}

export default Appliedjobs