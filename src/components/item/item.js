import React from 'react';

import './item.scss';

const Item = ({important, done, label, onToggleImportant, onToggleDone, onDelete}) => {

    let classNames = 'item';
    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }


    return (
        <span className={classNames}>
      <span
          className="item__label"
          onClick={onToggleDone}>{label}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
    );
};

export default Item;
