import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: React.FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autofocus,
    ...props
  }) => {
    const [isFocused, setFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e?.target?.value);
      setCaretPosition(e?.target?.value?.length);
    };

    const onBlur = () => {
      setFocused(false);
    };
    const onFocus = () => {
      setFocused(true);
    };
    const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };
    useEffect(() => {
      if (autofocus) {
        setFocused(true);
        inputRef?.current?.focus();
      }
    }, [autofocus]);
    return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
        {placeholder && <div>{`${placeholder}>`}</div>}
        <div className={styles.caretWrapper}>
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={handleChange}
            className={classNames(styles.input, {}, [className])}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...props}
          />
          {isFocused && (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  },
);
