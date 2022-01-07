import React from 'react';

const List = (props) => {
    console.log(props)
    const {person} = props;
    return (
        <section className='list--section'>
            <div >
                <img className='list--img' src = {person.image}/>
            </div>
            <div className='list--info'>
                <h3>{person.name}</h3>
                <p>{person.age} years </p>
            </div>
        </section>
        
    );
};

export default List;