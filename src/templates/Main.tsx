import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="text-white antialiased">
    {props.meta}
    {props.children}
  </div>
);

export { Main };
