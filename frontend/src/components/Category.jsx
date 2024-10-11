import React from 'react'
import { Carousel,CarouselContent,CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
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
  return (
    <div><Carousel className="w-full max-w-xl mx-auto my-15">
        <CarouselContent>
            {
                category.map((cat,index)=>(
            <CarouselItem className ="md:basis-1/3 lg-basis-1/3">
                <Button variant ="outline" className="rounded-full">{cat}</Button>
            </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
            </Carousel></div>
  )
}

export default Category