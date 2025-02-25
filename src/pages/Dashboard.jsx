import axios from "axios";
import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {

/*  
    Component should not be asynchronous: React components should not be asynchronous directly. 
    Instead, you should use the useEffect hook to handle side effects such as data fetching.
*/
  const [currBalance, setCurrBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://paytm-basic-clone-backend-1.onrender.com/account/balance", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCurrBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []); // Empty dependency array means this will run once when the component mounts

//   const name = async function(){
//      const token = 
//   }

  return (
    <div>
      <Appbar name={name}/>
      <div >
        <Balance value={currBalance} />
        <Users />
      </div>
    </div>
  );
};
