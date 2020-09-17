import React,{useEffect,useState} from 'react'
import { getHotFund,getFundDetail } from '../../api/fund'
import { Table,Drawer } from 'antd'


export default function Home (){
  const [ hot, setHot ] = useState([])
  const [ code, setCode ] = useState('')
  useEffect(()=>{
    getHotFund().then(res=> {
      // console.log(res);
      setHot(res.data.rank)
    })
  },[])
  const columns = [
    {
      title: '基金名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '基金代码',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '基金类型',
      dataIndex: 'fundType',
      key: 'fundType',
    },
    {
      title: '今日涨幅',
      dataIndex: 'dayGrowth',
      key: 'dayGrowth',
    },
    {
      title: '累计净值',
      dataIndex: 'netWorth',
      key: 'netWorth',
    },
    {
      title: '更新日期',
      dataIndex: 'netWorthDate',
      key: 'netWorthDate',
    },
  ]
  const [visible, setVisible] = useState(false)
  const [fundDetail, setFundDetail] = useState({})
  const onClose = () => {
    setVisible(false);
  };
  useEffect(()=>{
    const data = {
      code: code,
      startDate: '2020-09-01',
      endDate: '2020-09-01'
    }
    getFundDetail(data).then(res=>{
      // console.log(res);
      if(res.code === 200){
        setFundDetail(res.data)
      }
    })
  }, [code] )
  return(
    <>
      <Table 
      dataSource={hot} 
      columns={columns} 
      rowKey='code' 
      onRow={record => {
        return {
          onClick: e => {
            setCode(record.code)
            setVisible(true)
          }
        };
      }}/>
      <Drawer
        title="基金明细"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div>{fundDetail.name}</div>
      </Drawer>
    </>
  )
}