import { DarkModeBtn, Input ,  SwitchCustom} from "components/_index";
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

      <SwitchCustom
        isRtl={false}
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="horizental"
        className="gap-2"
        classNameLabel="text-2xl"
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
        icon={isToggle ? <Sun1 size="18" color="#fff" className="mt-[6px] ml-[7px]"/> : <Moon size="18" color="#fff" className="mt-[6px] ml-[7px]"/>}
        variant="muiStyle"
       /> 

      <SwitchCustom
        isRtl={false}
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="vertical"
        className="gap-2"
        classNameLabel="text-2xl"
        variant="iosStyle"
       /> 

      <SwitchCustom
        isRtl={false}
        isToggle={isToggle} 
        onChangeCheckBox={() => setIsToggle(!isToggle)} 
        title="testtt" 
        labelStatus="vertical"
        className="gap-2"
        classNameLabel="text-2xl"
        variant="androidStyle"
        leftIcon={<Sun1 size={12} color="#fff"/>}
        rightIcon={<Moon size={12}/>}
       /> 
       
       <div className="text-2xl m-2">

       </div>
    </div>
  );
}
export default Main;
