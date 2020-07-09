import React, {useEffect, useState, PureComponent} from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const Map = ({
    points
}) => {
    const [pins, setPins] = useState();

    useEffect(() => {
        const a = [{  "location":[3, 3]}, {  "location":[2, 2]}, points];  // didn't maneged to add and re-render
        setPins(a);
    }, [points])
    
    return (
        <ReactBingmaps 
            bingmapKey = {"AsjTp6LiDaCs-o6z-se_fpLJW8KlQ_bOULAVEwzO4jVYffz-18GBxC-2lYdpq1cX"} 
            center = {[1, 1]}
            pushPins ={pins}
        // TODO: and points to polylines / polygon (i dont know yet how does it called) props and fill with any color.
        > 
        </ReactBingmaps>
    );
};

export default Map;