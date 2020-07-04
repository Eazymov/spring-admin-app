declare module 'react-text-mask' {
  declare export type MaskArray = $ReadOnlyArray<RegExp | string>;

  declare export type Mask = MaskArray | ((value: string) => MaskArray);

  declare type Props = {|
    mask: Mask,
    type?: string,
    title?: string,
    guide?: boolean,
    className?: string,
    disabled?: boolean,
    readOnly?: boolean,
    value: null | string,
    placeholder?: string,
    defaultValue?: string,
    'data-component'?: string,
    onBlur?: (event: SyntheticFocusEvent<HTMLInputElement>) => mixed,
    onFocus?: (event: SyntheticFocusEvent<HTMLInputElement>) => mixed,
    onInput?: (event: SyntheticInputEvent<HTMLInputElement>) => mixed,
    onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => mixed,
  |};

  declare type InputElement = {|
    update(): void,
  |};

  declare export default class TextMask extends React$Component<Props> {
    textMaskInputElement: InputElement;
  }
}
