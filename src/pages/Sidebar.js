import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default function Props() {

  return (
      <>
    <Menu>
      <h4>Dashboard</h4>

      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a className="menu-item" href="/bonds">
        Bonds
      </a>
      <a className="menu-item" href="/dividends">
        Dividends
      </a>

      <h4>Stats</h4>

      <a className="menu-item" href="/treasury">
        Treasury
      </a>
      <a className="menu-item" href="/buybacks">
        Buybacks
      </a>

      <h4>External links</h4>
      <a className="menu-item" href="/documentation">
        Documentation
      </a>
    </Menu>
      

    </>
  );
};