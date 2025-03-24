// import { supabase } from '@/utils/supabase/client'
// import React, { useEffect, useState } from 'react'

// ///////////////////////////////////////////
// //これから、app全体をラップするための関数を作成する//
// ////////////////////////////////////////////

// type UserProfile = {
//     name?:string,
//     picture?:string,
//   }


// export const AuthProvider: React.FC = ({ children }) => {
//     const [userProfile,setUserProfile] = useState<UserProfile|null>(null)

//     //まずは、セッションを受け取るための設定
//     useEffect = (()=>{
//         const { data: { user } } = await supabase.auth.getUser()
//         if(user){
//             setUserProfile(user.user_metadata)
//         }else{

//         }
//     },[])

//     }
//   return (
//     <div>AuthContext</div>
//   )
// }

