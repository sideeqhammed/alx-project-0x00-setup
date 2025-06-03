import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title= "Book Now" styles= "flex justify-center items-center bg-white px-3 w-auto mb-5 h-[30px] rounded-full"/>
      <Card />
      <Button title= "Book Now" styles= "flex justify-center items-center bg-white px-3 w-auto mb-5 h-[30px] rounded-lg"/>
      <Card />
      <Button title= "Book Now" styles= "flex justify-center items-center bg-white px-3 w-auto mb-5 h-[30px] rounded-md"/>
      <Card />
      <Button title= "Book Now" styles= "flex justify-center items-center bg-white px-3 w-auto mb-5 h-[40px] rounded-sm"/>
    </div>
  )
}
export default Landing

