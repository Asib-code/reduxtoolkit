import React from "react";
import Scarchbar from "../components/Scarchbar";
import Grouplist from "../components/Grouplist";
import Friends from "../components/Friends";

import UserList from "../components/UserList";
import Friendsrequst from "../components/Friendsrequest"
import MyGroups from "../components/MyGroups";
import BlockedUsers from "../components/BlockedUsers";


const Home = () => {
  return (
    
   <section className=" py-9">

  <div className="flex gap-[19px]">
  <div className="">
    <Scarchbar/>
    <Grouplist />
    <Friendsrequst/>
    </div>
     <div className="">
     <Friends/>
     <MyGroups/>
     </div>
     <div className="">
     <UserList/>
     <BlockedUsers/>
     </div>
     
  </div>
     


   </section>



         
       
 
  );
};

export default Home;
