import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Meta = (props) => {
    
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>
                {/*SEO 태그 */}
                <meta name="description" content={props.description} />
                
                
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;