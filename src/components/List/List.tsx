import React from 'react';

import './List.scss';

export const List = (props: any) => <div className="List"><h2>{props.title}</h2><div className="List-items">{props.children}</div></div>
