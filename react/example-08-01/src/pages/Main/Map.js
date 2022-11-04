/** import package */
import React from 'react';
import styled from 'styled-components';

/** import image */
import map from '../../assets/img/map.jpg';

const MapContainer = styled.div`
    max-width: 100%;
    padding:0 16px;
    img{
        width:100%;
    }

`

const Map = () => {
    return (
        <MapContainer>
            <img src={map} alt="지도" />
        </MapContainer>
    );
};

export default Map