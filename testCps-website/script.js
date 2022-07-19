let clicks = 0;
     function handleClick() {
      const time = document.getElementById('time');
      const click = document.getElementById('demo');
      const cpsel = document.getElementById('cps');
      const but = document.getElementById('click-button');

      clicks++
      click.innerHTML = clicks;
      
      if (isNaN(click.innerHTML) || click.innerHTML <= 1) {

        setTimeout(() => {
          const cps = clicks / 5;
          click.innerHTML = `${clicks} clicks in  5 Seconds`;
          cpsel.innerHTML = `${cps}`;

          document.getElementById("click-button").classList.add("mode-1");
          var x = document.getElementById("restart-button");
          x.style.display = "block";
          var f = document.getElementsByClassName("conten");
          f.style.marginBottom = '1000000px';
    
      }, 5000);
      }
     }  


     function restart() {
      document.getElementById("click-button").classList.remove("mode-1");
      var x = document.getElementById("restart-button");
      x.style.display = "none";
      const cpsel = document.getElementById('cps');
      clicks = 0;
      cps = 0;
      const click = document.getElementById('demo');
      click.innerHTML = `0`;
      cpsel.innerHTML = `0`;

    }
