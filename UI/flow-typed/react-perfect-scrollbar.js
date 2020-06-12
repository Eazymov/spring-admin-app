declare module 'react-perfect-scrollbar' {
  declare type Props = {|
    className?: string,
    children: React$Node,
  |};

  declare var PerfectScrollbar: React$ComponentType<Props>;

  declare export default typeof PerfectScrollbar;
}
