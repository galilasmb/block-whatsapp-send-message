async function enviarScript(scriptText){
  const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
  main = document.querySelector("#main"),
  textarea = main.querySelector(`div[contenteditable="true"]`)
  
  if(!textarea) throw new Error("N�o h� uma conversa aberta")
  
  for(const line of lines){
    console.log(line)
  
    textarea.focus();
    document.execCommand('insertText', false, line);
    textarea.dispatchEvent(new Event('change', {bubbles: true}));
  
    setTimeout(() => {
      (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
    }, 100);
    
    if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
  }
  
  return lines.length;
}


let resultado = [];

for (let i = 0; i < 10000; i++) {
  resultado.push("Enquanto n�o bloquear, continuarei enviando...");
}

let resultadoFinal = resultado.join("\n");

enviarScript(resultadoFinal);