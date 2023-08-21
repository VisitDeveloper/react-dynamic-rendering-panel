import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SwitchCustom from "../SwitchCustom";
import { Moon, Sun1 } from "iconsax-react";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;



  return (
    <div>
      
      <SwitchCustom
        isRtl={false}
        isToggle={toggleSwitch}
        onChangeCheckBox={() => {
          if (toggleSwitch) {
            setToggleSwitch(false);
            setTheme("light");
          } else if (!toggleSwitch) {
            setToggleSwitch(true);
            setTheme("dark");
          }
        }}
        classNameCircle={`${currentTheme === 'dark' ? '!bg-[#212121]' :'!bg-[#fff]'}`}
        classNameInput={`${currentTheme === 'dark' ? '!bg-[#fff]' :'!bg-[#ebedf0]'}`}
        icon={
          toggleSwitch ? (
            <Sun1 size="14" color={`${currentTheme === 'dark' ? '#fff' :'yellow'}`} className="mt-[3px] ml-[3px]" />
          ) : (
            <Moon size="14" color="#000" className="mt-[3px] ml-[3px]" />
          )
        }
      />
    </div>
  );
};
export default DarkModeBtn;
