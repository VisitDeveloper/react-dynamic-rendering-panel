import List , {ConfigListProps} from 'components/warpper-element/List/index';
import WrapperList , {ConfigWrapperListProps} from 'components/warpper-element/WrapperList/index';
import { CreateObjectLiterals } from 'tools/object-literals'
import { Fragment } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export enum Type_List_Component {
    List = 'List',
    WrapperList = "WrapperList"
}

interface ObjectTest {
    WrapperList : JSX.Element
    List: JSX.Element;
}

interface DynamicObjectLiteralsProps {
    type: Type_List_Component;
    configKey : ConfigListProps | ConfigWrapperListProps;
}


function DynamicObjectLiterals(props:DynamicObjectLiteralsProps) {
    const finalComponentItemRendering: ObjectTest = {
        List: <List {...props?.configKey as ConfigListProps}/>,
        WrapperList : <WrapperList {...props?.configKey as ConfigWrapperListProps}/>
    };

    const FinalObjectRendered : JSX.Element = CreateObjectLiterals(finalComponentItemRendering, props.type, Type_List_Component.WrapperList) 
    return (
        <Fragment>
            {FinalObjectRendered}
        </Fragment>
    )
}
export default DynamicObjectLiterals