
import React, { useState, } from 'react';
import { Input, Button, Menu } from 'antd';
import { connect } from 'umi';

export default connect(({ layout: { menus } }) => ({
  menus
}))(function Demo(props) {
  const { route: { path, defaultName }, menus, history, dispatch } = props;
  const [iptVal, setIptVal] = useState('');

  const onSave = () => {
    if (!iptVal || iptVal === defaultName) return;
    const newMenu = menus.map(item => {
      return {
        ...item,
        children: item.children.map(m => {
          if (m.key === path) {
            return { key: path, label: iptVal }
          } else {
            return m
          }
        })
      }
    })
    dispatch({
      type: 'layout/applyData',
      payload: { 'menus': newMenu }
    })
  };

  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Menu
        theme='dark'
        style={{ width: 200, height: '100%' }}
        mode="inline"
        defaultOpenKeys={menus.map(m => m.key)}
        items={menus}
        selectedKeys={[path]}
        onClick={({ key }) => { history.push(key) }}
      />
      <div style={{ padding: 24, }}>
        <Input
          ref={(r) => { r && r.focus() }}
          onChange={(e) => { setIptVal(e.target.value) }}
          placeholder={defaultName}
          style={{ width: 200, marginRight: 24 }}
        />
        <Button htmlType='submit' onClick={onSave} type='primary'>保存</Button>
      </div>
    </div>
  )
})