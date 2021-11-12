declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.ttf';
declare module '*.woff';
declare module '*.woff2';
declare module '*.scss';
declare module '*.less';
declare module '*.css';
declare module '*.json';

declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SvgElement>> {}
declare module '*.svg' {
  const svg: SvgrComponent
  export default svg;
}
