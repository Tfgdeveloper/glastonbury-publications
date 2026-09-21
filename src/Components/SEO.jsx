// src/components/SimpleSEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keyword, focusKeyword, children }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keyword && <meta name="keywords" content={keyword} />}
    {focusKeyword && <meta name="focus-keyword" content={focusKeyword} />}
    
    {/* This allows the script to be injected */}
    {children}
  </Helmet>
);

export default SEO;