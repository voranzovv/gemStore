import React from 'react';

function ContentTitle({title}) {
    return (
        <div class="underlined-title">
        <div class="editContent">
          <h1 class="text-center latestitems">{title}</h1>
        </div>
        <div class="wow-hr type_short">
          <span class="wow-hr-h">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
        </div>
      </div>
    );
}

export default ContentTitle;