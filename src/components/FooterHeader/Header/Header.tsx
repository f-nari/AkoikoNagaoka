import HeaderItems from "./HeaderItems/HeaderItems"
import HeaderLogo from "./HeaderItems/HeaderLogo"
export type HeaderItemsType =  {
    name:string,
    displayname:string,
    url:string
}
const Header = () => {
    const headeritems:HeaderItemsType[] = [{
        name:'main',
        displayname:'おすすめ',
        url:'/'
    },{
        name:'food',
        displayname:'飲食店',
        url:'/food'
    },{
        name:'park',
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
            <HeaderItems headeritems = {headeritems}></HeaderItems>
        </div>
    )
}

export default Header