// import { useEffect, useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import EmptyBar from "./EmptyBar";
// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };


// const PagesToRead = () => {
//     const [readLs, setReadLs] = useState([]);

//     useEffect(() => {
//         const saveData = JSON.parse(localStorage.getItem('readList')) || [];
//         // console.log(saveData);
//         setReadLs(saveData)
//     }, [])
//     console.log(readLs);
//     return (
//         <div>
//             {
//                 readLs.length === 0 ? <EmptyBar></EmptyBar> : <BarChart
//                     width={1000}
//                     height={700}
//                     data={readLs}
//                     margin={{
//                         top: 20,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="bookName" />
//                     <YAxis />
//                     <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//                         {readLs.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//                         ))}
//                     </Bar>
//                 </BarChart>
//             }
//         </div>
//     );
// };

// export default PagesToRead;

import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import EmptyBar from "./EmptyBar";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const [readLs, setReadLs] = useState([]);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('readList')) || [];
        setReadLs(saveData);
    }, []);

    return (
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            {readLs.length === 0 ? <EmptyBar /> :
                <BarChart
                    width={window.innerWidth > 1000 ? 1000 : window.innerWidth * 0.9} 
                    height={400} 
                    data={readLs}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readLs.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            }
        </div>
    );
};

export default PagesToRead;
