import React from 'react';
import useMetaMask from '../hooks/metamask';

function Dashboard() {
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  return (
    <>
    <h1>Dashboard</h1>
    <div className="mt-2 mb-2">
    Connected Account: { isActive ? account : '' }
    </div>
    </>
    
  );
}

export default Dashboard;
