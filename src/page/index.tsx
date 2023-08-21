import { DarkModeBtn, Input , Switch, SwitchCustom} from "components/_index";
import { Moon , Sun1 } from "iconsax-react";
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
        isRtl={false}
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="horizental"
        className="gap-2"
        classNameLabel="text-2xl"
        icon={isToggle ? <Sun1 size="12" color="#000" className="mt-1 ml-1"/> : <Moon size="12" color="#000" className="mt-1 ml-1"/>}
        variant="simple"
       /> 

      <SwitchCustom
        isRtl={false}
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="horizental"
        className="gap-2"
        classNameLabel="text-2xl"
        icon={isToggle ? <Sun1 size="12" color="#fff" className="mt-1 ml-1"/> : <Moon size="12" color="#fff" className="mt-1 ml-1"/>}
        variant="muiStyle"
       /> 

      <SwitchCustom
        isRtl={false}
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="horizental"
        className="gap-2"
        classNameLabel="text-2xl"
        icon={isToggle ? <Sun1 size="12" color="#fff" className="mt-1 ml-1"/> : <Moon size="12" color="#fff" className="mt-1 ml-1"/>}
        variant="iosStyle"
       /> 
       
       <div className="text-2xl">

       </div>
    </div>
  );
}
export default Main;
