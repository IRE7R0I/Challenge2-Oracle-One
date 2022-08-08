var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

        pincel.fillStyle = "#E5E5E5";
        pincel.fillRect(0, 0, 600, 320);

        pincel.lineWidth = "6"; //Grosor de la linea

        function dibujarBaseHorca() { 
            pincel.fillStyle = "#0A3871";
            pincel.fillRect(180, 290, 240, 15);

            console.log("PASO")
        }

        function dibujarHorca(){
            pincel.beginPath();
            pincel.moveTo(223, 290);
            pincel.lineTo(223, 20);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
            
            pincel.beginPath();
            pincel.moveTo(220, 20);
            pincel.lineTo(333, 20);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(330, 20);
            pincel.lineTo(330, 50);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke()         
        }

        function dibujarCabeza(){
            pincel.beginPath();
            pincel.arc(330, 82, 30, 0, 2*3.14);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
        }

        function dibujarCuerpo() {
            pincel.beginPath();
            pincel.moveTo(330, 110);
            pincel.lineTo(330, 210);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
        }

        function dibujarBrazoIzquierdo() {
            pincel.beginPath();
            pincel.moveTo(330, 130);
            pincel.lineTo(300, 170);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
        }

        function dibujarBrazoDerecho() {
            pincel.beginPath();
            pincel.moveTo(330, 130);
            pincel.lineTo(360, 170);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
        }

        function dibujarPiernaIzquierda() {
            pincel.beginPath();
            pincel.moveTo(330, 210);
            pincel.lineTo(300, 250);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
        }

        function dibujarPiernaDerecha() {
            pincel.beginPath();
            pincel.moveTo(330, 210);
            pincel.lineTo(360, 250);
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();
        }

        dibujarBaseHorca();
        
        function dibujoJuego(intentos){
            switch(intentos){
                case 1 :
                    dibujarHorca();
                    break;
                case 2 :
                    dibujarCabeza();
                    break;
                case 3 :
                    dibujarCuerpo();
                    break;
                case 4 :
                    dibujarBrazoIzquierdo();
                    break;
                case 5 :
                    dibujarBrazoDerecho();
                    break;
                case 6 :
                    dibujarPiernaIzquierda();
                    break;
                case 7 :
                    dibujarPiernaDerecha();
                    break;
            }
        }