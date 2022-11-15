import React from 'react'
import { Menu } from 'antd';
import './Navigation.css';
import DLogo from '../../assets/Daraz_s.png';

function Header() {
    return (
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ height:'inherit' }}
      >
        <div className='ant-pro-global-header'>
           <div className='ant-pro-global-header-logo'>
            <a>
           {/* <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'  style={{float:'left'}} height={28} width={28} /> */}
           <img src={DLogo}  style={{float:'left'}} />
           <h1 className='headerTitle'>Prepayment</h1></a>
           </div>
        </div>

        <div style={{flex: '1 1 0%'}}></div>
           
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}



        <div className="ant-space ant-space-horizontal ant-space-align-center right___3L8KG  dark___1NwCY" style={{gap: "8px"}}>
          {/* <div class="ant-space-item" style="">
          </div>
          <div class="action___LP4_P search___2W0sJ headerSearch___RN1il"><span role="img" aria-label="search" class="anticon anticon-search" style="cursor: pointer;">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
          </span><div class="ant-select ant-select-auto-complete input___3Vzpl ant-select-single ant-select-customize-input ant-select-show-search"><div class="ant-select-selector"><span class="ant-select-selection-search">
          <input autocomplete="off" aria-label="站内搜索" placeholder="站内搜索" type="search" class="ant-input ant-input-sm ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_0_list" aria-autocomplete="list" aria-controls="rc_select_0_list" aria-activedescendant="rc_select_0_list_0" value="umi ui" id="rc_select_0">
          </span>
          </div>
          </div>
          </div>
          </div> */}
          </div>
      </Menu>
    )
}

export default Header