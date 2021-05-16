import React from 'react';

import {graphql, useStaticQuery} from 'gatsby'


export default function useSeo() {
    const data = useStaticQuery(graphql`
        query{
            datoCmsSite{
                globalSeo{
                    siteName
                titleSuffix
                fallbackSeo{
                        title
                description
                }
            }
            }
        }  
      
    `)
        return data.datoCmsSite.globalSeo
}
