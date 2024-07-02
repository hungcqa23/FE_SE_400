import Footer from 'src/components/Footer';
import RegisterHeader from 'src/components/RegisterHeader';

interface Props {
  children?: React.ReactNode;
}
export default function Register({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
    </div>
  );
}
