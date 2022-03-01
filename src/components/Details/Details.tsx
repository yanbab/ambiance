import React from 'react';

import './Details.scss';

export const Details = (props: any) => <div className="Details">
    <details>
      <summary>{props.summary}</summary>
      <div className="content">
        {props.children}
        </div>
    </details>
</div>
