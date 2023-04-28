import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
}
