import React, {useContext} from 'react'
import CartContext from '../context/cart.context'
import { getFirestore, addDoc} from "firebase/firestore";
import useForm from '../Hooks/useForm';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

function Checkout(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didRender: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const {cart} = useContext(CartContext); 

    const[values, handleChange] = useForm({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        email2: "",
    })

    console.log({values})
    if(cart.items.length === 0)return <div>El carrito esta vacio</div>;

    const onSubmit = (e) => {
        e.preventDefault();

        for(const key in values){
            if(values[key] === ""){
            

        if(values.email !== values.email2){
            Toast.fire({
                icon: 'error',
                title: 'Los mails no coinciden'
              })
        }}
        sendOrder();
    }

    const sendOrder = () => {
        const db = getFirestore();

        const orderCollection = colection(db, "orders");
        addDoc(orderCollection,{
            ...cart,
            buyer:{
                name: values.name,
                lastName: values.lastName,
                phone: values.phone,
                email: values.email,
            },
            date: new Date(),
        }).then(({id}) => {
            Toast.fire({
                icon: 'success',
                title: 'Orden Enviada'
              })
        })
    }

    return (
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="name" name="name" onChange={handleChange} class="form-control" value={"fabricio"} id="exampleInputEmail1"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">LastName</label>
            <input type="lastname" name="lastname" onChange={handleChange} class="form-control" value={"dec"}  id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Phone</label>
            <input type="phone" name="phone" onChange={handleChange} class="form-control"value={"4568545454"}  id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="e-mail" name="e-mail" onChange={handleChange} class="form-control"value={"fabri@hotmail.com"}  id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Email</label>
            <input type="e-mail2" name="e-mail2" onChange={handleChange} class="form-control" value={"fabri@hotmail222.com"} id="exampleInputPassword1"/>
        </div>
            <button type="submit" onSubmit={onSubmit} class="btn btn-primary">Enviar</button>
        </form>
    
)
}}

export default Checkout


