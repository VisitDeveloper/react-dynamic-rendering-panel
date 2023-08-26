/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

interface SelectProps  extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: Array<string>
}

const Select  = (props:SelectProps) : JSX.Element=>{
  return (
    <Container>

        <select {...props}>
           {/* { <option >

            </option>} */}
        </select>
        
    </Container>
  )
}
export default Select;

const Container = styled.div(() =>`

`)

