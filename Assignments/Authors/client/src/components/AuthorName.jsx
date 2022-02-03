import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorName = (props) => {
    const { _id } = useParams();
    const [form, setForm] = useState({
        author:""
    });

    const onDeleteHandler = (_id,index) => {
        if(window.confirm(`are you sure you want to delete product ${_id}?`)){
            axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
                .then(res =>{
                    console.log(res);
                    const copyAuthor = [...form];
                    copyAuthor.splice(index,1);
                    setForm(copyAuthor);
                })
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+_id)
            .then(res=>{
                console.log(res);
                setForm(res.data.form)
            })
            .catch(err=>console.log(err))
    },[_id])

    return (
        <div className="d-flex justify-content-around mx-5">
            <p>{props.author.author}</p>
            <div className="d-flex">
                <Link className="btn btn-lg btn-warning mx-3" to={`/authors/${props.author._id}/edit`}>Edit</Link> <button onClick={()=> onDeleteHandler(form._id,form.author)} className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default AuthorName;