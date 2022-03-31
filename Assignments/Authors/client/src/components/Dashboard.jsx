import React from 'react';
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    // const onDeleteHandler = (_id,index) => {
    //     console.log(_id)
    //     console.log(index)
    //         axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
    //             .then(res =>{
    //                 console.log(res);
    //                 history.push("/")
    //             })
    //             .catch(err =>{
    //                 console.log(err)
    //                 setAuthors("")
    //             })
    // }

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/authors/"+_id)
    //         .then(res => {
    //             console.log(res);
    //             setAuthors(res.data.results)
    //         })
    //         .catch(err => console.log(err))
    // }, [_id])

//     const onDeleteHandler = (_id, index) => {
//     if (window.confirm(`are you sure you want to delete this author?`)) {
//         axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
//             .then(res => {
//                 history.push("/");
//                 console.log(res);
//                 const copyAuthors = [...authors];
//                 copyAuthors.splice(index, 1);
//                 setAuthors(copyAuthors);
//             })
//     }
// }

return (
    <tr>
        <td className='fs-4' style={{ color: "indigo" }}>{props.author.name}</td>
        <td>
            <Link to={`/authors/${props.author._id}/edit`} className="btn wide btn-warning mx-2">Edit</Link>
            <button onClick={()=>onDeleteHandler(props.author._id)} className='btn btn-danger wide'>Delete</button>
        </td>
    </tr>
);
};

export default Dashboard;