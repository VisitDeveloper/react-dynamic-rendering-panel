
import Main from "page"
import { useState } from "react"
import  {Switch}  from "switch-custom-design"
// import * as Switch  from "switch-custom-design"
function App() {
  const [toggle ,setToggle] = useState<boolean>(false)
  return (
    <div>
       <Main/>

       <Switch title="check" isToggle={toggle} variant="androidStyle" onChangeCheckBox={() => setToggle(!toggle)}/>
    </div>
  )
}

export default App
