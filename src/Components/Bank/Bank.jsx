import { useState } from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bank = () => {
    const [addBalance , setAddBalance] = useState();
    const [withdrowAmount , setWithdrowAmount] = useState();
    const [CurrentBalance , setCurrentBalance] = useState(0);

    const handleInputFundAdd = (e) => {
        setAddBalance(e.target.value);
    }

    const handleFundAdd = ()=>{
        const inputAmount = parseFloat(addBalance);

        if(addBalance < 500){
            toast.info('Minimum Deposit Balance 500',{
                position: 'bottom-left',
                theme: "dark"
            });
        }else{
            setCurrentBalance((prevState)=>prevState+inputAmount);
            toast('Fund Succesfuly Deposited');
        }
        
        setAddBalance("");  
    }
    const handlewithdrwalInput = (e) => {
        setWithdrowAmount(e.target.value);
    }

    const handlewithdrowbtn = () => {

        const withdrawalbalance = parseFloat(withdrowAmount);

        if(withdrawalbalance < 0){
            setCurrentBalance((prevState)=> prevState);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Invalid Amount",
                showConfirmButton: false,
                timer: 2000
              });
        }else if(withdrawalbalance < 500){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Minimum Withdrow Amount 500 TK",
                showConfirmButton: false,
                timer: 2000
              });
        }else if(withdrawalbalance > 20000 ){
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Maximum Amount 20000 BDT",
                showConfirmButton: false,
                timer: 2000
              });
        }else if(withdrawalbalance > CurrentBalance){
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Not Enough Balance",
                showConfirmButton: false,
                timer: 2000
              });
        }else{
            setCurrentBalance((prevState)=> prevState - withdrawalbalance);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Cash Out succesfully",
                showConfirmButton: false,
                timer: 2000
              });
        }
        
        setWithdrowAmount(" ");
    }
    
    return (
        <>
            <ToastContainer />
            <div className='h-screen flex flex-wrap  justify-center'>
                <div className="w-96 rounded-md m-5 p-5 text-center space-y-4" >
                    <h2 className="text-3xl font-bold font-sans">Bd Bank</h2>
                    <p className='text-xl'>Current Balance : <span className='text-blue-800 font-bold'>{CurrentBalance} BDT</span> </p>
                    <input type="text" value={addBalance} className="border-2 p-2 rounded-md w-full" onChange={handleInputFundAdd}/>
                    <button className="bg-blue-700 text-white px-5 py-2 rounded-md w-full" onClick={handleFundAdd}>Cash In</button>

                    <input type="text" value={withdrowAmount}className="border-2 p-2 rounded-md w-full" onChange={handlewithdrwalInput}/>
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-md w-full" onClick={handlewithdrowbtn}>Cash Out</button>
                    

                </div>
            </div>
        </>
    );
}
export default Bank;