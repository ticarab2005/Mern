// const onDeleteHandler = (_id,index) => {
//         console.log(_id)
//         console.log(index)
//             axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
//                 .then(res =>{
//                     console.log(res);
//                     history.push("/")
//                 })
//                 .catch(err =>{
//                     console.log(err)
//                     setResults("")
//                 })
//     }

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/products/"+_id)
//             .then(res => {
//                 console.log(res);
//                 setResults(res.data.results)
//             })
//             .catch(err => console.log(err))
//     }, [_id])