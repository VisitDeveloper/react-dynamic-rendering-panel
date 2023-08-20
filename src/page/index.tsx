import { DarkModeBtn, Input , Switch, SwitchCustom} from "components/_index";
import { useState } from "react";

function Main() {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div className="dark:bg-[Green800]">
      <DarkModeBtn />

      <Input
        // outerClassName="border-[1px] border-solid border-[#000] dark:border-[#fff] "
        title="test"
        labelLayoutStatus="vertical"
        className="border-[1px] border-solid border-[#000] dark:border-[#fff] rounded-xl h-10"
      />

      <Switch
        isToggle={isToggle}
        onToggleChange={() => setIsToggle(!isToggle)}
        title="test"
      />

      <SwitchCustom
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="horizental"
        classNameLabel="text-2xl"
        className="gap-2"
       />
       
       <div className="text-2xl">

       </div>
    </div>
  );
}
export default Main;
