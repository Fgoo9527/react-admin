import Home from '../views/home/index'
import List from '../views/list/index'
import Table from '../views/table/index'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const routes = [
  {
    path: '/',
    component: Home,
    name: '首页',
    icon: UserOutlined,
    exact: true
  },
  {
    path: '/list',
    component: List,
    name: '列表',
    icon: VideoCameraOutlined
  },
  {
    path: '/table',
    component: Table,
    name: '表格',
    icon: UploadOutlined
  }
]


export default routes