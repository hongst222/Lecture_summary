import React from 'react'
import styled from 'styled-components'

const SidebarTriggerContainer = styled.input`
    display: none;
    &:checked {
        ~.side_menu {
            left: 0;
        }
        ~.blur {
            opacity: 1;
            pointer-events: all;
        }
    }
`;

const SidebarTrigger = () => {
    return (
        <SidebarTriggerContainer type='checkbox' id='side-btn' />
    );
};

export default SidebarTrigger;