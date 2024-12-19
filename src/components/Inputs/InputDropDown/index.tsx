'use client';

import React, { useRef, useEffect } from 'react';

/* unform */
import { useField } from '@unform/core';

/* password primereact */
import { Dropdown, DropdownProps } from 'primereact/dropdown';

/* props inputText */
interface PropsInput extends DropdownProps {
  name: string;
}

export const InputDropDown: React.FC<PropsInput> = ({
  name,
  options,
  ...rest
}) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Dropdown
      filter
      inputRef={inputRef}
      options={options}
      {...rest}
      emptyMessage="Nenhuma opção foi encontrada"
      emptyFilterMessage="Nenhuma opção foi encontrada"
      className={error ? `${rest.className} p-invalid` : `${rest.className}`}
    />
  );
};
