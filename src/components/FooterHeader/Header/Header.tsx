import { User } from "@supabase/supabase-js"
import HeaderItems from "./HeaderItems/HeaderItems"
import HeaderLogo from "./HeaderItems/HeaderLogo"
export type HeaderItemsType =  {
    name:string,
    displayname:string,
    url:string
}

type Props = {
    user_data: User;
  };


const Header = ({user_data}:Props) => {
    
    
    const user_name = user_data.user_metadata?.name
    const headeritems:HeaderItemsType[] = [{
        name:'main',
        displayname:'飲食店',
        url:'/'
    },{name:'park',
        displayname:'公園',
        url:'/park'
    },{
        name:'event',
        displayname:'イベント',
        url:'/event'
    },{
        name:'newdataadd',
        displayname:'新規登録',
        url:'/newdataadd'
    }

    
]

    return (
        <div>
            <HeaderLogo></HeaderLogo>
            <HeaderItems headeritems = {headeritems} user_name = {user_name} ></HeaderItems>
        </div>
    )
}

export default Header