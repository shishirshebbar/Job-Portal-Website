import React from 'react'
import { Carousel,CarouselContent,CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const category= [
    "Frontend Developer",
    "Backend Developer",
    "Devops Engineer",
    "Cloud Engineer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Test Engineer",
    "QA Engineer"
]


function Category() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchhandler  = (request)=>{
        dispatch(setsearchrequest(request))
        navigate("/browse")
      }
  return (
    <div><Carousel className="w-full max-w-xl mx-auto my-15">
        <CarouselContent>
            {
                category.map((categoryname,index)=>(
            <CarouselItem className ="md:basis-1/3 lg-basis-1/3">
                <Button 
                onClick ={()=>searchhandler(categoryname)}
                variant ="outline" className="rounded-full">{categoryname}</Button>
            </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
            </Carousel></div>
  )
}

export default Category