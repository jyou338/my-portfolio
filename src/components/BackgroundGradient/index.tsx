import { GradientContainer } from './styles';

const BackgroundGradient: React.FC = ({ children }) => {
  return (
    <GradientContainer className="leading-normal tracking-normal bg-cover bg-fix h-screen w-screen">
      {children}
    </GradientContainer>
  );
};

export default BackgroundGradient;
