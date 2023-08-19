import ToggleButton from "@/components/pure-components/ToggleButton";
import { DarkModeBtn, Input } from "components/_index";
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

      <ToggleButton
        isToggle={isToggle}
        onToggleChange={() => setIsToggle(!isToggle)}
        title="test"
      />
    </div>
  );
}
export default Main;
