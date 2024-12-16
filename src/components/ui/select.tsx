import React from 'react';

export const Select = ({ value, onValueChange, children }) => (
  <div>
    <select value={value} onChange={(e) => onValueChange(e.target.value)}>
      {children}
    </select>
  </div>
);

export const SelectTrigger = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const SelectValue = ({ placeholder }) => (
  <option value="" disabled>
    {placeholder}
  </option>
);

export const SelectContent = ({ children }) => <>{children}</>;

export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
