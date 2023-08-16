import { DarkModeBtn, Input } from "components/_index"


function Main() {
  return (
    <div className="dark:bg-[Green800]">
      <DarkModeBtn/>
      
       <Input 
          // outerClassName="border-[1px] border-solid border-[#000] dark:border-[#fff] "
          title="test" 
          
          labelLayoutStatus="horizental"
          className="border-[1px] border-solid border-[#000] dark:border-[#fff] rounded-xl h-10"
       />

    </div>
  )
}
export default Main