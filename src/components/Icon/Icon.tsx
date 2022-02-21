import React from 'react';

import 'material-icons-font/material-icons-font.css';
import './Icon.scss';

// Browse Material Icons : https://fonts.google.com/icons

export const Icon = (props: any) => <i className="material-icons Icon" style={{fontSize: props.size + 'px'}}>{props.name}</i>

