/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { DataFormArray } from 'model/etc/form-component.model';
import { useEffect, useState } from 'react';

export interface DataFormArrayImplements extends DataFormArray {
  patternStatus?: boolean;
  isRequired?: boolean;
}

interface IFinallyState {
  isValid: boolean | undefined;
  dataForm: Array<DataFormArrayImplements>;
}

interface ReturnHookUseForm {
  submitForm: (e: any) => void;
  isValid: boolean | undefined;
  dataForm: DataFormArrayImplements[];
}

function useContactusForm<T>(dataArray: T): ReturnHookUseForm {
  const [isValid, setIsValid] = useState<boolean | undefined>(false);
  const [dataForm, setDataForm] = useState<Array<DataFormArrayImplements>>(
    dataArray as Array<DataFormArrayImplements>
  );
  const [finallyState, setFinallyState] = useState<IFinallyState>({
    isValid: isValid,
    dataForm: dataForm
  });

  const submitForm = (e: any) => {
    e.preventDefault();

    const newData: Array<DataFormArrayImplements> = dataForm.map((item, i) => {
      const reg = new RegExp(item?.pattern as any);
      const patternReturn = reg.test(`${e.target[i].value}`);

      return {
        value: e.target[i].value,
        type: item.type,
        index: i,
        name: item.name,
        placeholder: item.placeholder,
        isRequired: item.required,
        required: item.required,
        messageRequired: item.messageRequired,
        messagePattern: item.messagePattern,
        pattern: item.pattern,
        patternStatus: patternReturn,
        defaultValue: item.defaultValue
      };
    });

    const checkeIsValid = [...newData];
    const validate = checkeIsValid.map(
      (item: DataFormArrayImplements, index: number, array: Array<DataFormArrayImplements>) => {
        const inputRequiredButUndefinedValue =
          (item.required && item.value === '') || item.value === undefined ? false : true;
        return array.every((item) => item.patternStatus && inputRequiredButUndefinedValue);
      }
    );

    setDataForm(newData);

    const validateStatus = validate.every((item) => item);
    setIsValid(validateStatus);
  };

  useEffect(() => {
    setFinallyState({
      isValid: isValid,
      dataForm: dataForm
    });
  }, [isValid, dataForm]);

  return {
    ...finallyState,
    submitForm
  };
}
export default useContactusForm;
