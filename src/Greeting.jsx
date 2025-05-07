function Button({text = 'Click me',color = 'blue', fontSize = '30',handleClick}) {
    const buttonStyle = {
        color : color,
        fontSize: fontSize + "px"
    };
  return (
    <button onClick={handleClick} style={{buttonStyle}} >
      {text}
    </button>
  );
}
export function Greeting() {
    const handleButtonClick= (url) =>{
        window.location.href = url;
    };
  return (
    <div>
        <Button handleClick={()=> handleButtonClick('https://www.theodinproject.com')}/>
    </div>
  );
}