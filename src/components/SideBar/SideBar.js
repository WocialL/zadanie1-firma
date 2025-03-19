import React from 'react';
import SideBarLink from './SideBarLink';
import './SideBar.css';
import {entities} from '../../providers/entityProvider';

function SideBar() {
  return (
    <div className='text-center bg-sidemenu bg-no-repeat'>
      <ul className='list-unstyled components px-3 pt-10'>
        {entities.map((entity) => {
          return (
            <div>
              <SideBarLink
                key={entity.name}
                optionName={entity.name}
                route={entity.link}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
