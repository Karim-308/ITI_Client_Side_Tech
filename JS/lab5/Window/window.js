
function windowOpen(){
newWindow= window.open();

newWindow.document.write("<title>Virus</title>");
newWindow.document.write(`<font color=red> <h1>Your battery is going explode</h1> </font>`)
setTimeout(()=>{
newWindow.close();
},5000)

}