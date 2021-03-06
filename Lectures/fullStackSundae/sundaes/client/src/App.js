import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [sundaes, setSundaes] = useState([]);
  const [form, setForm] = useState({
    flavor: "",
    numScoops: null,
    nuts: false,
    customerName: "",
    name: ""
  });

  // const [loaded, setLoaded] = useState(false)

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    })
  }

  const onDeleteHandler = (_id, index, name) => {
    // make sure you do this first before doing anything at all, so you can see the information
    // console.log(_id);
    // console.log(index);

    // confirm is a build-in function for any browser javascript file.
    //  It's like alert, but it'll promp the user with a yes or no.
    // the user will determine whether the function returns true or false
    if (window.confirm(`are you sure you want to delete sundae ${name}?`)) {
      axios.delete(`http://localhost:8000/api/sundaes/${_id}/delete`)
        .then(res => {
          console.log(res);
          const copySundaes = [...sundaes];
          copySundaes.splice(index, 1);
          setSundaes(copySundaes);
        })
        .catch(err => console.log(err));
    }
  }

  // when you are using a single form state, a lot of your work is already cut out for you
  // you have to send over a full object to your backend with the new information
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form)

    // window.location.reload(false)
    // if you're using multiple states for your form, make a object in your submit handler. it's going to equal a full object
    // make sure you assemble out your full object with all the infor for your form
    // const sendMe = {flavor,numScoops}
    // now it's time to talk to the backend. you need two parameters
    axios.post("http://localhost:8000/api/sundaes/create/", form)
      .then(res => {
        console.log(res);
        // setLoaded(false)

        // we're going to talk to our database, tell it what to delete, so he's the id
        // you're going to want the index of where it exist in our state
        // you can manipulate your front-end data to display changes to avoid extra get request to the server
        setSundaes([...sundaes, res.data.results])
        // if you're updating or deleting something, if you're redirecting to a different page on submission, history.push is the way to go
        // window.location.reload(false);
        // history.push("/")
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // always start with http:// or it won't work
    axios.get("http://localhost:8000/api/sundaes/findAll")
      .then(res => {
        console.log(res.data.results);
        // anytime you're writing something for an api and making some sort of axios call, YOU GOT TO CONSOLE LOG IT!!!
        setSundaes(res.data.results);
        // setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])
  // could add loaded state in dependency array above!
  return (

    <div className="App">
      <marquee>Add your dream sundae!!!</marquee>

      <form onSubmit={onSubmitHandler} className='w-50 mx-auto'>
        <div className='row mb-2'>
          <div className="col">
            <input type="text" name="flavor" onChange={onChangeHandler} placeholder='flavor' />
          </div>
          <div className="col">
            <input type="number" name="numScoops" onChange={onChangeHandler} placeholder='how many scoops?' />
          </div>
          <div className="col">
            <label htmlFor="nuts">nuts</label>
            <input type="checkbox" name="nuts" onChange={onChangeHandler} />
          </div>
        </div >
        <div className='row mb-2'>
          <div className="col">
            <input type="text" name="customerName" onChange={onChangeHandler} placeholder="what's your name?" />
          </div>
          <div className="col">
            <input type="text" name="name" onChange={onChangeHandler} placeholder='what do you call this?' />
          </div>
        </div >

        <input type="submit" className='btn btn-lg btn-success mb-2' />

      </form>

      {/* after setting up your axios, it's now time to map out our state */}
      <ul>
        {
          sundaes.map((item, i) => {
            return <li key={i}>{item.name}: {item.numScoops} scoop {item.flavor} sundae {item.nuts && "with nuts"},
              {/* we need an arrow function for the onDeleteHandler. Arrow is for the variables */}
              toppings: {item.toppings.join(", ")} <button className='btn btn-sm btn-danger' onClick={() => onDeleteHandler(item._id, i, item.name)}>x</button></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
