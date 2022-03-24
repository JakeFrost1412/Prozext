import React from 'react';  
import _ from 'lodash';
import Layout from './Layout';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: {},
            aave2: {}, olympusdao: {},
            ftm_liquiddriver: {}, ftm_yearn2: {}, ftm_morpheusswap: {}, ftm_soul: {}, ftm_yieldwolf: {}, ftm_3omb: {}, ftm_devil: {},
            avax_impermax: {},
            aurora_trisolaris: {}
        }
    }

    componentDidMount() {
        const url99='https://openapi.debank.com/v1/user/total_balance?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3';
        fetch(url99).then((res) => res.json()).then((json) => {
            this.setState({
                items: json
            });
        })
        let proto = ['aave2', 'olympusdao', 'ftm_liquiddriver', 'ftm_yearn2', 'ftm_morpheusswap', 'ftm_soul', 'ftm_yieldwolf', 'ftm_3omb', 'ftm_devil', 'avax_impermax', 'aurora_trisolaris']
        //          <-------eth-----------><--------------------------------------------------------------ftm-----------------------------------------><----avax-------><---aurora--------->

        const url=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[0]}`;
        fetch(url).then((res) => res.json()).then((json) => {
            this.setState({    
                aave2: json
            });
        })
        const url1=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[1]}`;
        fetch(url1).then((res) => res.json()).then((json) => {
            this.setState({    
                olympusdao: json
            });
        })
        const url2=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[2]}`;
        fetch(url2).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_liquiddriver: json
            });
        })
        const url3=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[3]}`;
        fetch(url3).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_yearn2: json
            });
        })
        const url4=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[4]}`;
        fetch(url4).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_morpheusswap: json
            });
        })
        const url5=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[5]}`;
        fetch(url5).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_soul: json
            });
        })
        const url6=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[6]}`;
        fetch(url6).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_yieldwolf: json
            });
        })
        const url7=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[7]}`;
        fetch(url7).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_3omb: json
            });
        })
        const url8=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[8]}`;
        fetch(url8).then((res) => res.json()).then((json) => {
            this.setState({    
                ftm_devil: json
            });
        })
        const url9=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[9]}`;
        fetch(url9).then((res) => res.json()).then((json) => {
            this.setState({    
                avax_impermax: json
            });
        })
        const url10=`https://openapi.debank.com/v1/user/protocol?id=0xcbe505b4E89670827655FF3Da89772018e93cEA3&protocol_id=${proto[10]}`;
        fetch(url10).then((res) => res.json()).then((json) => {
            this.setState({    
                aurora_trisolaris: json
            });
        })
    }

    render() {
        
        //console.log('Obj :',this.state)
        return (
        <>
            <Sidebar />
            <Layout />
            
            <h1 style={{paddingLeft: '25px', paddingTop: '-10'}}>Total: ${Math.round(this.state['items']['total_usd_value'] * 1000) / 1000}</h1>
            <h1 style={{paddingLeft: '25px'}}>On-Chain Assets</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{paddingLeft: '25px'}}>

            
    <Box component="first"
      sx={{
        width: '350px',
        height: '350px',
        display: 'block',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}><div style={{textAlign: 'center', paddingTop: '15px'}}>
          <h3 style={{lineHeight: '10pt'}}>ETH</h3>
            <h4>Total Balance</h4>
            <h2 style={{lineHeight: '1pt'}}>${Math.round(_.get(this.state['items'], 'chain_list[0].usd_value') * 10000) / 10000}</h2>
      </div>
    </Box>
    </div>


    <div style={{paddingLeft: '20px'}}>
    <Box component="second"
      sx={{
        width: '350px',
        height: '350px',
        display: 'block',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}><div style={{textAlign: 'center', paddingTop: '15px'}}>
            <h3 style={{lineHeight: '10pt'}}>FTM</h3>
            <h4>Total Balance</h4>
            <h2 style={{lineHeight: '1pt'}}>${Math.round(_.get(this.state['items'], 'chain_list[4].usd_value') * 10000) / 10000}</h2>
      </div>
    </Box>
    </div>


    <div style={{paddingLeft: '20px'}}>
    <Box component="third"
      sx={{
        width: '350px',
        height: '350px',
        display: 'block',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}><div style={{textAlign: 'center', paddingTop: '15px'}}>
            <h3 style={{lineHeight: '10pt'}}>AVAX</h3>
            <h4>Total Balance</h4>
            <h2 style={{lineHeight: '1pt'}}>${Math.round(_.get(this.state['items'], 'chain_list[7].usd_value') * 10000) / 10000}</h2>
      </div>
    </Box>
</div>
<div style={{paddingLeft: '20px'}}>
    <Box component="fourth"
      sx={{
        width: '350px',
        height: '350px',
        display: 'block',
        paddingLeft: '20px',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}><div style={{textAlign: 'center', paddingTop: '15px'}}>
            <h3 style={{lineHeight: '10pt'}}>AURORA</h3>
            <h4>Total Balance</h4>
            <h2 style={{lineHeight: '1px'}}>${Math.round(_.get(this.state['items'], 'chain_list[16].usd_value') * 10000) / 10000}</h2>
      </div>
    </Box>
    </div>
    
    </div>
    <h1 style={{paddingLeft: '25px'}}>Protocols</h1>

    <div style={{paddingLeft: '30px', lineHeight: '1px'}}>
                <h3>{this.state.aave2.name}</h3>
                <h5>{this.state.aave2.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightcoral'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.reward_token_list[0].name')} </h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4>Reward</h4> </td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                </table>


                <h3>{this.state.olympusdao.name}</h3>
                <h5>{this.state.olympusdao.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightcoral'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.olympusdao, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.olympusdao, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.ftm_liquiddriver.name}</h3>
                <h5>{this.state.ftm_liquiddriver.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_liquiddriver, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_liquiddriver, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.ftm_yearn2.name}</h3>
                <h5>{this.state.ftm_yearn2.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_yearn2, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_yearn2, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                </table>


                <h3>{this.state.ftm_morpheusswap.name}</h3>
                <h5>{this.state.ftm_morpheusswap.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.reward_token_list[0].name')} </h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4>Reward</h4> </td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.ftm_soul.name}</h3>
                <h5>{this.state.ftm_soul.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.reward_token_list[0].name')} </h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4>Reward</h4> </td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.ftm_yieldwolf.name}</h3>
                <h5>{this.state.ftm_yieldwolf.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_yieldwolf, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_yieldwolf, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.ftm_3omb.name}</h3>
                <h5>{this.state.ftm_3omb.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.reward_token_list[0].name')} </h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4>Reward</h4> </td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.ftm_devil.name}</h3>
                <h5>{this.state.ftm_devil.chain} </h5>
        
                <table style={{width: '100%', backgroundColor: 'lightblue'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.reward_token_list[0].name')} </h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4>Reward</h4> </td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[1].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[1].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.reward_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Reward </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[1].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[1].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.reward_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Reward </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.reward_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Reward </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.reward_token_list[0].amount')}</h4></td>
                </tr>
                </table>
               
                <h3>{this.state.avax_impermax.name}</h3>
                <h5>{this.state.avax_impermax.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightgoldenrodyellow'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[1].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[1].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Borrow </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[0].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[1].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Borrow </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[1].amount')}</h4></td>
                </tr>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[1].detail.token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> -- </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.avax_impermax, 'portfolio_item_list[1].detail.token_list[0].amount')}</h4></td>
                </tr>
                </table>

                <h3>{this.state.aurora_trisolaris.name}</h3>
                <h5>{this.state.aurora_trisolaris.chain} </h5>

                <table style={{width: '100%', backgroundColor: 'lightseagreen'}}>
                <tr>
                <td style={{textAlign: 'left', width: '33%'}}><h4>{_.get(this.state.aurora_trisolaris, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</h4></td>
                <td style={{textAlign: 'center', width: '33%'}}><h4> Supply </h4></td>
                <td style={{textAlign: 'right', width: '33%', paddingRight: '30px'}}><h4>{_.get(this.state.aurora_trisolaris, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</h4></td>
                </tr>
                </table>
            </div>
        </>
        );
    }
}
