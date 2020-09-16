import React from 'react'
import {Menu} from 'antd'
import { Link } from 'react-router-dom'
import routes from '../router/index'

function SaideMenu (){
  // let [defNav, setdefNav] = useState(["/"])
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
      { routes.map((item, index) => 
        <Menu.Item icon={<item.icon />} key={index+1}>
          <Link to={item.path} >{item.name}</Link> 
        </Menu.Item>
        ) 
      }
    </Menu>
  )
}

export default SaideMenu