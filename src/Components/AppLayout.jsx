import { Navbar } from '../Components/Navbar/Navbar';

const AppLayout=(props)=>{
    return(
        <div>
            <Navbar/>
            <div className='Home'>
                {props.children}
            </div>
        </div>
        
    )
}

export default AppLayout;