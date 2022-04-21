import React from 'react';  
import _ from 'lodash';
import Box from '@mui/material/Box';
import './Treasury.css';

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
        <div className="hero">
            <h1 class="header">
                <span class="header-line-one">Total: ${Math.round(this.state['items']['total_usd_value'] * 1000) / 1000}</span>
                <span class="header-line-two">On-Chain Assets</span>
            </h1>
        </div>
        <section class="section-main">
        <div class="container">
          <div class="cards">
            <div class="card">
              <h2 class="card-header card-header-eth">ETH</h2>
              <div class="card-content">
                <p class="label">Total Balance</p>
                <p class="balance">${Math.round(_.get(this.state['items'], 'chain_list[0].usd_value') * 10000) / 10000}</p>
              </div>
            </div>
            <div class="card">
              <h2 class="card-header card-header-ftm">FTM</h2>
              <div class="card-content">
                <p class="label">Total Balance</p>
                <p class="balance">${Math.round(_.get(this.state['items'], 'chain_list[4].usd_value') * 10000) / 10000}</p>
              </div>
            </div>
            <div class="card">
              <h2 class="card-header card-header-avax">AVAX</h2>
              <div class="card-content">
                <p class="label">Total Balance</p>
                <p class="balance">${Math.round(_.get(this.state['items'], 'chain_list[7].usd_value') * 10000) / 10000}</p>
              </div>
            </div>
            <div class="card">
              <h2 class="card-header card-header-aurora">AURORA</h2>
              <div class="card-content">
                <p class="label">Total Balance</p>
                <p class="balance">${Math.round(_.get(this.state['items'], 'chain_list[16].usd_value') * 10000) / 10000}</p>
              </div>
            </div>
          </div>

          <div class="protocols">
            <h3 class="heading-tertiary">Protocols</h3>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.aave2.name}</p>
                </div>
                <p class="header-part-two">{this.state.aave2.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.aave2, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.olympusdao.name}</p>
                </div>
                <p class="header-part-two">{this.state.olympusdao.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.olympusdao, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.olympusdao, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            {/*
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_liquiddriver.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_liquiddriver.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_liquiddriver, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_liquiddriver, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            */}
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_yearn2.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_yearn2.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_yearn2, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_yearn2, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_morpheusswap.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_morpheusswap.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_morpheusswap, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_soul.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_soul.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_soul, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_yieldwolf.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_yieldwolf.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_yieldwolf, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_yieldwolf, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_3omb.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_3omb.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_3omb, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</p>
                </div>
              </div>
            </div>

            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.ftm_devil.name}</p>
                </div>
                <p class="header-part-two">{this.state.ftm_devil.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[0].detail.reward_token_list[0].amount')}</p>
                </div>
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[1].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.supply_token_list[1].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[1].detail.reward_token_list[0].amount')}</p>
                </div>
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[1].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.supply_token_list[1].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[2].detail.reward_token_list[0].amount')}</p>
                </div>
                <div class="content-supply">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-reward">
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.reward_token_list[0].name')}</p>
                  <p class="reward-para">Reward</p>
                  <p>{_.get(this.state.ftm_devil, 'portfolio_item_list[3].detail.reward_token_list[0].amount')}</p>
                </div>
              </div>
            </div>

            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.avax_impermax.name}</p>
                </div>
                <p class="header-part-two">{this.state.avax_impermax.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
                <div class="content-supply">
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[1].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.supply_token_list[1].amount')}</p>
                </div>
                <div class="content-borrow">
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[0].name')}</p>
                  <p>Borrow</p>
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[0].amount')}</p>
                </div>
                <div class="content-borrow">
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[1].name')}</p>
                  <p>Borrow</p>
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[0].detail.borrow_token_list[1].amount')}</p>
                </div>
                <div class="content-unknown">
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[1].detail.token_list[0].name')}</p>
                  <p>--</p>
                  <p>{_.get(this.state.avax_impermax, 'portfolio_item_list[1].detail.token_list[0].amount')}</p>
                </div>
              </div>
            </div>
            <div class="component">
              <div class="component-header">
                <div class="header-part-one">
                  <div class="box"></div>
                  <p class="component-name">{this.state.aurora_trisolaris.name}</p>
                </div>
                <p class="header-part-two">{this.state.aurora_trisolaris.chain}</p>
              </div>
              <div class="component-content">
                <div class="content-supply">
                  <p>{_.get(this.state.aurora_trisolaris, 'portfolio_item_list[0].detail.supply_token_list[0].name')}</p>
                  <p>Supply</p>
                  <p>{_.get(this.state.aurora_trisolaris, 'portfolio_item_list[0].detail.supply_token_list[0].amount')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
        );
    }
}
