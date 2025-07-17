const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-background/80 backdrop-blur-sm border-b border-muted/50">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/0da6e8e7-2103-47a8-8d7f-ebecb94fd757.png" 
          alt="DevCore Logo" 
          className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </header>
  );
};

export default Header;