// import {useState} from 'react';

// export default function Lab9() {
//     const [color, setColor] = useState('black');
//     const [index, setIndex] = useState(0);

//     const changeColor = () => {
//         const colors = ['red', 'green', 'yellow'];
//         const newColor = colors[index];
//         setColor(newColor);
//         setIndex((prevIndex) => (prevIndex + 1) % colors.length);
//     }

//     return (
//         <div>
//             <h1>Change Paragraph Colors</h1>
//             <p style={{color:color, fontSize:'20px'}}>Click the button to change my color!</p>
//             <button onClick={changeColor}>Change</button>
//         </div>
//     )
// }

import {useState} from 'react';

export default function Lab9() {
    const [color, setColor] = useState('black');
    const [index, setIndex] = useState(0);

    function changeColor() {
        let colors = ['red', 'green', 'blue'];
        let newColor = colors[index];
        setColor(newColor);
        setIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }

    return (
        <div>
            <h1>Change Paragraph Colors</h1>
            <p style={{color:color, fontSize: '20px'}}>Click the below button and watch me change my color.</p>
            <button onClick={changeColor}>Change</button>
        </div>
    )
}