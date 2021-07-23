import React, { useState } from 'react';
//import RightNav from './RightNav';
import { SandwichButton } from './AppHeader';

function Sandwich() {

    const [open, setOpen] = useState(false);

    return <>
        <SandwichButton open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </SandwichButton>
        
    </>
}

export default Sandwich;