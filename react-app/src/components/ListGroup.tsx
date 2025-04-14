import { Fragment } from "react";
import { useState } from "react";

// {items: [], heading: string}
interface ListGroupProps {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void // onClick
} 

function ListGroup({ items, heading }: ListGroupProps) {
    
    // Hook function
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Event Handler
    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 ? <p>No Item Found!</p>: null}
            <ul className="list-group">
                {items.map((item, index) => 
                    <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item} 
                    onClick={() => {setSelectedIndex(index)}}>
                        {item}</li>
                )}
            </ul>
        </Fragment>
    );
}

export default ListGroup;