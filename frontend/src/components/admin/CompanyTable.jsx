import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import logo from "../../assets/logo.jpg"
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
function CompanyTable() {
  return (
    <div>
        <Table>
            <TableCaption>Your registered comapnies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Comapny Logo
                        </TableHead>
                        <TableHead>
                            Name
                        </TableHead>
                        <TableHead>
                            Date
                        </TableHead>
                        <TableHead className="text-right">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src={logo}/>
                        </Avatar>
                    </TableCell>
                    <TableCell>
                        Company Name
                    </TableCell>
                    <TableCell>
                        20/10/2024
                    </TableCell>
                    <TableCell className="text-right cursor-pointer">
                        <Popover>
                            <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                    <Edit2 className='w-4'/>
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>

            
        </Table>

    </div>
  )
}

export default CompanyTable