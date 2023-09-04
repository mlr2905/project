    let player=0 // כדי לדעת סוג משחק
    let xo = "1" //כדי לשנות  בין איקס לעיגול
    let rounds =0   // כדי לדעת כמות סבבים
    let win_x=0 // כדי לדעת כמות נצחונות של איקס
    let win_o=0// כדי לדעת כמות נצחונות של עיגול

    // בהתחלה אני מגדיר מחרוזת עם 9 מספרים שכולם מוגדרים -1
    let arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1]
    
    function select(){
            let option = document.getElementById('select').value;
        switch(option){
            
            case "3":Easy()
            break;
            case "4":medium()
            break;
        }
    }
    function hide_button(){
        Hide_pattern()
        const div1 = document.getElementById("play");
            div1.style.display = div1.style.display === "block" ? "none" : "block"; 
        const div2 = document.getElementById("TwoPlayer");
            div2.style.display = div2.style.display === "none" ? "block" : "none";
        const div3 = document.getElementById("bot");
            div3.style.display = div3.style.display === "none" ? "block" : "none";
        const div4 = document.getElementById("exit");
            div4.style.display = div4.style.display === "block" ? "none" : "block";  
    }
    function Easy(){
        Hide_select()
        hide_button()
        paly_game()
            return player=3;
    }
    function medium(){
        hide_button()
        Hide_select()
        paly_game()
            return player=4; 
    }
    function  Two_Player(){
        hide_button()
        paly_game()

            return player=2; 
    }

    function Hide_select(){
        const div1 = document.getElementById("select");
            div1.style.display = div1.style.display === "none" ? "block" : "none";
    }

    function paly_game(){
        const div = document.querySelector('#play');
        const value = div.textContent;
        if (value == 'stop') { ;
            document.getElementById("play").textContent = "play"
            Cleaning_results()
        }else { 
            document.getElementById("play").textContent = "stop"
            restarting()
        }
            Hide_divs()                         
    }

    function Cleaning_results(){
        rounds =0, win_x=0, win_o=0
        document.getElementById("5").textContent = win_x,
        document.getElementById("6").textContent = rounds,
        document.getElementById("7").textContent = win_o;

    }

    function restarting(){

        for (let index = 0; index <arr.length; index++) {
                document.getElementById(`cell-${index}`).textContent = null;                    
        }
            return  arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1] 
    }

    function Hide_divs(){
        for (let index = 0; index <arr.length; index++) {
            const div1 = document.getElementById(`cell-${index}`);
            div1.style.display = div1.style.display === "block" ? "none" : "block";
        }
        
    }
    function Hide_pattern(){
        for (let index = 1; index <8; index++) {
            const div1 = document.getElementById(`${index}`);
            div1.style.display = div1.style.display === "block" ? "none" : "block";
        }  
    }

    function cell_click(cell_number){

        if (arr[cell_number] !="x" && xo == "1" && arr[cell_number] !="o") {
            
            const img = document.createElement("img");
            img.src = "imgs/x.png";
            const src = document.getElementById(`cell-${cell_number}`);
            src.appendChild(img);
            arr[cell_number] = "x"
            win()
            finish1()
        }
        if (arr[cell_number] !="o" && xo == "0" && arr[cell_number] !="x") {
            const img = document.createElement("img");
            img.src = "imgs/o.png";
            const src = document.getElementById(`cell-${cell_number}`);
            src.appendChild(img);
            arr[cell_number] = "o"
            win()
            finish2()
            xo ="1"
        }
    }

    function finish2(){
        for (const number of arr){

            if(number == 0){

            for (let index = 0; index <arr.length; index++) {
                document.getElementById(`cell-${index}`).textContent = null;                  
            }
            return  arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1] ,rounds++,win_o++,xo ="1",
            document.getElementById("5").textContent = win_x,
            document.getElementById("6").textContent = rounds,
            document.getElementById("7").textContent = win_o;
            }
            else{
                return xo ="0" 
            }
        }    
    }

    function win(){

        switch(true){
            
            case (arr[0]=="x" && arr[1]=="x" && arr[2]=="x")||(arr[2]=="x" && arr[4]=="x" && arr[6]=="x"):
            case (arr[0]=="x" && arr[3]=="x" && arr[6]=="x")||(arr[0]=="x" && arr[4]=="x" && arr[8]=="x"):
            case (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")||(arr[6]=="x" && arr[7]=="x" && arr[8]=="x"):
            case (arr[2]=="x" && arr[5]=="x" && arr[8]=="x")||(arr[1]=="x" && arr[4]=="x" && arr[7]=="x"):
                return  swal({title: "win",imageUrl: "imgs/x.png",timer: 6000,}), arr=arr.map(reset);
            case (arr[0]=="o" && arr[1]=="o" && arr[2]=="o")||(arr[2]=="o" && arr[4]=="o" && arr[6]=="o"):
            case (arr[0]=="o" && arr[3]=="o" && arr[6]=="o")||(arr[0]=="o" && arr[4]=="o" && arr[8]=="o"):
            case (arr[3]=="o" && arr[4]=="o" && arr[5]=="o")||(arr[6]=="o" && arr[7]=="o" && arr[8]=="o"):
            case (arr[2]=="o" && arr[5]=="o" && arr[8]=="o")||(arr[1]=="o" && arr[4]=="o" && arr[7]=="o"):
                return  swal({title: "win",imageUrl: "imgs/o.png",timer: 6000,}), arr=arr.map(reset);             
        }
    }
            
    function reset(n){
        return 0;
    }

    function finish1(){
        for (const number of arr){

            if(number == 0){

                for (let index = 0; index <arr.length; index++) {
                    document.getElementById(`cell-${index}`).textContent = null;                
                }
    
                return arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1] ,rounds++,win_x++,
                document.getElementById("5").textContent = win_x,
                document.getElementById("6").textContent = rounds,
                document.getElementById("7").textContent = win_o;

            }else{
                xo=0                
                return  player == 2? Check_arr_player_two(arr): 
                        player == 3? Check_arr_Easy_Bot(arr):
                        player == 4? Check_arr_Medium_Bot(arr):"";
            }
        }
    }

    function Check_arr_player_two(arr) {
        
        if(arr[0] !==-1  && arr[1] !==-1 && arr[1]  !==-1&& arr[2] !==-1 && arr[3]!==-1 && arr[4]!==-1 && arr[5]!==-1 && arr[6]!==-1 && arr[7]!==-1&& arr[8] !==-1){
            return arr=arr.map(reset),
            rounds++,
            document.getElementById("6").textContent = rounds,
            swal({title: "Dead heat!!",text: "",timer: 2000}),
            xo=1,
            restarting();
        }
    }

    function Check_arr_Easy_Bot(arr) {
        for (let i = 0; i < arr.length; i++){

            if(arr[i] === -1){
                return easy_bot()
                break;
            }
        }
        if(arr[0] !==-1  && arr[1] !==-1 && arr[1]  !==-1&& arr[2] !==-1 && arr[3]!==-1 && arr[4]!==-1 && arr[5]!==-1 && arr[6]!==-1 && arr[7]!==-1&& arr[8] !==-1){
            return arr=arr.map(reset),
            rounds++,
            document.getElementById("6").textContent = rounds,
            swal({title: "Dead heat!!",text: "",timer: 2000}),
            xo=1,
            restarting();
        }
    }
    
    function easy_bot() {
    
        switch (true) {
            case (arr[4] !== "o" && arr[4] !== "x"):cell_click(4) ;
            break;               
            default: return default1()
        }
    }

    function Check_arr_Medium_Bot(arr) {
        for (const number of arr){

            if (number == -1){

                return medium_bot()
            }
        }
        if(arr[0] !==-1  && arr[1] !==-1 && arr[1]  !==-1&& arr[2] !==-1 && arr[3]!==-1 && arr[4]!==-1 && arr[5]!==-1 && arr[6]!==-1 && arr[7]!==-1&& arr[8] !==-1){
            return arr=arr.map(reset),
            rounds++,
            document.getElementById("6").textContent = rounds,
            swal({title: "Dead heat!!",text: "",timer: 2000}),
            xo=1,
            restarting();
        }
    }
        
    function medium_bot(){
        
        switch (true) {
            case (arr[4] !== "o" && arr[4] !== "x"):cell_click(4) ;
            break;               
            case (arr[0] === "x" && arr[1] === "x" && arr[3] === "x" &&arr[6] === "x" && arr[7] === "x"  && arr[5] === -1):cell_click(5)
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[7] === "x" && arr[1] === -1):cell_click(1);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[6] === "x" && arr[8] === "x" && arr[7] === -1):cell_click(7);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[6] === "x" && arr[7] === "x" && arr[3] === -1):cell_click(3);
            break;
            case (arr[0] === "x" && arr[5] === "x" && arr[6] === "x" &&  arr[7] === "x" && arr[8] === -1):cell_click(8)
            break;
            case (arr[1] === "x" && arr[5] === "x" && arr[6] === "x" && arr[7] === "x" && arr[0] === -1):cell_click(0)
            break;
            case (arr[1] === "x" && arr[2] === "x" && arr[3] === "x" && arr[8] === "x" && arr[0] === -1):cell_click(0)
            break;
            case (arr[1] === "x" && arr[2] === "x" && arr[8] === "x" && arr[5] === -1):cell_click(5);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[1] === -1):cell_click(1);
            break;
            case (arr[0] === "x" && arr[5] === "x" && arr[6] === "x" &&  arr[3] === -1 ):cell_click(3);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[7] === "x" &&  arr[8] === -1):cell_click(8);
            break;
            case (arr[1] === "x" && arr[6] === "x" && arr[7] === "x" && arr[8] === -1):cell_click(8)
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[8] === "x" &&  arr[1] === -1):cell_click(1)
            break;
            case (arr[2] === "x" && arr[3] === "x" && arr[8] === "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[6] === "x" && arr[5] == "x" && arr[5] === -1):cell_click(3)
            break;
            case (arr[4] === "x" && arr[2] === "x" && arr[3] === "x" && arr[7] === "x" && arr[1] === -1):cell_click(1)
            break;
            case (arr[4] === "x" && arr[2] === "x" && arr[3] === "x" && arr[1] === "x" && arr[1] === -1):cell_click(7)
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[3] == "x" && arr[7] === -1):cell_click(7)
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] == "x" && arr[7] === -1):cell_click(7)
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[6] == "x" && arr[7] === -1):cell_click(7)
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[7] === "x" && arr[3] == "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[7] === "x" && arr[8] == "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[6] === "x" && arr[2] == "x" && arr[5] === -1):cell_click(5)
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[6] === "x" && arr[8] == "x" && arr[5] === -1):cell_click(5)
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[6] === "x" && arr[7] == "x" && arr[5] === -1):cell_click(5)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[1] === "x" && arr[5] == "x" && arr[3] === -1):cell_click(3)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[1] === "x" && arr[3] == "x" && arr[5] === -1):cell_click(5)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[7] === "x" && arr[0] == "x" && arr[5] === -1):cell_click(5)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[7] === "x" && arr[3] == "x" && arr[5] === -1):cell_click(5)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[3] === "x" && arr[1] === -1):cell_click(1)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[7] === "x" && arr[1] === -1):cell_click(1)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[6] === "x" && arr[1] === -1):cell_click(1)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[5] === "x" && arr[1] === -1):cell_click(1)
            break;
            case (arr[4] === "x" && arr[8] === "x" && arr[1] === "x" && arr[7] === -1):cell_click(7)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[7] === "x" && arr[2] === -1):cell_click(2)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[0] === "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[3] === "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[2] === "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[4] === "x" && arr[1] === "x" && arr[5] === "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[2] === "x" && arr[8] === "x" && arr[5] === -1 ):cell_click(5);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[1] === -1 ):cell_click(1);
            break;
            case (arr[0] === "x"&&  arr[6] === "x"&& arr[3] === -1):cell_click(3);
            break;
            case (arr[1] === "x"&& arr[7] === "x" &&  arr[2] === -1):cell_click(2)
            break;
            case (arr[1] === "x"&& arr[2] === "x" && arr[0] === -1):cell_click(0)
            break;
            case (arr[4] === "x" && arr[2] === "x" && arr[6] === -1):cell_click(6)
            break;
            case (arr[4] === "x"&& arr[8] === "x" && arr[0] === -1):cell_click(0)
            break;
            case (arr[4] === "x"&& arr[1] === "x" && arr[7] === -1):cell_click(7)
            break;
            case (arr[4] === "x" && arr[8] === -1):cell_click(8)
            break;
            case (arr[2] === "x" && arr[8] === "x" && arr[5] === "x" && arr[1] === -1): cell_click(1);
            break;
            case (arr[1] === "x" && arr[7] === "x" && arr[0] === "x" && arr[2] === -1): cell_click(2);
            break;
            case (arr[4] === "x" && arr[2] === "x" && arr[0] === "x" && arr[6] === -1): cell_click(6);
            break;
            case (arr[4] === "x" && arr[7] === "x" && arr[0] === "x" && arr[8] === -1): cell_click(8);
            break;
            case (arr[0] === "x" && arr[5] === "x" && arr[6] === "x" && arr[7] === "x" && arr[2] === -1): cell_click(2);
            break;
            case (arr[1] === "x" && arr[6] === "x" && arr[7] === "x" && arr[8] === "x" && arr[0] === -1): cell_click(0);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] === "x" && arr[1] === -1): cell_click(1);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] === "x" && arr[1] === -1): cell_click(1);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] === "x" && arr[4] === -1): cell_click(4);
            break;
            case (arr[1] === "x" && arr[7] === "x" && arr[0] === "x" && arr[2] === -1): cell_click(2);
            break;
            case (arr[1] === "x" && arr[7] === "x" && arr[0] === "x" && arr[2] === -1): cell_click(0);
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[3] === "x" && arr[7] === "x" && arr[4] === -1): cell_click(4);
            break;
            case (arr[0] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] === "x" && arr[1] === -1): cell_click(1);
            break;
            case (arr[0] === "x" && arr[5] === "x" && arr[6] === "x" && arr[7] === "x" && arr[2] === -1): cell_click(2);
            break;
            case (arr[1] === "x" && arr[6] === "x" && arr[7] === "x" && arr[8] === "x" && arr[0] === -1): cell_click(0);
            break;
            case (arr[0] === "x" && arr[1] === "x" && arr[2] === "x" && arr[3] === -1): cell_click(3);
            break;
            case (arr[0] === "x" && arr[3] === "x" && arr[6] === "x" && arr[7] === -1): cell_click(7);
            break;
            case (arr[1] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] === -1): cell_click(8);
            break;
            case (arr[4] === "x" && arr[5] === "x" && arr[6] === "x" && arr[7] === -1): cell_click(7);
            break;
            case (arr[0] === "o" && arr[1] === "o" && arr[2] === -1): cell_click(2);
            break;
            case (arr[3] === "o" && arr[4] === "o" && arr[5] === -1): cell_click(5);
            break;
            case (arr[6] === "o" && arr[7] === "o" && arr[8] === -1): cell_click(8);
            break;
            case (arr[0] === "x" && arr[3] === "x" && arr[6] === "x" && arr[7] === -1): cell_click(7);
            break;
            case (arr[1] === "x" && arr[2] === "x" && arr[5] === "x" && arr[8] === -1): cell_click(8);
            break;
            default: return default1()   
        }
    }

    function default1(){
        while (true) {
            const cell_number = Math.floor(Math.random() * arr.length);

            if (arr[cell_number] === -1) {
                return  cell_click(cell_number)
            }else{
                continue;
            }
        }
    }

    function exit(){
        
        window.setTimeout( function() {window.location.reload();}, 1);
    }
